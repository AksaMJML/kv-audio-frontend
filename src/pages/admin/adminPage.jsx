import { BsGraphDown } from "react-icons/bs";
import { FaRegBookmark, FaRegUser } from "react-icons/fa";
import { MdOutlineSpeaker } from "react-icons/md";
import { Link, Route, Routes } from "react-router-dom";
import AdminItemsPage from "./adminItems";;
import AddItemPage from "./addItem";

export default function AdminPage() {
  return ( // Added 'return' here
    <div className='w-full h-screen flex'>
      {/* Sidebar */}
      <div className='w-[200px] h-full bg-green-200 p-4'>
        <Link to="/admin/dashboard" className='w-full h-[40px] text-black text-[20px] font-bold flex items-center gap-2 p-2'>
          <BsGraphDown />
          Dashboard
        </Link>
        <Link to="/admin/bookings" className='w-full h-[40px] text-black text-[20px] font-bold flex items-center gap-2 p-2'>
          <FaRegBookmark />
          Bookings
        </Link>
        <Link to="/admin/items" className='w-full h-[40px] text-black text-[20px] font-bold flex items-center gap-2 p-2'>
          <MdOutlineSpeaker />
          Items
        </Link>
        <Link to="/admin/users" className='w-full h-[40px] text-black text-[20px] font-bold flex items-center gap-2 p-2'>
          <FaRegUser />
          Users
        </Link>
      </div> 

      {/* Main Content Area */}
      <div className='w-[calc(100vw-200px)]'>
        <Routes path="/*"> 
          <Route path="/dashboard" element={<h1>Dashboard</h1>}></Route>
          <Route path="/bookings" element={<h1>Booking</h1>}></Route>
          <Route path="/items" element={<AdminItemsPage/>}></Route>
          <Route path="/items/add" element={<AddItemPage/>}></Route>
          <Route path="/users" element={<h1>Users</h1>}></Route>
          

        </Routes>
        <h1 className="text-white text-2xl font-bold">Admin Dashboard</h1>
      </div>
    </div>
  );
}
