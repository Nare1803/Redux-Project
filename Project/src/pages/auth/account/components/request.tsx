// import { useEffect } from "react";
// import { Link } from "react-router-dom";
// import { useHttpQuery } from "../../../../helpers/useHttp";
// import { IResponse, IUser } from "../../../../helpers/types";
// import { BASE_URL } from "../../../../helpers/constants";

// export const Requests = () => {
//   const { data, loading, error, refetch } =
//     useHttpQuery<IResponse>("/requests");

//   const users: IUser[] | null = data ? (data.payload as IUser[]) : null;

//   useEffect(() => {
//     refetch(); // Automatically refetch data on mount
//   }, [refetch]);

//   return (
//     <div className="max-w-md mx-auto p-4 bg-gray-800 rounded-lg shadow-md">
//       <h2 className="mb-4 text-xl font-bold text-gray-300">Pending Requests</h2>
//       {loading && <p className="text-gray-400">Loading requests...</p>}
//       {error && <p className="text-red-500">Error loading requests</p>}
//       <div className="space-y-4">
//         {users?.length ? (
//           users.map((user) => (
//             <div
//               key={user.id}
//               className="flex items-center p-3 bg-gray-700 rounded-lg shadow-sm hover:shadow-md transition-shadow"
//             >
//               <img
//                 src={
//                   user.picture
//                     ? BASE_URL + user.picture
//                     : "https://cdn0.iconfinder.com/data/icons/business-and-management-flat-8/24/PROFILE_profile_picture_profile_icon_user_profile-512.png"
//                 }
//                 alt={user.name}
//                 className="w-12 h-12 rounded-full object-cover border border-gray-500"
//               />
//               <div className="ml-4">
//                 <Link
//                   to={`/profile/${user.id}`}
//                   className="text-lg font-semibold text-gray-200 hover:underline"
//                 >
//                   {user.name} {user.surname}
//                 </Link>
//                 <p className="text-sm text-gray-400">@{user.surname}</p>
//               </div>
//               <button className="ml-auto bg-blue-500 text-white px-3 py-1 rounded-md">
//                 Accept
//               </button>
//             </div>
//           ))
//         ) : (
//           <p className="text-gray-400">No pending requests.</p>
//         )}
//       </div>
//     </div>
//   );
// };
