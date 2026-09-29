import {
  useCallback,
  useEffect,
} from "react";

import { toast } from "react-toastify";

import {
  useSelector,
  useDispatch,
} from "react-redux";

import {
  setCartItems,
  clearCart,
} from "../../store/cartSlice";


const API_URL = "http://localhost:5003";


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
        `${API_URL}/api/cart`,
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
        `${API_URL}/api/cart/add`,
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
        `${API_URL}/api/cart/update/${productId}`,
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
        `${API_URL}/api/cart/remove/${productId}`,
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


  return {
    cartItems,
    addToCart,
    updateQuantity,
    removeFromCart,
    fetchCart,
  };
};


export default useCart;