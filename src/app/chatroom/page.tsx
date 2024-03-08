import React from "react";
import { FaUsers } from "react-icons/fa6";
import { IoChatbubbles } from "react-icons/io5";
import { LuSend } from "react-icons/lu";

const Chatroom = () => {
  return (
    <div className="h-screen">
      <header className="flex h-[15%] justify-between items-center px-16 bg-purple-500">
        <nav className="flex justify-between items-center h-24 w-full">
          <h1 className="text-white text-2xl font-semibold ">ChatSphere</h1>
          <button className="w-32 rounded h-10 text-white font-semibold bg-purple-700 text-lg flex items-center justify-center">
            Leave room
          </button>
        </nav>
      </header>
      <section className="flex border border-red-600 h-[70%]">
        <aside className="flex flex-col border border-red-500 w-2/12 bg-purple-300 text-white py-6 px-6 gap-9">
          <div className="flex flex-col gap-4">
            <div className="flex gap-2 items-center">
              <IoChatbubbles className="w-8 h-8" />
              <p className="text-xl">Room Name:</p>
            </div>

            <div className="p-3 bg-purple-400">
              <p>Javascript</p>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <FaUsers className="w-8 h-8 " />
              <p className="text-xl ">Users :</p>
            </div>
            <div>
              <p>Anas</p>
            </div>
          </div>
        </aside>
      </section>
      <footer className="bg-purple-500 h-[15%] border border-green-600 flex items-center justify-center px-12">
        <form action="" className="flex items-center justify-center w-full">
          <input
            type="text"
            className="w-10/12 h-10 pl-5"
            placeholder="Enter Message Here"
          />
          <div className="flex border border-black w-1/12 h-10 items-center gap-3 text-white pl-3">
            <LuSend className="w-6 h-6" />
            <button className="text-xl">Send</button>
          </div>
        </form>
      </footer>
    </div>
  );
};

export default Chatroom;

// "use client";
// import React, { FormEvent, useEffect, useState } from "react";
// import { io } from "socket.io-client";
// const Home = () => {
//   const [socket, setSocket] = useState<any>(undefined);
//   const [room, setRoom] = useState("");
//   const [inbox, setInbox] = useState<any>([]);
//   const [message, setMessage] = useState("");
//   useEffect(() => {
//     const socket = io("http://localhost:8080");
//     socket.on("message", (message) => {
//       setInbox((prev: any) => [...prev, message]);
//       // console.log(message);
//     });

//     setSocket(socket);
//   }, []);

//   const handleSubmit = (e: FormEvent) => {
//     e.preventDefault();
//     socket.emit("message", message);
//     console.log(message);
//   };
//   const hanldeJoin = (e: FormEvent) => {
//     e.preventDefault();
//     socket.emit("room", room);
//     console.log(room);
//   };
//   return (
//     <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md">
//       <h2 className="text-xl font-semibold mb-4">Chat Form</h2>
//       <form>
//         <div className="mb-4">
//           <label
//             htmlFor="message"
//             className="block text-gray-700 font-bold mb-2"
//           >
//             Message:
//           </label>
//           <input
//             onChange={(e) => setMessage(e.target.value)}
//             value={message}
//             type="text"
//             id="message"
//             name="message"
//             placeholder="Enter your message"
//             className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:ring focus:border-blue-500"
//           />
//         </div>
//         <div className="mb-4">
//           <label htmlFor="room" className="block text-gray-700 font-bold mb-2">
//             Room:
//           </label>
//           <input
//             onChange={(e) => setRoom(e.target.value)}
//             value={room}
//             type="text"
//             id="room"
//             name="room"
//             placeholder="Enter room name"
//             className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:ring focus:border-blue-500"
//           />
//         </div>
//         <button
//           onClick={handleSubmit}
//           type="submit"
//           className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
//         >
//           Send
//         </button>
//         <button
//           onClick={hanldeJoin}
//           type="submit"
//           className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
//         >
//           Join
//         </button>
//         {inbox.map((message: string, index: number) => (
//           <div className="text-black" key={index}>
//             {message}
//           </div>
//         ))}
//       </form>
//     </div>
//   );
// };

// export default Home;
