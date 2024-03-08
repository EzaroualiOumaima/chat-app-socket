"use client";
import ChatImage from "@/assets/ChatImage.webp";
import Image from "next/image";
import Link from "next/link";
import Navbar from "./components/Navbar";
export default function Home() {
  return (
    <>
    <Navbar/>
      <section className="bg-purple-950 h-screen flex gap-16 items-center justify-start pl-28">
        <div className="pt-14 gap-10 flex flex-col text-white w-5/12">
          <h1 className="text-4xl leading-[3.5rem] ">
            Connect and Chat: Your Online Hub for Conversations
          </h1>
          <p className="text-xl">Fast, easy, Unlimited chat services</p>
          <div className="flex gap-6">
            <Link href="/joinroom">
            <button className="py-3 px-7 font-semibold rounded-full border border-purple-200 bg-purple-400 text-white">
              Create User
            </button>
            </Link>
            <button className="py-3 px-8 rounded-full font-semibold bg-transparent text-white border border-white">
              Join Chat
            </button>
          </div>
        </div>
        <div className="w-6/12">
          <Image src={ChatImage} alt="Chat Image" className="rounded" />
        </div>
      </section>
    </>
  );
}
