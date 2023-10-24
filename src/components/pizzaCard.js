import { GrRestaurant } from "react-icons/gr";
import Link from "next/link";

export default function PizzaCard() {
  const addToCart = () => {
    console.log("addToCart");
    alert("You have to login first !");
  };

  return (
    <div class="h-full flex flex-col justify-around p-1 bg-black border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <Link href="/pizzas" className="flex justify-center items-center">
        <img
          className="rounded-t-lg bg-cover max-h-[200px] w-full"
          src="/pizzaChampetre.jpg"
          alt="product image"
        />
      </Link>
      <div class="text-center  pb-5">
        <h5 className="text-xl text-white font-semibold tracking-tight text-gray-900 dark:text-white">
          La pizza du mois ! La Veggie
        </h5>
        <div className="flex items-center sm:justify-around justify-center mt-2 p-2">
          {/* <span className="text-xl text-white font-bold text-gray-900 dark:text-white">
            €5
          </span> */}
          <a
            onClick={addToCart}
            href="#"
            className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Acheter
          </a>
        </div>
      </div>
    </div>
  );
}
