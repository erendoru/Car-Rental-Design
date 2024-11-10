"use client";
import { useCars } from "@/context/CarContext";
import Image from "next/image";
import { useState } from "react";

export default function ReconCars() {
  const { cars, toggleFavorite } = useCars();
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const recommendedCars = cars.slice(0, 8);

  return (
    <div className="w-full px-4 md:px-6 lg:px-8 max-w-[1440px] mx-auto my-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-[#90A3BF] text-xl">Recommendation Car</h2>
      </div>

      {/* Mobil Görünüm */}
      <div className="block lg:hidden space-y-4">
        {recommendedCars.map((car) => (
          <div
            key={car.id}
            className="bg-white rounded-xl p-4 hover:shadow-lg transition-shadow duration-300"
            onMouseEnter={() => setHoveredCard(car.id)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            {/* Başlık ve Favori */}
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-bold text-[#1A202C]">{car.name}</h3>
                <p className="text-[#90A3BF] text-sm">{car.type}</p>
              </div>
              <button
                onClick={() => toggleFavorite(car.id)}
                className="transition-transform hover:scale-110"
              >
                {car.isFavorite ? (
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="#ED3F3F"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                  </svg>
                ) : (
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    stroke="#90A3BF"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                      strokeWidth="1.5"
                    />
                  </svg>
                )}
              </button>
            </div>

            {/* Ana İçerik - Görsel ve Özellikler yan yana */}
            <div className="flex gap-4">
              {/* Sol taraf - Görsel */}
              <div className="relative w-[180px] h-[120px]">
                <Image
                  src={car.image}
                  alt={car.name}
                  fill
                  className="object-contain transition-transform duration-300"
                  style={{
                    transform:
                      hoveredCard === car.id ? "scale(1.05)" : "scale(1)",
                  }}
                />
              </div>

              {/* Sağ taraf - Özellikler */}
              <div className="flex flex-row justify-end align-middle flex-1 ">
                <div className="flex flex-col gap-2 text-[#90A3BF] text-sm">
                  <div className="flex items-center gap-2">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                    >
                      <path
                        d="M12 12L7 7M12 12L17 7M12 12V21"
                        strokeWidth="1.5"
                      />
                    </svg>
                    <span>{car.fuelCapacity}L</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                    >
                      <path
                        d="M16 3H8C6.89543 3 6 3.89543 6 5V19C6 20.1046 6.89543 21 8 21H16C17.1046 21 18 20.1046 18 19V5C18 3.89543 17.1046 3 16 3Z"
                        strokeWidth="1.5"
                      />
                    </svg>
                    <span>{car.transmission}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                    >
                      <path
                        d="M17 21V19C17 16.7909 15.2091 15 13 15H5C2.79086 15 1 16.7909 1 19V21"
                        strokeWidth="1.5"
                      />
                      <circle cx="9" cy="7" r="4" strokeWidth="1.5" />
                    </svg>
                    <span>{car.passengers} People</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Alt kısım - Fiyat ve Buton */}
            <div className="flex justify-between items-center mt-4">
              <div>
                <div className="text-2xl font-bold">
                  ${car.pricePerDay.toFixed(2)}
                </div>
                <div className="text-[#90A3BF] text-sm">/day</div>
                <div className="text-[#90A3BF] text-sm line-through">
                  ${(car.pricePerDay + 8).toFixed(2)}
                </div>
              </div>
              <button className="bg-blue-600 text-white px-6 py-2.5 rounded-[4px] hover:bg-blue-700 transition-colors font-medium">
                Rental Now
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop Görünüm */}
      <div className="hidden lg:grid grid-cols-4 gap-6">
        {recommendedCars.map((car) => (
          <div
            key={car.id}
            className="bg-white rounded-xl p-4 hover:shadow-lg transition-shadow duration-300"
            onMouseEnter={() => setHoveredCard(car.id)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-xl font-bold text-[#1A202C]">{car.name}</h3>
                <p className="text-[#90A3BF] text-sm">{car.type}</p>
              </div>
              <button
                onClick={() => toggleFavorite(car.id)}
                className="transition-transform hover:scale-110"
              >
                {car.isFavorite ? (
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="#ED3F3F"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                  </svg>
                ) : (
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    stroke="#90A3BF"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                      strokeWidth="1.5"
                    />
                  </svg>
                )}
              </button>
            </div>

            <div className="relative h-[180px] mb-6 bg-[#F6F7F9] rounded-lg">
              <Image
                src={car.image}
                alt={car.name}
                fill
                className="object-contain p-6 transition-transform duration-300"
                style={{
                  transform:
                    hoveredCard === car.id ? "scale(1.05)" : "scale(1)",
                }}
              />
            </div>

            <div className="flex justify-between items-center mb-6 text-[#90A3BF] text-sm">
              <div className="flex items-center gap-2">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path d="M12 12L7 7M12 12L17 7M12 12V21" strokeWidth="1.5" />
                </svg>
                <span>{car.fuelCapacity}L</span>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    d="M16 3H8C6.89543 3 6 3.89543 6 5V19C6 20.1046 6.89543 21 8 21H16C17.1046 21 18 20.1046 18 19V5C18 3.89543 17.1046 3 16 3Z"
                    strokeWidth="1.5"
                  />
                </svg>
                <span>{car.transmission}</span>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    d="M17 21V19C17 16.7909 15.2091 15 13 15H5C2.79086 15 1 16.7909 1 19V21"
                    strokeWidth="1.5"
                  />
                  <circle cx="9" cy="7" r="4" strokeWidth="1.5" />
                </svg>
                <span>{car.passengers} People</span>
              </div>
            </div>

            <div className="flex justify-between items-center">
              <div>
                <span className="text-xl font-bold">
                  ${car.pricePerDay.toFixed(2)}
                </span>
                <span className="text-[#90A3BF] text-sm">/day</span>
              </div>
              <button className="bg-blue-600 text-white px-6 py-2.5 rounded-[4px] hover:bg-blue-700 transition-colors font-medium">
                Rent Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
