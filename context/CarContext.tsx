"use client";
import { createContext, useContext, useState, ReactNode } from "react";
import { ICar, CarType } from "@/types/car";
import { carsData } from "@/data/cars";

interface CarContextType {
  cars: ICar[];
  filteredCars: ICar[];
  favorites: ICar[];
  filterByType: (type: CarType | "all") => void;
  toggleFavorite: (carId: string) => void;
  currentFilter: CarType | "all";
}

const CarContext = createContext<CarContextType | undefined>(undefined);

export function CarProvider({ children }: { children: ReactNode }) {
  const [cars, setCars] = useState<ICar[]>(carsData);
  const [currentFilter, setCurrentFilter] = useState<CarType | "all">("all");
  const [favorites, setFavorites] = useState<ICar[]>([]);

  const filterByType = (type: CarType | "all") => {
    setCurrentFilter(type);
  };

  const toggleFavorite = (carId: string) => {
    setCars(
      cars.map((car) =>
        car.id === carId ? { ...car, isFavorite: !car.isFavorite } : car
      )
    );

    const car = cars.find((c) => c.id === carId);
    if (car) {
      if (car.isFavorite) {
        setFavorites(favorites.filter((f) => f.id !== carId));
      } else {
        setFavorites([...favorites, { ...car, isFavorite: true }]);
      }
    }
  };

  const filteredCars =
    currentFilter === "all"
      ? cars
      : cars.filter((car) => car.type === currentFilter);

  return (
    <CarContext.Provider
      value={{
        cars,
        filteredCars,
        favorites,
        filterByType,
        toggleFavorite,
        currentFilter,
      }}
    >
      {children}
    </CarContext.Provider>
  );
}

export function useCars() {
  const context = useContext(CarContext);
  if (context === undefined) {
    throw new Error("useCars must be used within a CarProvider");
  }
  return context;
}
