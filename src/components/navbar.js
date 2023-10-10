import { useEffect, useRef } from "react";
import Link from "next/link";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { PiSignInBold } from "react-icons/pi";
import { AiOutlineLogout } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";
import { BsFillBoxFill } from "react-icons/bs";
import { BsFillBagFill } from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import { MdFastfood } from "react-icons/md";
import { SiGnuprivacyguard } from "react-icons/si";
import { MdManageAccounts } from "react-icons/md";
import Image from "next/image";

export default function Navbar({
  isDrawerOpen,
  toggleDrawer,
  toggleEcommerce,
  isDrawerOpenEcommerce,
}) {
  const drawerRef = useRef(null);
  useEffect(() => {
    function handleOutsideClick(event) {
      if (
        drawerRef.current &&
        !drawerRef.current.contains(event.target) &&
        !isDrawerOpen
      ) {
        toggleDrawer();
      }
    }

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isDrawerOpen]);

  return (
    <>
      <div className="text-center">
        <button
          className="text-white w-90% bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium  text-sm px-5 py-2.5 mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          type="button"
          data-drawer-target="drawer-body-scrolling"
          data-drawer-show="drawer-body-scrolling"
          data-drawer-body-scrolling="true"
          aria-controls="drawer-body-scrolling"
          onClick={toggleDrawer}
        >
          DECOUVRIR NOS MENUS ET COMMANDEZ
        </button>
      </div>
      <div
        ref={drawerRef}
        id="drawer-body-scrolling"
        className={`fixed top-0 left-0 z-40 h-screen p-4 overflow-y-auto transition-transform ${
          isDrawerOpen ? "-translate-x-full" : ""
        } bg-white w-64 dark:bg-gray-800`}
        tabIndex="-1"
        aria-labelledby="drawer-body-scrolling-label"
      >
        <h5
          id="drawer-body-scrolling-label"
          className="text-base font-semibold text-gray-500 uppercase dark:text-gray-400"
        >
          Menu
        </h5>
        <button
          type="button"
          data-drawer-hide="drawer-body-scrolling"
          aria-controls="drawer-body-scrolling"
          onClick={toggleDrawer}
          className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 right-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white"
        >
          <RxCross1 />
          <span className="sr-only">Close menu</span>
        </button>
        <div className="py-4 overflow-y-auto">
          <ul className="space-y-2 font-medium">
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <Image  alt="Latnight Food Restaurant" src="/Latnight-logos.jpeg" width={20} height={20} />
                <span className="ml-3">Latnight Food</span>
              </a>
            </li>
            <li>
              <button
                type="button"
                className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                aria-controls="dropdown-example"
                data-collapse-toggle="dropdown-example"
                onClick={toggleEcommerce}
              >
                <MdFastfood />
                <span className="flex-1 ml-3 text-left whitespace-nowrap">
                  Produits
                </span>
                <MdOutlineKeyboardArrowDown />
              </button>

              <ul
                id="dropdown-example"
                className={`${
                  !isDrawerOpenEcommerce ? "hidden" : ""
                } py-2 space-y-2`}
              >
                <li>
                  <Link
                    href="/burgers"
                    className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                  >
                    Burgers
                  </Link>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                  >
                    Pizzas
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                  >
                    Frites & Potatoes
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                  >
                    Boissons
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <MdManageAccounts />
                <span className="flex-1 ml-3 whitespace-nowrap">
                  Mon compte
                </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <BsFillBagFill />
                <span className="flex-1 ml-3 whitespace-nowrap">Panier</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <BsFillBoxFill />
                <span className="flex-1 ml-3 whitespace-nowrap">
                  Mes commandes
                </span>
                {/* <span className="inline-flex items-center justify-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300">
                  Pro
                </span> */}
              </a>
            </li>
            <li>
              <Link
                href="/login"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <PiSignInBold />
                <span className="flex-1 ml-3 whitespace-nowrap">Sign In</span>
              </Link>
            </li>
            <li>
              <Link
                href="/signup"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <SiGnuprivacyguard />
                <span className="flex-1 ml-3 whitespace-nowrap">Sign Up</span>
              </Link>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <AiOutlineLogout />
                <span className="flex-1 ml-3 whitespace-nowrap">Logout</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <GrMail />
                <span className="flex-1 ml-3 whitespace-nowrap">
                  Nous contacter
                </span>
                {/* <span className="inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">
                  3
                </span> */}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
