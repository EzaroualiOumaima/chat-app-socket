import React from "react";
import image from "@/assets/background.webp";
import Link from "next/link";
const Page = () => {
  return (
    <form
      className="flex items-center justify-center h-screen "
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${image.src})`,
      }}
    >
      <div className="w-[28rem] h-[25rem]">
        <div className="flex items-center justify-center w-full bg-purple-500 h-[70px]  rounded text-white">
          <h1 className="font-bold text-2xl">ChatSphere</h1>
        </div>
        <div className="h-[330px] bg-purple-300 flex flex-col items-center py-7 gap-5 px-10">
          <div className="flex flex-col gap-1 w-full">
            <p className="text-white text-lg">Username</p>
            <input
              type="text"
              placeholder="Enter your name..."
              className="w-full h-10 outline-none pl-3"
            />
          </div>
          <div className="flex flex-col gap-2 w-full mb-7">
            <p className="text-white text-lg">Room</p>
            <select name="" id="" className="h-10 outline-none">
              <option value="javascript">Javascript</option>
              <option value="javascript">Java</option>
            </select>
          </div>
          <Link
            href="/chatroom"
            className="w-full h-10 text-white font-semibold bg-purple-600 text-lg flex items-center justify-center "
          >
            <button>Join Chat</button>
          </Link>
        </div>
      </div>
    </form>
  );
};

export default Page;
