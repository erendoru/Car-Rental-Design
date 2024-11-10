import Card from "@/components/card";
import Filter from "@/components/filter";
import PopularCarList from "@/components/PopularCarList";
import ReconCars from "@/components/ReconCars";

export default function Home() {
  return (
    <div className=" flex flex-col justify-center items-center ">
      <div className="flex items-center justify-center px-4 md:px-14 py-4 md:py-8">
        <Card
          bgColor="bg-blue-400"
          title="The Best Platform for Car Rental"
          description="Ease of doing a car rental safely and reliably. Of course at a low price."
          textColor="text-white"
          imageUrl="/car-first.png"
          buttonBgColor="bg-blue-600"
        />
        <Card
          className=" hidden md:block"
          bgColor="bg-blue-600"
          title="Easy way to rent a car at a low price"
          description="Providing cheap car rental services and safe and comfortable facilities."
          textColor="text-white"
          imageUrl="/BG2.png"
          buttonBgColor="bg-blue-400"
        />
      </div>
      <Filter />
      <PopularCarList />
      <ReconCars />
    </div>
  );
}
