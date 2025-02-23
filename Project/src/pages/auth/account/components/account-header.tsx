import { useContext } from "react";
import { AccountContext } from "../context";
import { BASE_URL } from "../../../../helpers/constants";
import { ActionButton } from "./action-button";

export const AccountHeader = () => {
  const context = useContext(AccountContext);
  if (!context) throw new Error("Out of provider...");

  const { account } = context;
  console.log(account);
  return (
    <>
      {account.picture && (
        <img
          className="w-44 h-44 rounded-full object-cover border-indigo-500 border-solid border-4"
          src={BASE_URL + account.picture}
        />
      )}
      <h1 className="text-2xl">
        {account.name}
        {account.surname}
      </h1>
      <div className="flex gap-8">
        <div className="flex flex-col">
          <p className="text-sm font-bold text-blue-400">
            {account.followers?.length || 0}
          </p>
          <p className="text-gray-400 text-sm">Followers</p>
        </div>
        <div className="flex flex-col">
          <p className="text-sm font-bold text-blue-400">
            {account.following?.length || 0}
          </p>
          <p className="text-gray-400 text-sm">Following</p>
        </div>
      </div>
      <ActionButton />
      <div className="mt-4">
        <h2 className="text-lg font-semibold">Posts</h2>
        <div className="grid grid-cols-3 gap-4">
          {account.posts?.length ? (
            account.posts.map((post) => (
              <div key={post.id} className="flex flex-col items-center">
                {post.picture && (
                  <img
                    src={BASE_URL + post.picture}
                    alt={post.title}
                    className="w-full h-44 object-cover rounded-lg"
                  />
                )}
                {post.title && (
                  <p className="text-sm text-center mt-2">{post.title}</p>
                )}
              </div>
            ))
          ) : (
            <p>No posts available</p>
          )}
        </div>
      </div>
    </>
  );
};
