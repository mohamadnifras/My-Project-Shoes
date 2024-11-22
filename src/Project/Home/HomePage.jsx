
import React, { useContext, useEffect, useState } from 'react';
import Navbar from './Navbar';
import { productContext } from './ProductContext';
import LastPage from './LastPage';
import Modal from "react-modal";
import HeroSection from './HeroSection';



function HomePage() {
 
  const { product, addCart, search } = useContext(productContext);
  const filteredProduct = product.filter(item => item.brand.toLowerCase().includes(search) || item.name.toLowerCase().includes(search))
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleImageClick = (product) => {
    setSelectedProduct(product); 
  };

  const closeModal = () => {
    setSelectedProduct(null); 
  };
  
  return (
    <div className='bg-gray-100 '>
      <Navbar />
    
      
      <div className="flex flex-wrap justify-center gap-4 p-4 w-100%"> 
        {filteredProduct.map((item) => (
          <div key={item.id} className="inline-block transition-transform duration-300 transform card hover:scale-105 hover:shadow-lg "> 
            <img src={item.image} alt="shoes" className="object-cover w-full h-48"  onClick={() => handleImageClick(item)}/>
            
            <div className="flex flex-col gap-3 p-5"> 
              {/* badge */}
              <div className="flex items-center gap-2">
                <span className="badge">Stock: {item.stock}</span>
                <span className="badge">Size: {item.size}</span>
   
              </div>
              <div>
              <span className="badge">Category: {item.category}</span>
              </div>
              
              {/* product title */}
              <h2 className="product-title" title="Best Shoes">{item.brand}</h2>

              {/* product price */}
              <div>
                <span className="text-xl font-bold">Rp {item.price}.00 </span>
                <span className="discount-percent">Offer: {item.offer}</span>
              </div>

              {/* product action button */}
              <div className="flex gap-2 mt-5">
                <button className="button-primary" onClick={()=>addCart(item)}>Add to cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
{/* image click */}
      <Modal isOpen={!!selectedProduct} onRequestClose={closeModal} className="p-6 mx-auto bg-white border rounded-lg shadow-lg "
        style={{
          content: {
            width: "400px",
            height: "auto",
            overflowY: "auto",
            marginTop:"100px"
          },
        }}
        overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
  {selectedProduct && (
    <div className="w-full max-w-xs p-4 mx-auto bg-white rounded-lg shadow-lg modal-content">
      <img
        src={selectedProduct.image}
        alt={selectedProduct.brand}
        className="object-cover w-full h-32 rounded-md"
      />
      <h2 className="mt-2 text-xl font-bold">{selectedProduct.brand}</h2>
      <p>Category: {selectedProduct.category}</p>
      <p>Stock: {selectedProduct.stock}</p>
      <p>Size: {selectedProduct.size}</p>
      <p className="text-lg font-semibold">Price: Rp {selectedProduct.price}.00</p>
      <p className="text-sm text-gray-500">Offer: {selectedProduct.offer}</p>
      
      {/* Add to Cart Button */}
      <div className="flex gap-2 mt-4">
  <button
    className="px-4 py-2 font-bold text-white bg-green-500 rounded hover:bg-green-600"
    onClick={() => {
      addCart(selectedProduct);
    }}
  >
    Add to Cart
  </button>

  <button
    className="px-4 py-2 font-bold text-gray-700 bg-gray-300 rounded hover:bg-gray-400"
    onClick={closeModal}
  >
    Cancel
  </button>
</div>
    </div>
  )}
</Modal>




    
      <LastPage/>
    </div>
  );
}

export default HomePage;



