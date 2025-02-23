import { Link } from "react-router-dom";

export default function Header(){
    return(
        <header className="w-full h-[100px] shadow-xl flex justify-center items-center relative">
            <img src="logo.png" alt="logo" className="w-[100px] h-[100px] border-[3px] object-cover absolute left-2 rounded-full"></img>
                <Link to="/" className="text-[25px] font-bold m-1">Home</Link>
                <Link to="/contact" className="text-[25px] font-bold m-1">Contact</Link>
                <Link to="/gallery" className="text-[25px] font-bold m-1">Gallery</Link>
                <Link to="/products" className="text-[25px] font-bold m-1">Products</Link>
            </header>
    )
}