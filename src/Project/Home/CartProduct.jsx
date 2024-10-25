import React, { useContext, useState } from "react";
import { productContext } from "./ProductContext";
import Payment from "./Payment";
function CartProduct() {
  const { cart, removeCart, setCart } = useContext(productContext);
  const [paymentOpen,setPaymentOpen]=useState(false)
  const subTotal = cart.reduce((acc, item) => acc + item.price, 0);
  const taxRate = 0.05;
  const tax = subTotal * taxRate;
  const total = subTotal + tax;
  const incrementQuantity = (id) => {
    const updatedCart = cart.map((item) => {
      if (item.id === id) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    setCart(updatedCart);
  };

  // Decrement quantity function
  const decrementQuantity = (id) => {
    const updatedCart = cart.map((item) => {
      if (item.id === id && item.quantity > 1) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    setCart(updatedCart);
  };
  return (
    <div>
      {cart.length == 0 ? (
        <h1 className="font-bold text-center">Cart is Empty🛒</h1>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="border px-4 py-2">Image</th>
                <th className="border px-4 py-2">Price</th>
                <th className="border px-4 py-2">Quantity</th>
                <th className="border px-4 py-2">Subtotal</th>
                <th className="border px-4 py-2">Remove</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr key={item.id} className="text-center">
                  <td className="border px-4 py-2">
                    <img
                      src={item.image}
                      alt="Item"
                      className="w-12 h-12 object-cover"
                    />
                  </td>
                  <td className="border px-4 py-2">${item.price.toFixed(2)}</td>
                  <td className="border px-4 py-2 flex justify-center items-center">
            <button
              onClick={() => decrementQuantity(item.id)}
              className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-700 transition mr-2"
            >
              -
            </button>
            {item.quantity}
            <button
              onClick={() => incrementQuantity(item.id)}
              className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-700 transition ml-2"
            >
              +
            </button>
          </td>
          <td className="border px-4 py-2">
            ${(item.price * item.quantity).toFixed(2)}
          </td>

             
                  <td className="border px-4 py-2">
                    <button
                      onClick={() => removeCart(item.id)}
                      className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-700 transition"
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* paymante */}
      <div className="max-w-sm mx-auto p-6 border rounded-lg shadow-lg bg-white">
        <h2 className="text-2xl font-bold mb-4 text-center">Order Price Details</h2>
        <div className="mb-4">
          {cart.map((item, index) => (
            <div key={index} className="flex justify-between py-2 border-b">
              <span>{item.name}</span>
              <span>${item.price.toFixed(2)}</span>
            </div>
          ))}
        </div>
        <div className="flex justify-between font-bold py-2 border-b">
          <span>Subtotal</span>
          <span>${subTotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between py-2 border-b">
          <span>Tax (5%)</span>
          <span>${tax.toFixed(2)}</span>
        </div>
        <div className="flex justify-between font-bold py-2">
          <span>Total Amount</span>
          <span>${total.toFixed(2)}</span>
        </div>
        <button
          className="w-full mt-4 py-2 bg-green-500 text-white font-semibold rounded hover:bg-green-600 transition duration-200"
          onClick={() => setPaymentOpen (true) }
        >
          Pay Amount
        </button>
      </div>
      <Payment 
      isOpen={paymentOpen}
      onRequestClose={()=>setPaymentOpen(false)}
      total={total}
      cart={cart}
      setCart={setCart}
      />
     
    </div>
  );
}

export default CartProduct;
