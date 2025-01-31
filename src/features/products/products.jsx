import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "./products.api";
import { Link } from "react-router-dom";
import { addToCart } from "../basket/basket.slice";


export const Products = () => {
  const products = useSelector((state) => state.products.items);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

   const handleAddToCart = (product) => {
     dispatch(addToCart(product))
    //  toast.success(`${product.title} added to cart!`)
   }
  return (
    <div className="bg-gray-900 text-white min-h-screen p-8">
      <h1 className="text-4xl font-extrabold text-center text-indigo-400 mb-8">
        Available Products
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {products.length === 0 ? (
          <p className="text-center text-gray-400">No products available.</p>
        ) : (
          products.map((product) => (
            <div
              key={product.id}
              className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-2xl font-semibold text-indigo-500 mb-4">{product.title}</h3>
              <p className="text-gray-300 mb-2">Price: <span className="text-green-500">${product.price}</span></p>
              <p className="text-gray-300">Quantity: <span className="text-yellow-400">{product.quantity}</span></p>
              <div className="flex justify-between items-center mt-6 space-x-4">
                <Link
                  to={`/product/edit/${product.id}`}
                  className="px-5 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 transition-all duration-200"
                >
                  Edit
                </Link>
                <button
                  onClick={() => handleAddToCart(product)}
                  className="px-5 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-all duration-200"
                >
                  Move to Cart
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
