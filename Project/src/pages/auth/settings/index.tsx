import { useState } from "react";
import { UpdateLog } from "./updateLog";
import { UpdatePwd } from "./updatePwd";
import { PrivatePublic } from "./privatePublic";

export const Settings = () => {
  const [update, setUpdate] = useState<"log" | "pwd">("log");

  return (
    <div className="bg-gray-800 min-h-screen text-white">
      <h1 className="text-3xl font-bold text-center py-6">Settings</h1>
      <div className="flex justify-center space-x-4 mb-6">
        <button
          onClick={() => setUpdate("log")}
          className={`px-4 py-2 rounded-lg ${
            update === "log" ? "bg-blue-600" : "bg-gray-600"
          } hover:bg-blue-700 transition duration-300`}
        >
          Update Login
        </button>

        <button
          onClick={() => setUpdate("pwd")}
          className={`px-4 py-2 rounded-lg ${
            update === "pwd" ? "bg-blue-600" : "bg-gray-600"
          } hover:bg-blue-700 transition duration-300`}
        >
          Update Password
        </button>
        <PrivatePublic />
      </div>
      <div className="max-w-md mx-auto p-4">
        {update === "log" && <UpdateLog />}
        {update === "pwd" && <UpdatePwd />}
      </div>
    </div>
  );
};
