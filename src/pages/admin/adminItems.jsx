import { CiCirclePlus } from "react-icons/ci";
import { Link } from "react-router-dom";
export default function AdminItemsPage(){
    return(
       <div className="w-full h-full bg-red-200 relative">
        <Link>
        <CiCirclePlus className="text-[50px] absolute right-2 bottom-2 "  />
        </Link>
        <h1>admin Item pages</h1>
       </div>
    )
}