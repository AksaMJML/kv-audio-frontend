import { Link } from "react-router-dom";
import Header from "../../components/header";

export default function HomePage(){
    return( 
        <>
            <Header/>
            <div className="h-calc[100vh-100px] w-full bg-red-400"></div>
        </>
    )
}