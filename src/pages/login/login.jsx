import axios from "axios";
import "./login.css";
import { useState } from "react"

export default function LoginPage(){
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    // function login(){
    //     console.log(email,password)
    // }

    function handleOnSubmit(e){
        e.preventDefault();
        console.log(email,password);

        axios.post("http://localhost:3000/api/users/login",{email:email, password : password}     
        ).then((res)=>{
            console.log(res)
        }).catct((err)=>{
            console.log(err)
        })
    }

    return(
        <div className="bg-picture w-full h-screen flex justify-center items-center">
            <form onSubmit={handleOnSubmit}>
        <div className="w-[400px] h-[400px] backdrop-blur-xl rounded-2xl flex flex-col justify-center items-center relative">
            <img src="logo2.png" alt="logo" className="w-[100px] h-[100px] object-cover top-1"/>
            <input type="email" placeholder="Email" className="w-[300px] h-[50px] bg-transparent border-b-2 border-white text-white text-[15px] outline-none" value={email} onChange={(e)=>{
                setEmail(e.target.value)
            }} >
            
            </input>
            <input type="password" placeholder="Password" className="w-[300px] h-[50px] bg-transparent border-b-2 border-white text-white text-[15px] outline-none" value={password} onChange={(e)=>{
                setPassword(e.target.value)
            }}></input>
            <button  className="w-[200px] h-[50px] bg-[#efac38] text-[25px] text-white rounded-lg my-5" >Login
            </button>

        </div>
        </form>
        </div>


         // <div className="bg-picture w-full h-screen flex justify-center items-center">
        // <div className="w-[400px] h-[400px] backdrop-blur-xl rounded-2xl flex flex-col justify-center items-center relative">
        //     <img src="logo2.png" alt="logo" className="w-[100px] h-[100px] object-cover top-1"/>
        //     <input type="email" placeholder="Email" className="w-[300px] h-[50px] bg-transparent border-b-2 border-white text-white text-[15px] outline-none" value={email} onChange={(e)=>{
        //         setEmail(e.target.value)
        //     }} >
            
        //     </input>
        //     <input type="password" placeholder="Password" className="w-[300px] h-[50px] bg-transparent border-b-2 border-white text-white text-[15px] outline-none" value={password} onChange={(e)=>{
        //         setPassword(e.target.value)
        //     }}></input>
        //     <button  className="w-[200px] h-[50px] bg-[#efac38] text-[25px] text-white rounded-lg my-5" onClick={login}>Login
        //     </button>

        // </div>
        // </div>
    )
}