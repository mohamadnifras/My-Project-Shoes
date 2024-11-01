import React, { useContext, useState } from "react";
import { adminContext } from "./AdminContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import AdminNewProduct from "./AdminNewProduct";
import AdminEditProduct from "./AdminEditProduct";
function AdminProduct() {
  const { adminProduct, editAdminProduct, deleteProduct} = useContext(adminContext);
  const [selectedCategory,setSelectedCategory]=useState('');
  const [newAdd,setNewAdd]=useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  
  const handleCategoryChange = (e)=>{
    setSelectedCategory(e.target.value);
  }
  const filteredAdminProduct = selectedCategory 
  ? adminProduct.filter((product) => product.category === selectedCategory)
  : adminProduct;
// Open edit modal
const openEdit = (product) => {
  setEditingProduct(product);
  setIsModalOpen(true);
};

// Close modal
const closeModal = () => {
  setIsModalOpen(false);
  setEditingProduct(null);
};

// Save changes
const handleSave = (updatedProduct) => {
  editAdminProduct(updatedProduct); 
  closeModal(); 
};
  return (
    <>
      <div className="flex justify-between p-4">
        <select className="border-2 border-black rounded p-1" onChange={handleCategoryChange}>
          <option value="">All</option>
          <option value="men">Men</option>
          <option value="women">Women</option>
          <option value="kids">Kids</option>
        </select>
        <FontAwesomeIcon icon={faCartPlus} className="text-2xl text-gray-700" onClick={()=>setNewAdd(true)}/>
        <AdminNewProduct 
        isOpen={newAdd}
        onRequestClose={()=>setNewAdd(false)}/>
      </div>
      <div className="overflow-x-auto w-full flex justify-center">
        <div className="max-w-5xl w-full">
          <table className="min-w-full bg-white border border-gray-300">
            <thead>
              <tr className="bg-gray-100 border-b border-gray-300">
                <th className="text-left p-4 font-semibold text-gray-700">
                  PRODUCT NAME
                </th>
                <th className="text-left p-4 font-semibold text-gray-700">
                  BRAND
                </th>
                <th className="text-left p-4 font-semibold text-gray-700">
                  STOCKS
                </th>
                <th className="text-left p-4 font-semibold text-gray-700">
                  PRICE
                </th>
                <th className="text-left p-4 font-semibold text-gray-700">
                  CATEGORY
                </th>
                <th className="text-left p-4 font-semibold text-gray-700">
                  IMAGES
                </th>
                <th className="text-center p-4 font-semibold text-gray-700">
                  EDIT/DELETE
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredAdminProduct.map((item) => (
                <tr
                  key={item.id}
                  className="border-b border-gray-300 hover:bg-gray-50"
                >
                  <td className="p-4 text-gray-800">{item.name}</td>
                  <td className="p-4 text-gray-800">{item.brand}</td>
                  <td className="p-4 text-gray-800">{item.stock}</td>
                  <td className="p-4 text-gray-800">₹{item.price}</td>
                  <td className="p-4 text-gray-800">{item.category}</td>
                  <td className="p-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-16 w-16 object-cover rounded"
                    />
                  </td>
                  <td className="p-4 text-center space-x-2">
                    <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600" onClick={()=>openEdit(item)}>
                      Edit
                    </button>
                    <button className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600" onClick={()=> deleteProduct(item.id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
  <AdminEditProduct isOpen={isModalOpen} onRequestClose={closeModal} product={editingProduct} onSave={handleSave} />
    </>
  );
}

export default AdminProduct;
