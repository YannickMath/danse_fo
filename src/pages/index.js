import Link from "next/link";
import { useState } from "react";
import BurgerCard from "@/components/burgerCard";
import PizzaCard from "@/components/pizzaCard";

export default function Home({ toggleDrawer }) {
  return (
    <div className="min-h-screen bg-white w-full sm:grid grid-cols-4 grid-rows-3 space-x-1">
      <BurgerCard className="flex-col p-1 col-start-1 col-span-1 row-span-1" />
      <div className="col-start-2 col-span-2 row-span-1 bg-[url('/logo.png')] bg-cover rounded-lg mb-1 "></div>
      <PizzaCard className="flex-col p-1 col-start-1 col-span-1 row-span-1" />

      <div
        className="bg-[url('/pizza.jpg')] bg-cover col-start-1 col-span-2 row-span-2 rounded-lg "
        alt="pizza"
      ></div>
      <div
        className="bg-[url('/hamburger.jpg')] bg-cover col-start-3 col-span-4 row-span-2 rounded-lg "
        alt="hamburger"
      ></div>
    </div>
  );
}
