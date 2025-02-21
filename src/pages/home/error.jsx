import { Link } from "react-router-dom";

export default function ErrorNotFound(){
    return(
        <>
        <h1>404 Error: page not found</h1>
        <Link className="bg-blue-400 p-1" to="/">Go back to home</Link>
        </>
    )
}