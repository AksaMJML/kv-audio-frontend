import { Link } from "react-router-dom";

export default function ErrorNotFound(){
    return(
        <>
        <h1>$04 Error: page not found</h1>
        <Link to="/">Go back to home</Link>
        </>
    )
}