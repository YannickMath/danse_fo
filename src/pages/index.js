import Link from "next/link";
import "animate.css";

export default function Home() {
  return (
    <div className="h-screen bg-white w-full grid grid-cols-4">
      <div className="flex-col grid grid-rows-2 col-start-1 col-span-1">
        01
        <div className="row-start-1 flex justify-center items-center">
          fdsfds
        </div>
        <div className="row-start-2 flex justify-center items-center">
          fdsfds
        </div>
      </div>
      <div className="col-start-2 col-span-3 ">02</div>

      <div className="bg-[url('/pizza.jpg')] bg-cover col-start-1 col-span-2">
        03
      </div>
      <div className="bg-[url('/hamburger.jpg')] bg-cover col-start-3 col-span-4">
        04
      </div>
    </div>
  );
}
