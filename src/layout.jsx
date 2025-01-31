// import React from "react";
// import { Link, Outlet } from "react-router-dom";

// export const Layout = () => {
//   return (
//     <div className="bg-blue-900">
//       <header>
//         <div>
//           <Link to = "/">Products</Link>
//         </div>
//         <div>
//           <Link to = "/basket">Basket jan</Link>
//         </div>
//         <div>
//           <Link to = "/product/add">Add</Link>
//         </div>
//       </header>
//       <Outlet />
//     </div>
//   );
// };
import React from "react";
import { Link, Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Header Section */}
      <header className="p-4 border-b border-gray-800">
        <nav className="flex justify-between items-center">
          <div className="text-3xl font-semibold text-indigo-400">
            <Link to="/" className="hover:text-indigo-300 transition-all">
              Products
            </Link>
          </div>
          <div className="space-x-8">
            <Link
              to="/basket"
              className="text-lg text-gray-400 hover:text-indigo-300 transition-all"
            >
              Basket
            </Link>
            <Link
              to="/product/add"
              className="text-lg text-gray-400 hover:text-indigo-300 transition-all"
            >
              Add Product
            </Link>
          </div>
        </nav>
      </header>

      {/* Main Content Section */}
      <main className="p-6">
        <Outlet />
      </main>

    
    </div>
  );
};
