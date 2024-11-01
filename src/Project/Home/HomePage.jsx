
import React, { useContext, useEffect, useState } from 'react';
import Navbar from './Navbar';
import { productContext } from './ProductContext';
import LastPage from './LastPage';
import Modal from "react-modal";



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
      <div className=''>
        <img src="./shoeimages/homepage3.png" alt="" style={{ height: "630px", width:"100%" }} />
      </div>

      
      <div className="flex flex-wrap justify-center gap-4 p-4 w-100%"> 
        {filteredProduct.map((item) => (
          <div key={item.id} className="card inline-block transition-transform duration-300 transform hover:scale-105 hover:shadow-lg "> 
            <img src={item.image} alt="shoes" className="w-full h-48 object-cover"  onClick={() => handleImageClick(item)}/>
            
            <div className="p-5 flex flex-col gap-3"> 
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
              <div className="mt-5 flex gap-2">
                <button className="button-primary" onClick={()=>addCart(item)}>Add to cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
{/* image click */}
      <Modal isOpen={!!selectedProduct} onRequestClose={closeModal} className=" mx-auto p-6 border rounded-lg shadow-lg bg-white"
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
    <div className="modal-content bg-white p-4 rounded-lg shadow-lg max-w-xs w-full mx-auto">
      <img
        src={selectedProduct.image}
        alt={selectedProduct.brand}
        className="w-full h-32 object-cover rounded-md"
      />
      <h2 className="text-xl font-bold mt-2">{selectedProduct.brand}</h2>
      <p>Category: {selectedProduct.category}</p>
      <p>Stock: {selectedProduct.stock}</p>
      <p>Size: {selectedProduct.size}</p>
      <p className="text-lg font-semibold">Price: Rp {selectedProduct.price}.00</p>
      <p className="text-sm text-gray-500">Offer: {selectedProduct.offer}</p>
      
      {/* Add to Cart Button */}
      <div className="mt-4 flex gap-2">
  <button
    className="bg-green-500 text-white font-bold py-2 px-4 rounded hover:bg-green-600"
    onClick={() => {
      addCart(selectedProduct);
    }}
  >
    Add to Cart
  </button>

  <button
    className="bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded hover:bg-gray-400"
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
