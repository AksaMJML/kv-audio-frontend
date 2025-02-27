const sampleArr = [
    {
        key: "AUDIO001",
        name: "Wireless Earbuds",
        price: 79.99,
        image: ["https://example.com/earbuds.jpg"],
        category: "audio",
        dimensions: "2x2x1 cm",
        description: "Noise-canceling wireless earbuds with touch controls.",
        isAvailable: true
    },
    {
        key: "AUDIO002",
        name: "Studio Headphones",
        price: 199.99,
        image: ["https://example.com/headphones.jpg"],
        category: "audio",
        dimensions: "20x18x10 cm",
        description: "Over-ear studio headphones with hi-fi sound quality.",
        isAvailable: true
    },

    // Lighting Products
    {
        key: "LIGHT001",
        name: "Desk Lamp",
        price: 39.99,
        image: ["https://example.com/desk-lamp.jpg"],
        category: "lights",
        dimensions: "30x10x10 cm",
        description: "Adjustable LED desk lamp with USB charging port.",
        isAvailable: true
    },
    {
        key: "LIGHT002",
        name: "Ceiling Light",
        price: 89.99,
        image: ["https://example.com/ceiling-light.jpg"],
        category: "lights",
        dimensions: "40x40x5 cm",
        description: "Smart ceiling light with customizable brightness and colors.",
        isAvailable: false
    },

    // Speaker Systems
    {
        key: "SPEAKER001",
        name: "Portable Bluetooth Speaker",
        price: 59.99,
        image: ["https://example.com/portable-speaker.jpg"],
        category: "speakers",
        dimensions: "15x10x10 cm",
        description: "Waterproof Bluetooth speaker with 12-hour battery life.",
        isAvailable: true
    },
    {
        key: "SPEAKER002",
        name: "Soundbar",
        price: 149.99,
        image: ["https://example.com/soundbar.jpg"],
        category: "speakers",
        dimensions: "90x10x8 cm",
        description: "Slim soundbar with surround sound and subwoofer.",
        isAvailable: true
    }
];

import axios from "axios";
import { useState } from "react";
import { CiCirclePlus } from "react-icons/ci";
import { Link } from "react-router-dom";

export default function AdminProductsPage(){
    const [products, setProducts] = useState(sampleArr);

    const token = localStorage.getItem("token");
    axios.get("http://localhost:3000/api/products", {headers:{"authorization" : `Bearer ${token}`}}).then((res)=>{
        console.log(res.data)
    }).catch((err)=>{
        console.log(err)
    })

    axios.get("api/products");

    return(
       <div className="w-full h-full bg-red-200 relative">
        <table>
            <thead>
                <th>Key</th>
                <th>Name</th>
                <th>Price</th>
                <th>Category</th>
                <th>Dimension</th>
                <th>Description</th>
                <th>Availability</th>
            </thead>
            <tbody>
                {
                    products.map((product)=>{
                        return(
                        <tr key={product.key}>
                            <td>{product.key}</td>
                            <td>{product.name}</td>
                            <td>{product.price}</td>
                            <td>{product.category}</td>
                            <td>{product.dimensions}</td>
                            <td>{product.description}</td>
                            <td>{product.isAvailable ? "Available" : "Not Aavailable"}</td>
                        </tr>
                        )
                    })
               
                }
            </tbody>
        </table>
        <Link to="/admin/products/add">
        <CiCirclePlus className="text-[50px] absolute right-2 bottom-2 "  />
        </Link>
        
       </div>
    )
}