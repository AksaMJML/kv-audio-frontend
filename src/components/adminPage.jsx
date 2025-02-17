import { BsGraphDown } from "react-icons/bs";
import { FaRegBookmark, FaRegUser } from "react-icons/fa";
import { MdOutlineSpeaker } from "react-icons/md";

export default function AdminPage() {
  return ( // Added 'return' here
    <div className='w-full h-screen flex'>
      {/* Sidebar */}
      <div className='w-[300px] h-full bg-green-200 p-4'>
        <button className='w-full h-[40px] text-black text-[20px] font-bold flex items-center gap-2 p-2'>
          <BsGraphDown />
          Dashboard
        </button>
        <button className='w-full h-[40px] text-black text-[20px] font-bold flex items-center gap-2 p-2'>
          <FaRegBookmark />
          Bookings
        </button>
        <button className='w-full h-[40px] text-black text-[20px] font-bold flex items-center gap-2 p-2'>
          <MdOutlineSpeaker />
          Items
        </button>
        <button className='w-full h-[40px] text-black text-[20px] font-bold flex items-center gap-2 p-2'>
          <FaRegUser />
          Users
        </button>
      </div> 

      {/* Main Content Area */}
      <div className='w-full bg-red-400 p-4'>
        <h1 className="text-white text-2xl font-bold">Admin Dashboard</h1>
      </div>
    </div>
  );
}
