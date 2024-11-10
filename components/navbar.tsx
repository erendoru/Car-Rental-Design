"use client";
import React, { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { IoMdSettings } from "react-icons/io";
import { BiSolidBellRing } from "react-icons/bi";
import { FaHeart } from "react-icons/fa6";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-white w-full">
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white transform transition-transform duration-300 ease-in-out z-50 lg:hidden ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-4">
          <div className="flex justify-end">
            <button onClick={() => setIsMenuOpen(false)}>
              <IoMdClose size={24} />
            </button>
          </div>
          <div className="flex flex-col gap-4 mt-8">
            <div className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-lg">
              <FaHeart size={20} color="gray" />
              <span>Favoriler</span>
            </div>
            <div className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-lg">
              <BiSolidBellRing size={20} color="gray" />
              <span>Bildirimler</span>
            </div>
            <div className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-lg">
              <IoMdSettings size={20} color="gray" />
              <span>Ayarlar</span>
            </div>
          </div>
        </div>
      </div>

      <div className="h-auto lg:h-20 w-full flex flex-col lg:flex-row lg:items-center lg:justify-around p-4">
        <div className="flex items-center justify-between lg:hidden mb-4">
          <button onClick={() => setIsMenuOpen(true)}>
            <RxHamburgerMenu size={24} />
          </button>
          <Avatar>
            <AvatarImage
              src="https://avatars.githubusercontent.com/u/26509530?s=400&u=2cfb5e1d98ad66689680562560cd99fb4b0b19&v=4"
              className="cursor-pointer"
            />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>

        <div className="flex flex-col lg:flex-row items-start lg:items-center lg:justify-center gap-4 lg:gap-10">
          <div className="text-2xl font-bold text-blue-500 self-start cursor-pointer">
            MORENT
          </div>

          <div className="w-full flex items-center gap-2 lg:hidden">
            <div className="relative flex-grow">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                className="outline-none block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Search something here"
                required
              />
            </div>
            <div className="border border-gray-300 rounded-lg p-2 cursor-pointer">
              <img src="filter.png" alt="filter" className="w-6 h-6" />
            </div>
          </div>

          <div className="hidden lg:block w-80">
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                className="outline-none block w-full p-2 ps-10 cursor-pointer text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Search something here"
                required
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                <img src="filter.png" alt="filter" className="w-6 h-6 " />
              </div>
            </div>
          </div>
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <div className="border rounded-full px-2 py-2 cursor-pointer hover:bg-gray-100">
            <FaHeart size={20} color="gray" />
          </div>
          <div className="border rounded-full px-2 py-2 cursor-pointer hover:bg-gray-100">
            <BiSolidBellRing size={20} color="gray" />
          </div>
          <div className="border rounded-full px-2 py-2 cursor-pointer hover:bg-gray-100">
            <IoMdSettings size={20} color="gray" />
          </div>
          <Avatar>
            <AvatarImage
              src="https://avatars.githubusercontent.com/u/26509530?s=400&u=2cfb5e1d98ad66689680562560cd99fb4b0b19&v=4"
              className="cursor-pointer"
            />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
