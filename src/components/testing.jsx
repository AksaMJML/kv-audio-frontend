import { useState } from "react";

export default function Testing(){
    const [count,setCount] = useState(0)
    // coconut, banana , apple , other
    const[itemName,setItemName] = useState("Cococnut")
        return(
            <div className="w-full bg-red-300 h-screen flex flex-col justify-center items-center">
                <h1 className="text-9xl">{count} {itemName}s</h1>
                
                <button className="w-[100px] h-[30px] bg-black text-white rounded-lg" onClick={()=>{
                   const newCount = count+1;
                   setCount(newCount)
                }}>
                    Count
                </button>
                <div className="p-4 flex justify-evenly items-center w-full">
                    <button className="w-[100px] h-[30px] bg-black text-white rounded-lg" onClick={()=>{
                        setItemName("Coconut")
                    }}>Coconut</button>
                   
                    <button className="w-[100px] h-[30px] bg-black text-white rounded-lg"onClick={()=>{
                        setItemName("Banana")
                    }}>Banana</button>
                    <button className="w-[100px] h-[30px] bg-black text-white rounded-lg" onClick={()=>{
                        setItemName("Apple")
                    }}>Apple</button>
                    <button className="w-[100px] h-[30px] bg-black text-white rounded-lg" onClick={()=>{
                        setItemName("Other")
                    }}>Other</button>
                </div>
            </div>
        )
    }