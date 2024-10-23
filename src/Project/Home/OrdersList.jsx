import React, { useContext } from 'react'
import { productContext } from './ProductContext'

function OrdersList() {
 const {orders} = useContext(productContext)
  return (
<div className="p-4 bg-gray-100 min-h-screen">
      <h2 className="text-xl font-bold mb-4">Order List</h2>
      {orders.length === 0 ? (
        <p className="text-gray-500">Loading...</p>
      ) : (
        orders.map((order, index) => (
          <div key={index} className="border bg-white p-4 mb-4 rounded-lg shadow-md w-1/2">
            <h3 className="font-semibold text-lg">Order Details</h3>
            <p><strong>Name:</strong>     {order.name}</p>
            <p><strong>Address:</strong>  {order.address}</p>
            <p><strong>Email:</strong>    {order.email}</p>
            <p><strong>Phone:</strong>    {order.phone}</p>
            <h4 className="font-semibold mt-2">Items:</h4>
            <ul className="list-disc list-inside">
              {order.cartItems.map((item) => (
                <li key={item.id} className="flex items-center mb-2">
                  <img src={item.image} alt={item.name} className="w-16 h-16 mr-2 rounded" />
                  <div>
                    <p className="font-medium">{item.name}</p>
                    <p className="text-sm text-gray-600">Size: {item.size}</p>
                    <p className="text-sm text-gray-600">Brand: {item.brand}</p>
                    <p className="text-sm">Price: ${item.price.toFixed(2)} ({item.offer})</p>
                  </div>
                </li>
              ))}
            </ul>
            <p className="font-bold mt-2">Total: ${order.total.toFixed(2)}</p>
            <p className="text-sm text-gray-500">Order Date: {order.date}</p>
          </div>
        ))
      )}
    </div>
  )
}

export default OrdersList