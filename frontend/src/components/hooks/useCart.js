import {
  useCallback,
  useEffect,
} from "react";
import CART_API from "../../config/api"
import { toast } from "react-toastify";

import {
  useSelector,
  useDispatch,
} from "react-redux";

import {
  setCartItems,
  clearCart,
} from "../../store/cartSlice";


const CART_API_URL = CART_API.CART;


const useCart = () => {

  const dispatch = useDispatch();

  const token = useSelector(
    (state) => state.auth.token
  );

  const cartItems = useSelector(
    (state) => state.cart.items
  );


  // =========================
  // FETCH CART
  // =========================

  const fetchCart = useCallback(async () => {
    try {

      if (!token) {
        dispatch(clearCart());
        return;
      }

      const response = await fetch(
        `${CART_API_URL}/api/cart`,
        {
          method: "GET",
          headers: {
            token: token,
          },
        }
      );

      const data = await response.json();

      if (!response.ok) {
        toast.error(
          data.message ||
            "Unable to fetch cart"
        );
        return;
      }

      dispatch(
        setCartItems(data.items || [])
      );

    } catch (error) {

      console.error(
        "Fetch cart error:",
        error
      );

      toast.error(
        "Unable to fetch cart"
      );
    }
  }, [token, dispatch]);


  // =========================
  // ADD TO CART
  // =========================

  const addToCart = async (product) => {

    try {

      if (!token) {
        toast.error(
          "You must be logged in to continue"
        );
        return;
      }

      const response = await fetch(
        `${CART_API_URL}/api/cart/add`,
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
            token: token,
          },

          body: JSON.stringify({
            productId: product.id,
            name: product.name,
            category: product.category,
            price: product.price,
            image: product.image,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        toast.error(
          data.message ||
            "Unable to add product to cart"
        );
        return;
      }

      dispatch(
        setCartItems(
          data.cart.items
        )
      );

      toast.success(
        "Added to cart"
      );

    } catch (error) {

      console.error(
        "Add to cart error:",
        error
      );

      toast.error(
        "Unable to add product to cart"
      );
    }
  };


  // =========================
  // UPDATE QUANTITY
  // =========================

  const updateQuantity = async (
    productId,
    action
  ) => {

    try {

      if (!token) {
        toast.error(
          "You must be logged in to continue"
        );
        return;
      }

      const response = await fetch(
        `${CART_API_URL}/api/cart/update/${productId}`,
        {
          method: "PATCH",

          headers: {
            "Content-Type": "application/json",
            token: token,
          },

          body: JSON.stringify({
            action: action,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        toast.error(
          data.message ||
            "Unable to update quantity"
        );
        return;
      }

      dispatch(
        setCartItems(
          data.cart.items
        )
      );

    } catch (error) {

      console.error(
        "Update quantity error:",
        error
      );

      toast.error(
        "Unable to update quantity"
      );
    }
  };


  // =========================
  // REMOVE FROM CART
  // =========================

  const removeFromCart = async (
    productId
  ) => {

    try {

      if (!token) {
        toast.error(
          "You must be logged in to continue"
        );
        return;
      }

      const response = await fetch(
        `${CART_API_URL}/api/cart/remove/${productId}`,
        {
          method: "DELETE",

          headers: {
            token: token,
          },
        }
      );

      const data = await response.json();

      if (!response.ok) {
        toast.error(
          data.message ||
            "Unable to remove product from cart"
        );
        return;
      }

      dispatch(
        setCartItems(
          data.cart.items
        )
      );

      toast.success(
        "Removed from cart"
      );

    } catch (error) {

      console.error(
        "Remove from cart error:",
        error
      );

      toast.error(
        "Unable to remove product from cart"
      );
    }
  };


  // =========================
  // FETCH ON TOKEN CHANGE
  // =========================

  useEffect(() => {
    fetchCart();
  }, [fetchCart]);

const clearCartFromDatabase = async () => {
  try {
    if (!token) {
      dispatch(clearCart());
      return;
    }

    const response = await fetch(
      `${CART_API_URL}/api/cart/clear`,
      {
        method: "DELETE",
        headers: {
          token: token,
        },
      }
    );

    const data = await response.json();

    if (!response.ok) {
      toast.error(
        data.message || "Unable to clear cart"
      );
      return;
    }

    dispatch(clearCart());

  } catch (error) {
    console.error(
      "Clear cart error:",
      error
    );

    toast.error(
      "Unable to clear cart"
    );
  }
};

  return {
    cartItems,
    addToCart,
    updateQuantity,
    removeFromCart,
    fetchCart,
    clearCartFromDatabase
  };
};


export default useCart;