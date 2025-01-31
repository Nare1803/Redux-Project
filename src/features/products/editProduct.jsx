import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router"
import { useForm } from "react-hook-form"
import { editProduct } from "./products.api"

export const EditProduct = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { register, handleSubmit, formState: { errors }, setValue } = useForm()

  const product = useSelector((state) =>
    state.products.items.find((item) => item.id === id)
  )

  useEffect(() => {
    if (product) {
      setValue("title", product.title)
      setValue("price", product.price)
      setValue("quantity", product.quantity)
    }
  }, [product, setValue])

  const onSubmit = (data) => {
    const updatedData = { id, ...data }
    dispatch(editProduct(updatedData))
      .unwrap()
      .then(() => {
        alert("Product updated successfully!")
        navigate("/") 
      })
      .catch(() => {
        alert("Failed to update product.")
      })
  }

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-semibold mb-6">Edit Product</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="bg-gray-800 p-6 rounded-md shadow-lg">
        
        <div className="mb-4">
          <label htmlFor="title" className="block text-sm font-medium text-gray-300">Title</label>
          <input
            id="title"
            type="text"
            {...register("title", { required: "Title is required" })}
            className="w-full p-3 bg-gray-700 text-white rounded-md"
          />
          {errors.title && <p className="text-red-500 text-sm">{errors.title.message}</p>}
        </div>

        <div className="mb-4">
          <label htmlFor="price" className="block text-sm font-medium text-gray-300">Price</label>
          <input
            id="price"
            type="number"
            {...register("price", { required: "Price is required", setValueAs: (value) => +value })}
            className="w-full p-3 bg-gray-700 text-white rounded-md"
          />
          {errors.price && <p className="text-red-500 text-sm">{errors.price.message}</p>}
        </div>

        <div className="mb-4">
          <label htmlFor="quantity" className="block text-sm font-medium text-gray-300">Quantity</label>
          <input
            id="quantity"
            type="number"
            {...register("quantity", { required: "Quantity is required", setValueAs: (value) => +value })}
            className="w-full p-3 bg-gray-700 text-white rounded-md"
          />
          {errors.quantity && <p className="text-red-500 text-sm">{errors.quantity.message}</p>}
        </div>
        <button type="submit" className="w-full py-3 bg-indigo-500 text-white rounded-md">Save Changes</button>
      </form>
    </div>
  )
}
