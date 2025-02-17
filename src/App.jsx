import './App.css'
import ProductCard from './components/productCard' 
import { BsGraphDown } from "react-icons/bs";
import { FaRegBookmark, FaRegUser } from "react-icons/fa";
import { MdOutlineSpeaker } from "react-icons/md";


function App() {

  return (
    <div className='w-full h-screen flex'>
      <div className='w-[300px] h-full bg-green-200'>
        <button className='w-full h-[40px] text-black text-[20px] font-bold flex justify-center items-center'>
          <BsGraphDown></BsGraphDown>
          Dashboard
        </button>
        <button className='w-full h-[40px] text-black text-[20px] font-bold flex justify-center items-center'>
          <FaRegBookmark/>
          Bookings
        </button>
        <button className='w-full h-[40px] text-black text-[20px] font-bold flex justify-center items-center'>
          <MdOutlineSpeaker/>
          Items
        </button>
        <button className='w-full h-[40px] text-black text-[20px] font-bold flex justify-center items-center'>
          <FaRegUser/>
          Users
        </button>
      </div> 
    <div className='w-full bg-red-400'>
      
      </div>
    </div>
  )
}

export default App
