import { useState } from "react"

export default function LoginPage(){
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    return(
        <div className=" w-full h-screen flex justify-center items-center">
        <div className="w-[400px] h-[400px]"></div>
        </div>
    )
}