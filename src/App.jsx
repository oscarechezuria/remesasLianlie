 import { useState } from 'react'
import remesasLianlie from "../src/assets/remesasLianlie.jpg"
import planeta from "../src/assets/planeta.png"
import { FaHandshake, FaHandHoldingHeart, FaWhatsapp, FaInstagram } from "react-icons/fa6";
import { IoIosFlash } from "react-icons/io";
import { Link } from 'react-router-dom';


function App() {
  const [design, setDesign] = useState("1")

  

  return (
    <div className={`${design === "1" && "bg-one"} ${design === "2" && "bg-two"} ${design === "3" && "bg-three"} w-full h-screen p-2`}>
      <div className='flex justify-center '>
        <div className={`${design === "1" && "bg-two"} ${design === "2" && "bg-one"} ${design === "3" && "bg-two"} flex justify-center w-full h-36 z-8 rounded-t-xl pt-5 text-2xl font-semibold bg-opacity-40 lg:w-1/3`}>
          Desde cualquier lugar del <img src={planeta} className='w-6 h-6 ml-2 mt-1'/> 
        </div>
        <div className='absolute top-24'>
          <img src={remesasLianlie} alt="" className={`${design === "1" && "border-4 border-one"} ${design === "2" && "border-4 border-two"} ${design === "3" && "border-4 border-one"} w-36 h-36 rounded-full m-auto`}/>
        </div>
      </div>
      <div className='flex flex-col items-center justify-center mt-28'>
        <div className='flex mb-2'>
          <FaHandshake className='flex text-2xl m-auto mr-2 text-two'/>
          <h2 className='text-xl font-semibold'>Confianza</h2>
        </div>
        <div className='flex mb-2'>
          <FaHandHoldingHeart className='flex text-2xl m-auto mr-2 text-two'/>
          <h2 className='text-xl font-semibold'>Responsabilidad</h2>
        </div>
        <div className='flex mb-4'>
          <IoIosFlash className='flex text-2xl m-auto mr-2 text-two'/>
          <h2 className='text-xl font-semibold'>Rapidez</h2>
        </div>
      </div>
      <div className='flex flex-col justify-center items-center mt-3 w-full'>
        <Link to={"https://wa.me/+584242920571"} className='flex justify-center p-4 bg-two mb-2 bg-opacity-30 rounded-xl w-full lg:w-1/3'>
            <FaWhatsapp className='flex justify-center text-4xl'/>
            <h2 className='flex items-center ml-8 text-2xl'>Contactanos</h2>
        </Link>
        <Link to={"https://www.instagram.com/remesas_lianlie/"} className='flex justify-center p-4 bg-two bg-opacity-30 rounded-xl w-full lg:w-1/3'>
            <FaInstagram className='flex justify-center text-4xl mr-1'/>
            <h2 className='flex items-center ml-8 text-2xl'>Conocenos</h2>
        </Link>
      </div>

      
      <div className='flex gap-6 justify-center mt-32'>
        <button onClick={() => setDesign("1")}>1</button>
        <button onClick={() => setDesign("2")}>2</button>
        <button onClick={() => setDesign("3")}>3</button>
      </div>
    </div>
  )
}

export default App