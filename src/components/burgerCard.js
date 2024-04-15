import { GrRestaurant } from "react-icons/gr";
import Link from "next/link";
import Image from "next/image";

export default function BurgerCard() {
  const addToCart = () => {
    console.log("addToCart");
    alert("You have to login first !");
  };

  return (
    <div class="h-full flex flex-col justify-around bg-black border border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700">
      <Link href="/burgers" className="flex justify-center items-center">
        <Image
          className="rounded-t-lg bg-cover max-h-[200px] w-full"
          src="/beefCrispy.jpg"
          alt="product image"
        />
      </Link>
      <div class="text-center  pb-5">
        <h5 className="text-xl text-white font-semibold tracking-tight text-gray-900 dark:text-white">
          Le burger du mois ! Le BeefCrispy
        </h5>
        <div className="flex items-center sm:justify-around justify-center mt-2 p-2">
          {/* <span className="text-xl text-white font-bold text-gray-900 dark:text-white">
            €5
          </span> */}
          <Link
            onClick={addToCart}
            href="#"
            className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Acheter
          </Link>
        </div>
      </div>
    </div>
  );
}
