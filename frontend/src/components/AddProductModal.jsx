
// import React from "react";
// import { useProductStore } from "../store/useProductStore";
// import {
//   DollarSign,
//   Package2Icon,
//   ImageIcon,
//   PlusCircleIcon,
//   MapPinIcon,
//   TagIcon,
//   BoxesIcon,
// } from "lucide-react";

// const AddProductModal = () => {
//   const {
//     setformData,
//     formData,
//     resetForm,
//     loading,
//     addProducts,
//   } = useProductStore();

//   return (
//     <dialog id="add_product_modal" className="modal">
//       <div className="modal-box max-w-2xl">
//         {/* CLOSE BUTTON */}
//         <form method="dialog">
//           <button
//             className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
//             onClick={resetForm}
//           >
//             X
//           </button>
//         </form>

//         {/* MODAL HEADER */}
//         <h3 className="font-bold text-xl mb-8">Add New Product</h3>

//         <form onSubmit={addProducts} className="space-y-6">
//           <div className="grid gap-6 md:grid-cols-2">

//             {/* PRODUCT NAME */}
//             <div className="form-control md:col-span-2">
//               <label className="label">
//                 <span className="label-text text-base font-medium">
//                   Product Name
//                 </span>
//               </label>

//               <div className="relative">
//                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-base-content/50">
//                   <Package2Icon className="size-5" />
//                 </div>

//                 <input
//                   type="text"
//                   placeholder="Enter product name"
//                   className="input input-bordered w-full pl-10"
//                   value={formData.name}
//                   onChange={(e) =>
//                     setformData({
//                       ...formData,
//                       name: e.target.value,
//                     })
//                   }
//                   required
//                 />
//               </div>
//             </div>

//             {/* SKU */}
//             <div className="form-control">
//               <label className="label">
//                 <span className="label-text text-base font-medium">
//                   SKU
//                 </span>
//               </label>

//               <div className="relative">
//                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-base-content/50">
//                   <TagIcon className="size-5" />
//                 </div>

//                 <input
//                   type="text"
//                   placeholder="e.g. LAP-001"
//                   className="input input-bordered w-full pl-10"
//                   value={formData.sku}
//                   onChange={(e) =>
//                     setformData({
//                       ...formData,
//                       sku: e.target.value,
//                     })
//                   }
//                   required
//                 />
//               </div>
//             </div>

//             {/* CATEGORY */}
//             <div className="form-control">
//               <label className="label">
//                 <span className="label-text text-base font-medium">
//                   Category
//                 </span>
//               </label>

//               <input
//                 type="text"
//                 placeholder="e.g. Electronics"
//                 className="input input-bordered w-full"
//                 value={formData.category}
//                 onChange={(e) =>
//                   setformData({
//                     ...formData,
//                     category: e.target.value,
//                   })
//                 }
//                 required
//               />
//             </div>

//             {/* PRICE */}
//             <div className="form-control">
//               <label className="label">
//                 <span className="label-text text-base font-medium">
//                   Price
//                 </span>
//               </label>

//               <div className="relative">
//                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-base-content/50">
//                   <DollarSign className="size-5" />
//                 </div>

//                 <input
//                   type="number"
//                   min="0"
//                   step="0.01"
//                   placeholder="0.00"
//                   className="input input-bordered w-full pl-10"
//                   value={formData.price}
//                   onChange={(e) =>
//                     setformData({
//                       ...formData,
//                       price: e.target.value,
//                     })
//                   }
//                   required
//                 />
//               </div>
//             </div>

//             {/* UNIT COST */}
//             <div className="form-control">
//               <label className="label">
//                 <span className="label-text text-base font-medium">
//                   Unit Cost
//                 </span>
//               </label>

//               <input
//                 type="number"
//                 min="0"
//                 step="0.01"
//                 placeholder="0.00"
//                 className="input input-bordered w-full"
//                 value={formData.unitCost}
//                 onChange={(e) =>
//                   setformData({
//                     ...formData,
//                     unitCost: e.target.value,
//                   })
//                 }
//                 required
//               />
//             </div>

//             {/* SELLING PRICE */}
//             <div className="form-control">
//               <label className="label">
//                 <span className="label-text text-base font-medium">
//                   Selling Price
//                 </span>
//               </label>

//               <input
//                 type="number"
//                 min="0"
//                 step="0.01"
//                 placeholder="0.00"
//                 className="input input-bordered w-full"
//                 value={formData.sellingPrice}
//                 onChange={(e) =>
//                   setformData({
//                     ...formData,
//                     sellingPrice: e.target.value,
//                   })
//                 }
//                 required
//               />
//             </div>

