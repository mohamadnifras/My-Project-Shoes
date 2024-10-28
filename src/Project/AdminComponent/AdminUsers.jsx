import React, { useContext } from "react";
import { adminContext } from "./AdminContext";

function AdminUsers() {
  const { adminUser } = useContext(adminContext);
  return (
    <div className="overflow-x-auto">
    <table className="min-w-full bg-white border border-gray-300">
      <thead>
        <tr className="bg-gray-800 border-b border-gray-300">
          <th className="text-left p-4 font-semibold text-gray-100">User Name</th>
          <th className="text-left p-4 font-semibold text-gray-100">Email</th>
          <th className="text-left p-4 font-semibold text-gray-100">Product Item</th>
          <th className="text-left p-4 font-semibold text-gray-100">Block User</th>
        </tr>
      </thead>
      <tbody>
        {adminUser.map((user) => (
          <tr key={user.id} className="border-b border-gray-300 hover:bg-gray-50">
            <td className="p-4 text-gray-800">{user.firstname} {user.lastname}</td>
            <td className="p-4 text-gray-800">{user.email}</td>
            <td className="p-4 text-center">
              <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition duration-300">
                Product Item
              </button>
            </td>
            <td className="p-4 text-center">
              <button className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition duration-300">
                Block
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  

  );
}

export default AdminUsers;
