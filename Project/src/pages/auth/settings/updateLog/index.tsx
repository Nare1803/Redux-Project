import { useForm, SubmitHandler } from "react-hook-form";
import { IUpdateLog } from "../../../../helpers/types";
import { METHODS, useHttpMutation } from "../../../../helpers/useHttp";
import { IResponse } from "../../../../helpers/types";

export const UpdateLog = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUpdateLog>();
  const [updateLog, error, loading] = useHttpMutation<IResponse, IUpdateLog>(
    () => {
      alert("Success!");
    }
  );

  const onSubmit: SubmitHandler<IUpdateLog> = (data) => {
    updateLog("/update/login", METHODS.PATCH, data);
    console.log(data);
  };

  return (
    <div className="bg-gray-800 text-white rounded-lg shadow-md p-6 max-w-md mx-auto">
      <h2 className="text-2xl font-bold text-center mb-4">Update Login</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        {error && (
          <p className="text-red-500 text-sm mb-4">
            An error occurred: {error}
          </p>
        )}
        <div className="mb-4">
          <label
            htmlFor="login"
            className="block text-sm font-medium text-gray-300 mb-2"
          >
            New Login
          </label>
          <input
            id="login"
            {...register("login", { required: "Login is required" })}
            type="text"
            placeholder="Enter new login"
            className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.login && (
            <p className="text-red-500 text-sm mt-1">{errors.login.message}</p>
          )}
        </div>
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-300 mb-2"
          >
            Password
          </label>
          <input
            id="password"
            {...register("password", { required: "Password is required" })}
            type="password"
            placeholder="Enter your password"
            className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">
              {errors.password.message}
            </p>
          )}
        </div>
        <button
          type="submit"
          className={`w-full py-2 mt-4 rounded-lg font-semibold transition duration-300 ${
            loading
              ? "bg-gray-600 text-gray-400 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700 text-white"
          }`}
        >
          {loading ? "Updating..." : "Update Login"}
        </button>
      </form>
    </div>
  );
};