//             {/* STOCK */}
//             <div className="form-control">
//               <label className="label">
//                 <span className="label-text text-base font-medium">
//                   Initial Stock
//                 </span>
//               </label>

//               <div className="relative">
//                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-base-content/50">
//                   <BoxesIcon className="size-5" />
//                 </div>

//                 <input
//                   type="number"
//                   min="0"
//                   placeholder="0"
//                   className="input input-bordered w-full pl-10"
//                   value={formData.stock}
//                   onChange={(e) =>
//                     setformData({
//                       ...formData,
//                       stock: e.target.value,
//                     })
//                   }
//                 />
//               </div>
//             </div>

//             {/* MINIMUM STOCK LEVEL */}
//             <div className="form-control">
//               <label className="label">
//                 <span className="label-text text-base font-medium">
//                   Minimum Stock Level
//                 </span>
//               </label>

//               <input
//                 type="number"
//                 min="0"
//                 placeholder="10"
//                 className="input input-bordered w-full"
//                 value={formData.minimumStockLevel}
//                 onChange={(e) =>
//                   setformData({
//                     ...formData,
//                     minimumStockLevel: e.target.value,
//                   })
//                 }
//               />
//             </div>

//             {/* WAREHOUSE LOCATION */}
//             <div className="form-control">
//               <label className="label">
//                 <span className="label-text text-base font-medium">
//                   Warehouse Location
//                 </span>
//               </label>

//               <div className="relative">
//                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-base-content/50">
//                   <MapPinIcon className="size-5" />
//                 </div>

//                 <input
//                   type="text"
//                   placeholder="e.g. A-01-02"
//                   className="input input-bordered w-full pl-10"
//                   value={formData.warehouseLocation}
//                   onChange={(e) =>
//                     setformData({
//                       ...formData,
//                       warehouseLocation: e.target.value,
//                     })
//                   }
//                   required
//                 />
//               </div>
//             </div>

//             {/* SUPPLIER */}
//             <div className="form-control">
//               <label className="label">
//                 <span className="label-text text-base font-medium">
//                   Supplier
//                 </span>
//               </label>

//               <input
//                 type="text"
//                 placeholder="Supplier name"
//                 className="input input-bordered w-full"
//                 value={formData.supplier}
//                 onChange={(e) =>
//                   setformData({
//                     ...formData,
//                     supplier: e.target.value,
//                   })
//                 }
//               />
//             </div>

//             {/* IMAGE URL */}
//             <div className="form-control md:col-span-2">
//               <label className="label">
//                 <span className="label-text text-base font-medium">
//                   Image URL
//                 </span>
//               </label>

//               <div className="relative">
//                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-base-content/50">
//                   <ImageIcon className="size-5" />
//                 </div>

//                 <input
//                   type="text"
//                   placeholder="https://example.com/image.jpg"
//                   className="input input-bordered w-full pl-10"
//                   value={formData.image}
//                   onChange={(e) =>
//                     setformData({
//                       ...formData,
//                       image: e.target.value,
//                     })
//                   }
//                 />
//               </div>
//             </div>

//             {/* DESCRIPTION */}
//             <div className="form-control md:col-span-2">
//               <label className="label">
//                 <span className="label-text text-base font-medium">
//                   Description
//                 </span>
//               </label>

//               <textarea
//                 placeholder="Enter product description"
//                 className="textarea textarea-bordered w-full min-h-24"
//                 value={formData.description}
//                 onChange={(e) =>
//                   setformData({
//                     ...formData,
//                     description: e.target.value,
//                   })
//                 }
//               />
//             </div>
//           </div>

//           {/* MODAL ACTIONS */}
//           <div className="modal-action">
//             <form method="dialog">
//               <button
//                 type="submit"
//                 className="btn btn-ghost"
//                 onClick={resetForm}
//               >
//                 Cancel
//               </button>
//             </form>

//             <button
//               type="submit"
//               className="btn btn-primary min-w-[140px]"
//               disabled={
//                 !formData.name ||
//                 !formData.sku ||
//                 !formData.category ||
//                 !formData.price ||
//                 !formData.unitCost ||
//                 !formData.sellingPrice ||
//                 !formData.warehouseLocation ||
//                 loading
//               }
//             >
//               {loading ? (
//                 <span className="loading loading-spinner loading-sm" />
//               ) : (
//                 <>
//                   <PlusCircleIcon className="size-5 mr-2" />
//                   Add Product
//                 </>
//               )}
//             </button>
//           </div>
//         </form>
//       </div>

//       {/* BACKDROP */}
//       <form method="dialog" className="modal-backdrop">
//         <button>close</button>
//       </form>
//     </dialog>
//   );
// };

// export default AddProductModal;

