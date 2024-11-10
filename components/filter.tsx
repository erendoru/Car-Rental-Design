"use client";
import { useState } from "react";

export default function Filter() {
  const [pickupLocation, setPickupLocation] = useState("Semarang");
  const [pickupDate, setPickupDate] = useState("20 July 2022");
  const [pickupTime, setPickupTime] = useState("07:00");
  const [dropLocation, setDropLocation] = useState("Semarang");
  const [dropDate, setDropDate] = useState("21 July 2022");
  const [dropTime, setDropTime] = useState("01:00");

  return (
    <div className="w-full max-w-[1440px] mx-auto px-12 relative ">
      <div className="flex flex-col md:flex-row md:items-center md:space-x-4">
        {/* Pick-Up Section */}
        <div className="flex-1 mb-6 md:mb-0 bg-white rounded-2xl p-6">
          <div className="flex items-center mb-4">
            <input
              type="radio"
              checked
              className="w-4 h-4 text-blue-600"
              readOnly
            />
            <span className="ml-2 text-gray-900 font-medium">Pick-Up</span>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div className="relative">
              <label className="block text-sm font-bold text-gray-900 mb-1">
                Locations
              </label>
              <div className="relative">
                <select
                  className="w-full p-2.5 text-gray-500 text-sm appearance-none pr-8 outline-none"
                  value={pickupLocation}
                  onChange={(e) => setPickupLocation(e.target.value)}
                >
                  <option value="Semarang">Semarang</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <div className="relative">
              <label className="block text-sm font-bold text-gray-900 mb-1">
                Date
              </label>
              <div className="relative">
                <select
                  className="w-full p-2.5 text-gray-500 text-sm appearance-none pr-8 outline-none"
                  value={pickupDate}
                  onChange={(e) => setPickupDate(e.target.value)}
                >
                  <option value="20 July 2022">20 July 2022</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <div className="relative">
              <label className="block text-sm font-bold text-gray-900 mb-1">
                Time
              </label>
              <div className="relative">
                <select
                  className="w-full p-2.5 text-gray-500 text-sm appearance-none pr-8 outline-none"
                  value={pickupTime}
                  onChange={(e) => setPickupTime(e.target.value)}
                >
                  <option value="07:00">07:00</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Switch Icon */}
        <div className="absolute left-1/2 top-[45%] md:relative md:left-auto md:top-auto md:flex md:justify-center md:my-0 -translate-x-1/2 md:translate-x-0 cursor-pointer">
          <div className="w-16 h-16 md:w-12 md:h-12 bg-blue-600 rounded-lg flex items-center justify-center shadow-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 md:h-6 md:w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"
              />
            </svg>
          </div>
        </div>

        {/* Drop-Off Section */}
        <div className="flex-1 mt-6 md:mt-0 bg-white rounded-2xl p-6">
          <div className="flex items-center mb-4">
            <input
              type="radio"
              checked
              className="w-4 h-4 text-blue-600"
              readOnly
            />
            <span className="ml-2 text-gray-900 font-medium">Drop-Off</span>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div className="relative">
              <label className="block text-sm font-bold text-gray-900 mb-1">
                Locations
              </label>
              <div className="relative">
                <select
                  className="w-full p-2.5 text-gray-500 text-sm appearance-none pr-8 outline-none"
                  value={dropLocation}
                  onChange={(e) => setDropLocation(e.target.value)}
                >
                  <option value="Semarang">Semarang</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <div className="relative">
              <label className="block text-sm font-bold text-gray-900 mb-1">
                Date
              </label>
              <div className="relative">
                <select
                  className="w-full p-2.5 text-gray-500 text-sm appearance-none pr-8 outline-none"
                  value={dropDate}
                  onChange={(e) => setDropDate(e.target.value)}
                >
                  <option value="21 July 2022">21 July 2022</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <div className="relative">
              <label className="block text-sm font-bold text-gray-900 mb-1">
                Time
              </label>
              <div className="relative">
                <select
                  className="w-full p-2.5 text-gray-500 text-sm appearance-none pr-8 outline-none"
                  value={dropTime}
                  onChange={(e) => setDropTime(e.target.value)}
                >
                  <option value="01:00">01:00</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
