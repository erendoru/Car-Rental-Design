"use client";
import { useCars } from "@/context/CarContext";
import Image from "next/image";
import { useState } from "react";

export default function PopularCarList() {
  const { cars, toggleFavorite } = useCars();
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const popularCars = cars.slice(0, 4);

  return (
    <div className="w-full px-4 md:px-6 lg:px-8 md:max-w-[92%]  mx-auto my-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-[#90A3BF] text-xl">Popular Car</h2>
        <button className="text-blue-600 text-sm font-semibold">
          View All
        </button>
      </div>

      {/* Kaydırılabilir Kart Konteyneri */}
      <div className="relative overflow-hidden">
        <div className="flex overflow-x-auto gap-4 no-scrollbar touch-pan-x snap-x snap-mandatory">
          {popularCars.map((car) => (
            <div
              key={car.id}
              className="flex-none w-[85vw] md:w-[300px] lg:w-[320px] bg-white rounded-[10px] p-4 hover:shadow-lg transition-all duration-300 snap-start"
              onMouseEnter={() => setHoveredCard(car.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Kart içeriği aynı kalacak */}
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-xl font-bold text-[#1A202C]">
                    {car.name}
                  </h3>
                  <p className="text-[#90A3BF] text-sm">{car.type}</p>
                </div>
                {/* Favori butonu */}
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

              {/* Araç Görseli */}
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

              {/* Özellikler */}
              <div className="flex justify-between items-center mb-6 text-[#90A3BF] text-sm">
                <div className="flex items-center gap-2">
                  <svg
                    width="24"
                    height="24"
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

              {/* Fiyat ve Kiralama Butonu */}
              <div className="flex justify-between items-center">
                <div>
                  <span className="text-xl font-bold">
                    ${car.pricePerDay.toFixed(2)}
                  </span>
                  <span className="text-[#90A3BF] text-sm">/day</span>
                </div>
                <button className="bg-blue-600 text-white px-6 py-2.5 rounded-[4px] hover:bg-blue-700 transition-colors font-medium">
                  Rental Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
