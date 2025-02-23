import { Link, Route, Routes } from "react-router-dom";
import Header from "../../components/header";
import Contact from "./contact";
import Gallery from "./gallery";
import Home from "./home";
import ErrorNotFound from "./error";
import Products from "./product";

export default function HomePage(){
    return( 
        <>
            <Header/>
            <div className="h-[calc(100vh-100px)] w-full bg-red-900">
                <Routes path="/*">
                    <Route path="/" element={<Home/>}></Route>
                    <Route path="/contact" element={<Contact/>}></Route>
                    <Route path="/gallery" element={<Gallery/>}></Route>
                    <Route path="/products" element={<Products/>}></Route>
                    <Route path="/*" element={<ErrorNotFound/>}></Route>
                </Routes>
            </div>
        </>
    )
}