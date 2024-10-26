import React, { useContext } from "react";
import { adminContext } from "./AdminContext";

function AdminProduct() {
  const { adminProduct } = useContext(adminContext);
  return (
    <>
      <div>
        <table>
          <thead>
            <tr>
              <th>PRODUCT NAME</th>
              <th>BRAND</th>
              <th>STOCKS</th>
              <th>PRICE</th>
              <th>CATEGORY</th>
              <th>IMAGES</th>
              <th>EDIT/DELETE</th>
            </tr>
          </thead>
          <body>
            {adminProduct.map((item)=>(
                <tr>
                    <td>{item.name}</td>
                    <td>{item.brand}</td>
                    <td>{item.stock}</td>
                    <td>{item.stock}</td>
                    <td>{item.price}</td>
                    <td>{item.category}</td>
                    <td>
                        <img src={item.image} alt={item.name} />
                    </td>
                    <td>
                        <button>Edit</button>
                        <button>Delete</button>
                    </td>
                </tr>
            ))}
          </body>
        </table>
      </div>
    </>
  );
}

export default AdminProduct;
