import { useState } from 'react'
import remesasLianlie from "../src/assets/remesasLianlie.jpg"
import planeta from "../src/assets/planeta.png"
import { FaHandshake, FaHandHoldingHeart, FaWhatsapp, FaInstagram } from "react-icons/fa6";
import { IoIosFlash } from "react-icons/io";
import { Link } from 'react-router-dom';


function App() {
  const [design, setDesign] = useState("1")

  

  return (
    <div className={`flex flex-col justify-center ${design === "1" && "bg-one"} ${design === "2" && "bg-two"} ${design === "3" && "bg-three"} w-full h-screen p-2`}>
      <div className='flex flex-col items-center justify-center '>
        <div className='mt-4'>
          <img src={remesasLianlie} alt="" className={`${design === "1" && "border-2 border-two"} ${design === "2" && "border-4 border-one"} ${design === "3" && "border-4 border-one"} w-28 h-28 rounded-full m-auto md:w-36 md:h-36`}/>
        </div>
        <div className={`flex justify-center items-center w-full h-16 rounded-t-xl pt-2 text-base ${design === "1" && "text-black font-semibold"} ${design === "2" && "text-black font-semibold"} ${design === "3" && "text-two font-normal"} lg:w-1/3 md:text-xl`}>
          Envía desde cualquier lugar del <img src={planeta} className='w-6 h-6 ml-2 mt-1'/> 
        </div>
      </div>
      <div className='flex flex-col items-center justify-center mt-4'>
        <div className='flex mb-2'>
          <FaHandshake className={`flex text-base m-auto mr-2 ${design === "1" && "text-two"} ${design === "2" && "text-one"} ${design === "3" && "text-one"} md:text-xl`}/>
          <h2 className={`text-base ${design === "1" && "text-black font-semibold"} ${design === "2" && "text-black font-semibold"} ${design === "3" && "text-two font-normal"} md:text-xl`}>Confianza</h2>
        </div>
        <div className='flex mb-2'>
          <FaHandHoldingHeart className={`flex text-base m-auto mr-2 ${design === "1" && "text-two"} ${design === "2" && "text-one"} ${design === "3" && "text-one"} md:text-xl`}/>
          <h2 className={`text-base ${design === "1" && "text-black font-semibold"} ${design === "2" && "text-black font-semibold"} ${design === "3" && "text-two font-normal"} md:text-xl`}>Responsabilidad</h2>
        </div>
        <div className='flex mb-4'>
          <IoIosFlash className={`flex text-base m-auto mr-2  ${design === "1" && "text-two"} ${design === "2" && "text-one"} ${design === "3" && "text-one"} md:text-xl`}/>
          <h2 className={`text-base ${design === "1" && "text-black font-semibold"} ${design === "2" && "text-black font-semibold"} ${design === "3" && "text-two font-normal"} md:text-xl`}>Rapidez</h2>
        </div>
      </div>
      <div className='flex flex-col justify-center items-center mt-3 w-full'>
        <Link to={"https://wa.me/+584242920571"} className={`flex justify-center p-4 mb-2  rounded-xl w-3/4 ${design === "1" && "bg-two bg-opacity-30 hover:bg-opacity-50 "} ${design === "2" && "bg-one bg-opacity-70 hover:bg-opacity-90"} ${design === "3" && "bg-two bg-opacity-25 hover:bg-opacity-40"} md:w-1/4`}>
            <FaWhatsapp className={`flex justify-center text-base mt-1 ${design === "1" && "text-black"} ${design === "2" && "text-black"} ${design === "3" && "text-one"} md:text-xl`}/>
            <h2 className={`flex items-center ml-4 text-base font-semibold md:text-xl`}>Contactanos</h2>
        </Link>
        <Link to={"https://www.instagram.com/remesas_lianlie/"} className={`flex justify-center p-4 rounded-xl w-3/4 ${design === "1" && "bg-two bg-opacity-30 hover:bg-opacity-50 "} ${design === "2" && "bg-one bg-opacity-70 hover:bg-opacity-90"} ${design === "3" && "bg-two bg-opacity-25 hover:bg-opacity-40"} md:w-1/4`}>
            <FaInstagram className={`flex justify-center text-base mr-1 mt-1 ${design === "1" && "text-black"} ${design === "2" && "text-black"} ${design === "3" && "text-one"} md:text-xl`}/>
            <h2 className={`flex items-center ml-4 text-base font-semibold md:text-xl`}>Conocenos</h2>
        </Link>
      </div>
      
      <div className='flex gap-6 justify-center mt-20'>
        <button className='w-10 rounded-md bg-[#808080]' onClick={() => setDesign("1")}>Uno</button>
        <button className='w-10 rounded-md bg-[#808080]' onClick={() => setDesign("2")}>Dos</button>
        <button className='w-10 rounded-md bg-[#808080]' onClick={() => setDesign("3")}>Tres</button>
      </div>
    </div>
  )
}

export default App