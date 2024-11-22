import React, { useContext } from 'react'
import { productContext } from './ProductContext'
import Navbar from './Navbar';

function WomenProduct() {
    const {product} = useContext(productContext)
    const womenProduct = product.filter((item) => item.category === "women");
    return (
      <>
      <Navbar/>
      <div className="flex flex-wrap justify-center gap-4 p-4 w-100%"> 
    {womenProduct.map((item) => (
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
  </>
  )
}

export default WomenProduct