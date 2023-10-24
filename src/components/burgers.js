import Image from "next/image";
import { useEffect, useState } from "react";

export default function Burgers() {

const [burgers, setBurgers] = useState([])

   useEffect(() => {
    handleFetchBurgers()
    }, [])



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
                <div key={i} className=" lg:flex items-center p-1  bg-blue-200 p-2">
                < div className="w-1/2">
                    <Image
                        className="w-40% bg-cover rounded-lg"
                        width={330}
                        height={330}
                        src="/hamburger.jpg"
                        alt="hamburger"
                    />
                    </div>
                    <div className="flex-col flex justify-center items-center text-center w-1/2 p-1 h-auto">
                        <h2>{burger.name}</h2>
                        <p>{burger.description}</p>
                        <p>{burger.price}</p>
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
