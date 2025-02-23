import { useState, useRef } from "react";
import { Http } from "../../../../../helpers/api";
import { IContext, IPost } from "../../../../../helpers/types";
import { useOutletContext } from "react-router-dom";

export const AddPost = () => {
  const [description, setDescription] = useState<string>("");
  const [preview, setPreview] = useState<string | null>(null);
  const [showInput, setShowInput] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const photo = useRef<HTMLInputElement | null>(null);
  const { user, refetch } = useOutletContext<IContext>();
  const [posts, setPosts] = useState<IPost[]>(user?.posts || []);

  const handlePreview = () => {
    const file = photo.current?.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setPreview(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async () => {
    if (!photo.current?.files?.[0]) {
      setErrorMessage("Please provide a photo.");
      return;
    }
    const formData = new FormData();
    formData.append("photo", photo.current.files[0]);
    formData.append("content", description);

    try {
      const response = await Http.post<IPost>("/posts", formData);
      setPosts((prev) => [response.data, ...prev]);
      setDescription("");
      setPreview(null);
      if (photo.current) {
        photo.current.value = "";
      }
      setShowInput(false);
      refetch();
      setErrorMessage("");
    } catch (error) {
      console.error("Error adding post:", error);
      setErrorMessage("Failed to add the post.");
    }
  };

  const handleLike = async (postId: number) => {
    try {
      await Http.post(`/posts/react/${postId}`);
      setPosts((prev) =>
        prev.map((post) =>
          post.id === postId ? { ...post, liked: !post.liked } : post
        )
      );
    } catch (error) {
      console.error("Error toggling like:", error);
    }
  };

  return (
    <div>
      {/* Add Post Section */}
      {!showInput && (
        <button
          onClick={() => setShowInput(true)}
          className="bg-gray-800 text-white px-4 py-2 rounded shadow-md mb-4 flex items-center space-x-2"
        >
          <img
            src="https://img.icons8.com/ios-filled/50/ffffff/plus.png"
            alt="Add Post"
            className="w-5 h-5"
          />
          <span>Add Post</span>
        </button>
      )}

      {showInput && (
        <>
          <textarea
            className="w-full p-2 bg-gray-700 text-white rounded mb-4"
            placeholder="Write a description..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>

          <input
            type="file"
            ref={photo}
            className="hidden"
            onChange={handlePreview}
          />
          <button
            onClick={() => photo.current?.click()}
            className="bg-gray-500 text-white px-4 py-2 rounded shadow-md mb-4 mr-4"
          >
            Choose Photo
          </button>

          {preview && (
            <div className="mb-4">
              <img
                src={preview}
                alt="Preview"
                className="w-24 h-24 object-cover rounded"
              />
            </div>
          )}

          {errorMessage && (
            <div className="text-red-500 text-sm mb-4">{errorMessage}</div>
          )}

          <button
            onClick={handleSubmit}
            className="bg-green-800 text-white px-4 py-2 rounded shadow-md"
          >
            Post
          </button>
        </>
      )}

      {/* Posts Section */}
      <div className="mt-4">
        <h2 className="text-lg font-semibold">Posts</h2>
        {/* <div className="grid grid-cols-3 gap-4">
          {posts.map((post) => (
            <div key={post.id} className="flex flex-col items-center">
              <img
                src={post.picture}
                alt={post.content || "Post Image"}
                className="w-full h-44 object-cover rounded-lg"
              />
              <p className="text-sm text-center mt-2">{post.content}</p>
              <div className="flex items-center space-x-2 mt-2">
                <button
                  onClick={() => handleLike(post.id)}
                  className="flex items-center"
                >
                  <img
                    src={
                      post.liked
                        ? "https://cdn4.iconfinder.com/data/icons/multimedia-75/512/multimedia-10-512.png"
                        : "https://cdn4.iconfinder.com/data/icons/multimedia-75/512/multimedia-20-512.png"
                    }
                    alt={post.liked ? "Unlike" : "Like"}
                    className={`w-6 h-6 ${post.liked ? "text-red-500" : ""}`}
                  />
                </button>
                <span
                  className={`text-sm ${
                    post.liked ? "text-red-500 font-semibold" : "text-gray-500"
                  }`}
                >
                  {post.liked ? "Liked" : "Like"}
                </span>
              </div>
            </div>
          ))}
        </div> */}
      </div>
    </div>
  );
};
