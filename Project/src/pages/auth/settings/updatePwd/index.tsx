import { useForm, SubmitHandler } from "react-hook-form";
import { METHODS, useHttpMutation } from "../../../../helpers/useHttp";
import { IResponse } from "../../../../helpers/types";
import { IUpdatePwd } from "../../../../helpers/types";

export const UpdatePwd = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUpdatePwd>();
  const [updatePwd] = useHttpMutation<IResponse, IUpdatePwd>(() => {
    alert("Success!");
  });

  const onSubmit: SubmitHandler<IUpdatePwd> = (data) => {
    updatePwd("/update/password", METHODS.PATCH, data);
    console.log(data);
  };

  return (
    <div className="bg-gray-600">
      <h2 className="text-2xl font-bold text-center">Update Password</h2>
      <form className="mt-4" onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label
            htmlFor="old"
            className="block text-sm font-medium text-gray-300 mb-1"
          >
            Old Password
          </label>
          <input
            id="old"
            {...register("old", { required: "Old password is required" })}
            type="password"
            placeholder="Enter your old password"
            className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.old && (
            <p className="text-red-500 text-sm mt-1">{errors.old.message}</p>
          )}
        </div>
        <div className="mb-4">
          <label
            htmlFor="newpwd"
            className="block text-sm font-medium text-gray-300 mb-1"
          >
            New Password
          </label>
          <input
            id="newpwd"
            {...register("newpwd", { required: "New password is required" })}
            type="password"
            placeholder="Enter your new password"
            className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.newpwd && (
            <p className="text-red-500 text-sm mt-1">{errors.newpwd.message}</p>
          )}
        </div>
        <button
          type="submit"
          className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition duration-300"
        >
          Update Password
        </button>
      </form>
    </div>
  );
};
