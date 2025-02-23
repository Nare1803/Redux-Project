import { useState, useEffect } from "react";
import { Http } from "../../../../../helpers/api";
import { IPost } from "../../../../../helpers/types";

export const Gallery = () => {
  const [posts, setPosts] = useState<IPost[]>([]);

  useEffect(() => {
    Http.get("/posts").then((response) => {
      setPosts(response.data.payload);
    });
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6 bg-gray-800  min-h-screen">
      {" "}
      {posts.map((post) => (
        <div key={post.id} className="bg-gray-800 p-4 rounded shadow-md">
          {post.picture && (
            <img
              src={`http://localhost:4002${post.picture}`}
              alt="User Post"
              className="w-full rounded mb-2"
              style={{ objectFit: "cover", height: "200px" }}
            />
          )}
          <p className="text-gray-400">{post.title}</p>
        </div>
      ))}
    </div>
  );
};
