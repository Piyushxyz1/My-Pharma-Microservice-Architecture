import React, { useState, useEffect } from "react";
import {
  PlusIcon,
  PencilIcon,
  Trash2Icon,
  SearchIcon,
  PackageIcon,
  RefreshCwIcon,
  WarehouseIcon,
  BoxesIcon,
  ClipboardListIcon,
  ArrowUpRightIcon,
  XIcon,
  Import,
} from "lucide-react";

import { toast } from "react-toastify";
import AddProductModal from "../components/AddProductModal";
import { Link } from "react-router-dom";


const AdminProductsPage = () => {

  const [searchTerm, setSearchTerm] = useState("");
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);


  const filteredProducts = products.filter((product) => {
    const search = searchTerm.toLowerCase();

    return (
      product.name?.toLowerCase().includes(search) ||
      product.description?.toLowerCase().includes(search) ||
      product.category?.toLowerCase().includes(search)
    );
  });

  

  const handleEditProduct = (product) => {
    setSelectedProduct(product);

    /*
      Existing updateProduct logic is kept available.
      If your store has a dedicated edit modal/form,
      you can connect selectedProduct to it here.
    */

    setShowEditModal(true);
  };

  if (loading && products.length === 0) {
    return (
      <div className="min-h-screen bg-[#f5f8fc] flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-[#0b2035] flex items-center justify-center">
            <WarehouseIcon className="w-6 h-6 text-blue-300 animate-pulse" />
          </div>

          <p className="text-sm text-slate-500">
            Loading warehouse inventory...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f5f8fc] text-slate-900 mt-20">

      {/* =====================================================
          PAGE HEADER
      ====================================================== */}

      <section className="bg-[#071a2d] relative overflow-hidden">

        <div className="absolute inset-0">

          <div className="absolute -top-32 -right-32 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />

          <div className="absolute -bottom-40 -left-20 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl" />

          <div
            className="absolute inset-0 opacity-[0.035]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          />

        </div>

        <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-12">

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">

            <div>

              <div className="flex items-center gap-3 mb-5">

                <div className="w-11 h-11 flex items-center justify-center rounded-xl bg-blue-500/10 border border-blue-400/20">
                  <WarehouseIcon className="w-5 h-5 text-blue-300" />
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[.2em] text-blue-300 font-semibold">
                    Warehouse Operations
                  </p>

                  <p className="text-xs text-slate-500 mt-1">
                    Inventory Control Center
                  </p>
                </div>

              </div>

              <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-white">
                Inventory
                <span className="text-blue-400"> Management</span>
              </h1>

              <p className="mt-4 max-w-2xl text-slate-300 leading-7">
                Manage warehouse products, maintain accurate inventory records
                and keep your stock catalog organized from one centralized
                workspace.
              </p>

            </div>

            <button
              onClick={() =>
                document
                  .getElementById("add_product_modal")
                  ?.showModal()
              }
              className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-blue-500 hover:bg-blue-400 text-white rounded-lg font-medium transition-all shadow-lg shadow-blue-500/20"
            >
              <PlusIcon className="w-5 h-5" />
              Add Inventory
            </button>

          </div>

          {/* HEADER STATS */}

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-0 mt-10 pt-7 border-t border-white/10">

            <div className="pr-6">
              <p className="text-2xl font-semibold text-white">
                {products.length}
              </p>

              <p className="text-xs text-slate-400 mt-1">
                Total Items
              </p>
            </div>

            <div className="px-6 border-l border-white/10">
              <p className="text-2xl font-semibold text-white">
                {new Set(products.map((p) => p.category).filter(Boolean)).size}
              </p>

              <p className="text-xs text-slate-400 mt-1">
                Categories
              </p>
            </div>

            <div className="px-6 border-l border-white/10">
              <p className="text-2xl font-semibold text-white">
                {products.filter((p) => p.image).length}
              </p>

              <p className="text-xs text-slate-400 mt-1">
                Cataloged Items
              </p>
            </div>

            <div className="px-6 border-l border-white/10">
              <p className="text-2xl font-semibold text-blue-400">
                {filteredProducts.length}
              </p>

              <p className="text-xs text-slate-400 mt-1">
                Current Results
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* =====================================================
          MAIN CONTENT
      ====================================================== */}

      <main className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-10">

        {/* SEARCH / TOOLBAR */}

        <div className="bg-white border border-slate-200 rounded-2xl shadow-sm">

          <div className="p-5 sm:p-6">

            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">

              <div>

                <div className="flex items-center gap-2">

                  <BoxesIcon className="w-5 h-5 text-blue-600" />

                  <h2 className="text-lg font-semibold">
                    Warehouse Inventory
                  </h2>

                </div>

                <p className="text-sm text-slate-500 mt-1">
                  {filteredProducts.length} items currently displayed
                </p>

              </div>

              <div className="flex flex-col sm:flex-row gap-3">

                <div className="relative sm:w-80">

                  <SearchIcon className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />

                  <input
                    type="text"
                    placeholder="Search inventory..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-sm outline-none focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 transition-all"
                  />

                </div>

                {searchTerm && (
                  <button
                    onClick={() => setSearchTerm("")}
                    className="px-4 py-3 border border-slate-200 rounded-lg text-sm text-slate-600 hover:bg-slate-50 transition-colors"
                  >
                    Clear
                  </button>
                )}

              </div>

            </div>

          </div>

        </div>

        {/* ERROR */}

        {error && (
          <div className="mt-5 px-5 py-4 bg-red-50 border border-red-200 rounded-xl text-sm text-red-700">
            {error}
          </div>
        )}

        {/* =====================================================
            INVENTORY TABLE
        ====================================================== */}

        {filteredProducts.length === 0 ? (

          <div className="mt-5 bg-white border border-slate-200 rounded-2xl py-20 text-center">

            <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-2xl bg-slate-100">
              <PackageIcon className="w-8 h-8 text-slate-400" />
            </div>

            <h2 className="text-xl font-semibold mt-5">
              No inventory found
            </h2>

            <p className="text-sm text-slate-500 mt-2 max-w-md mx-auto">
              {searchTerm
                ? "No inventory items match your search. Try another product name, category or keyword."
                : "Your warehouse inventory is currently empty."}
            </p>

            {searchTerm ? (
              <button
                onClick={() => setSearchTerm("")}
                className="mt-6 inline-flex items-center gap-2 px-4 py-2.5 bg-[#0b2035] text-white rounded-lg text-sm font-medium"
              >
                <XIcon className="w-4 h-4" />
                Clear Search
              </button>
            ) : (
              <button
                onClick={() =>
                  document
                    .getElementById("add_product_modal")
                    ?.showModal()
                }
                className="mt-6 inline-flex items-center gap-2 px-4 py-2.5 bg-[#0b2035] text-white rounded-lg text-sm font-medium"
              >
                <PlusIcon className="w-4 h-4" />
                Add First Item
              </button>
            )}

          </div>

        ) : (

          <div className="mt-5 bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">

            {/* TABLE HEADER */}

            <div className="hidden lg:grid grid-cols-[2fr_1fr_1fr_1fr] gap-5 px-6 py-4 bg-slate-50 border-b border-slate-200">

              <div className="text-[11px] uppercase tracking-[.15em] font-semibold text-slate-500">
                Inventory Item
              </div>

              <div className="text-[11px] uppercase tracking-[.15em] font-semibold text-slate-500">
                Value
              </div>

              <div className="text-[11px] uppercase tracking-[.15em] font-semibold text-slate-500">
                Category
              </div>

              <div className="text-[11px] uppercase tracking-[.15em] font-semibold text-slate-500">
                Actions
              </div>

            </div>

            {/* PRODUCTS */}

            <div className="divide-y divide-slate-100">

              {filteredProducts.map((product) => (

                <div
                  key={product.id}
                  className="grid grid-cols-1 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-5 px-5 sm:px-6 py-5 hover:bg-slate-50/70 transition-colors"
                >

                  {/* PRODUCT */}

                  <div className="flex items-center gap-4 min-w-0">

                    <div className="w-14 h-14 shrink-0 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center overflow-hidden">

                      {product.image ? (

                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.target.src =
                              "https://via.placeholder.com/56x56?text=Item";
                          }}
                        />

                      ) : (

                        <PackageIcon className="w-6 h-6 text-slate-400" />

                      )}

                    </div>

                    <div className="min-w-0">

                      <div className="flex items-center gap-2">

                        <h3 className="font-semibold truncate">
                          {product.name}
                        </h3>

                      </div>

                      <p className="text-xs text-slate-500 mt-1 line-clamp-1">
                        {product.description ||
                          "No inventory description available"}
                      </p>

                      <p className="text-[11px] text-slate-400 mt-1">
                        SKU / ID: {product.id}
                      </p>

                    </div>

                  </div>

                  {/* VALUE */}

                  <div className="flex items-center lg:block">

                    <div>

                      <p className="lg:hidden text-xs uppercase tracking-wide text-slate-400 mr-3">
                        Value
                      </p>

                      <p className="font-semibold text-slate-900">
                        {product.price
                          ? `$${Number(product.price).toFixed(2)}`
                          : "—"}
                      </p>

                    </div>

                  </div>

                  {/* CATEGORY */}

                  <div className="flex items-center lg:block">

                    <div className="flex items-center gap-3">

                      <p className="lg:hidden text-xs uppercase tracking-wide text-slate-400">
                        Category
                      </p>

                      {product.category ? (

                        <span className="inline-flex items-center px-2.5 py-1 bg-blue-50 text-blue-700 border border-blue-100 rounded-md text-xs font-medium">
                          {product.category}
                        </span>

                      ) : (

                        <span className="text-xs text-slate-400">
                          Uncategorized
                        </span>

                      )}

                    </div>

                  </div>

                  {/* ACTIONS */}

                  <div className="flex items-center">

                    <div className="flex items-center gap-2">

                      <button
                        onClick={() => handleEditProduct(product)}
                        className="w-9 h-9 flex items-center justify-center border border-slate-200 rounded-lg text-slate-600 hover:border-blue-200 hover:text-blue-600 hover:bg-blue-50 transition-all"
                        title="Edit inventory"
                      >
                        <PencilIcon className="w-4 h-4" />
                      </button>

                      <button
                        onClick={() =>
                          setShowDeleteConfirm(product.id)
                        }
                        className="w-9 h-9 flex items-center justify-center border border-slate-200 rounded-lg text-slate-500 hover:border-red-200 hover:text-red-600 hover:bg-red-50 transition-all"
                        title="Delete inventory"
                      >
                        <Trash2Icon className="w-4 h-4" />
                      </button>

                      <Link
                        to={`/edit-product/${product.id}`}
                        className="w-9 h-9 flex items-center justify-center border border-slate-200 rounded-lg text-slate-500 hover:border-blue-200 hover:text-blue-600 hover:bg-blue-50 transition-all"
                        title="Open inventory"
                      >
                        <ArrowUpRightIcon className="w-4 h-4" />
                      </Link>

                    </div>

                  </div>

                </div>

              ))}

            </div>

          </div>

        )}

        {/* =====================================================
            REFRESH
        ====================================================== */}

        {products.length > 0 && (

          <div className="flex items-center justify-between mt-5">

            <p className="text-xs text-slate-400">
              Showing {filteredProducts.length} of {products.length} inventory
              items
            </p>

            <button
              onClick={() => fetchProducts()}
              disabled={loading}
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-white border border-slate-200 rounded-lg text-sm font-medium text-slate-600 hover:border-blue-200 hover:text-blue-600 transition-all disabled:opacity-50"
            >
              <RefreshCwIcon
                className={`w-4 h-4 ${
                  loading ? "animate-spin" : ""
                }`}
              />

              {loading ? "Refreshing..." : "Refresh Inventory"}
            </button>

          </div>

        )}

      </main>

      {/* =====================================================
          DELETE CONFIRMATION
      ====================================================== */}

      {showDeleteConfirm && (

        <div className="fixed inset-0 z-50 bg-[#071a2d]/70 backdrop-blur-sm flex items-center justify-center px-4">

          <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden">

            <div className="p-6">

              <div className="w-11 h-11 flex items-center justify-center rounded-xl bg-red-50 text-red-600">
                <Trash2Icon className="w-5 h-5" />
              </div>

              <h3 className="text-xl font-semibold mt-5">
                Remove inventory item?
              </h3>

              <p className="text-sm text-slate-500 leading-6 mt-2">
                This item will be permanently removed from your warehouse
                inventory. This action cannot be undone.
              </p>

              <div className="flex justify-end gap-3 mt-7">

                <button
                  onClick={() => setShowDeleteConfirm(null)}
                  className="px-4 py-2.5 border border-slate-200 rounded-lg text-sm font-medium hover:bg-slate-50 transition-colors"
                >
                  Cancel
                </button>

                <button
                  onClick={() =>
                    handleDeleteProduct(showDeleteConfirm)
                  }
                  className="px-4 py-2.5 bg-red-600 hover:bg-red-700 text-white rounded-lg text-sm font-medium transition-colors"
                >
                  Remove Item
                </button>

              </div>

            </div>

          </div>

        </div>

      )}

      <AddProductModal />

    </div>
  );
};

export default AdminProductsPage;