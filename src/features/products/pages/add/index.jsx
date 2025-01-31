import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addProduct } from "../../products.api";
import { useNavigate } from "react-router";
import { useState } from "react";

export const AddProduct = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  
  const [category, setCategory] = useState('');
  const [customCategory, setCustomCategory] = useState('');

  const handleAdd = (data) => {
    const productData = {
      ...data,
      category: category === 'Other' ? customCategory : category,
    };

    dispatch(addProduct(productData))
      .unwrap()
      .then(() => {
        navigate("/");
      });
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen flex justify-center items-center p-6">
      <form
        onSubmit={handleSubmit(handleAdd)}
        className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-lg"
      >
        <h2 className="text-3xl font-semibold text-center text-indigo-500 mb-6">
          Add Product
        </h2>

        <div className="mb-4">
          <label htmlFor="title" className="block text-sm font-medium text-gray-300">
            Product Title
          </label>
          <input
            id="title"
            {...register("title", { required: "Title is required" })}
            className="w-full p-3 mt-1 bg-gray-700 text-white rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          {errors.title && (
            <p className="mt-2 text-sm text-red-500">{errors.title.message}</p>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="price" className="block text-sm font-medium text-gray-300">
            Price
          </label>
          <input
            id="price"
            type="number"
            {...register("price", {
              required: "Price is required",
              setValueAs: (value) => +value,
            })}
            className="w-full p-3 mt-1 bg-gray-700 text-white rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          {errors.price && (
            <p className="mt-2 text-sm text-red-500">{errors.price.message}</p>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="quantity" className="block text-sm font-medium text-gray-300">
            Quantity
          </label>
          <input
            id="quantity"
            type="number"
            {...register("quantity", {
              required: "Quantity is required",
              setValueAs: (value) => +value,
            })}
            className="w-full p-3 mt-1 bg-gray-700 text-white rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          {errors.quantity && (
            <p className="mt-2 text-sm text-red-500">{errors.quantity.message}</p>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="category" className="block text-sm font-medium text-gray-300">
            Category
          </label>
          <select
            id="category"
            {...register("category", { required: "Category is required" })}
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full p-3 mt-1 bg-gray-700 text-white rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option value="">Select Category</option>
            <option value="Electronics">Electronics</option>
            <option value="Clothing">Clothing</option>
            <option value="Food">Food</option>
            <option value="Other">Other</option>
          </select>
          {errors.category && (
            <p className="mt-2 text-sm text-red-500">{errors.category.message}</p>
          )}
        </div>
        {category === 'Other' && (
          <div className="mb-4">
            <label htmlFor="customCategory" className="block text-sm font-medium text-gray-300">
              Custom Category Name
            </label>
            <input
              id="customCategory"
              type="text"
              value={customCategory}
              onChange={(e) => setCustomCategory(e.target.value)}
              className="w-full p-3 mt-1 bg-gray-700 text-white rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
        )}

        <button
          type="submit"
          className="w-full py-3 mt-4 bg-indigo-500 text-white font-semibold rounded-md hover:bg-indigo-600 transition-colors"
        >
          Save Product
        </button>
      </form>
    </div>
  );
};
