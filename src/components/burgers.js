import Image from "next/image";
import { useEffect, useState } from "react";
import { IoIosBasket } from "react-icons/io";
import { RiDeleteBackLine} from "react-icons/ri";

export default function Burgers() {

const [burgers, setBurgers] = useState([])
const [count, setCount] = useState(0)


   useEffect(() => {
    handleFetchBurgers()
    }, [])

    const handleShoppingCart = () => {
        setCount(count + 1)
    }

    const handleRemoveShoppingCart = () => {
        setCount(count - 1)
    }



    const handleFetchBurgers = async (req, res) => {
    try {
        const response = await fetch("http://localhost:3000/burgers")
        const data = await response.json()
        console.log("data: ", data)
        if (data) {
            setBurgers(data)
        } else {
            return []
    }} catch (error) {
        console.log("error: ", error)
    }
    }

    const burgerDetails = burgers.map((burger, i) => {
            return (
                <div key={i} className=" lg:flex items-center p-1 bg-yellow-50 p-2">
                < div className="w-1/2">
                    <Image
                        className="w-40% bg-cover rounded-lg"
                        width={330}
                        height={330}
                        src="/hamburger.jpg"
                        alt="hamburger"
                    />
                    </div>
                    <div className="flex-col flex justify-around items-center text-center w-1/2 p-1 h-full slide">
                        <h2 className="text-xl underline decoration-solid ">{burger.nom}</h2>
                        <p>{burger.description}</p>
                        <div className="flex justify-around w-full text-right space-x-4 items-center">
                        <p className="w-full text-right">{burger.prix} €</p>
                        <IoIosBasket className="cursor-pointer" onClick={handleShoppingCart}/>
                        <div className={`${count == 0 ? "hidden" : "text-sm"} flex space-x-4 justify-center items-center`}>
                        <RiDeleteBackLine className="cursor-pointer" onClick={handleRemoveShoppingCart}/>
                        <span >{count}</span>
                        </div>
                        </div>
                    </div>
                </div>
            )
        })


  return (
    <div className="h-full w-full lg:grid lg:grid-rows-5 lg:grid-flow-col lg:gap-2 ">
      {burgerDetails}
    </div>
  );
}
