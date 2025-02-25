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

import { CiCirclePlus } from "react-icons/ci";
import { Link } from "react-router-dom";

export default function AdminProductsPage(){
    const [products, setProducts] = useState(sampleArr);
    return(
       <div className="w-full h-full bg-red-200 relative">
        <table>
            <thead>
                <th>Key</th>
                <th>Name</th>
                <th>Price</th>
                <th>Category</th>
                <th>Dimension</th>
                <th>Availability</th>
            </thead>
            <tbody>
                <tr>
                    <td>AUDIO001</td>
                    <td>Wireless Earbuds</td>
                    <td>$79.99</td>
                    <td>audio</td>
                    <td>2x2x1 cm</td>
                    <td>Yes</td>
                </tr>
                <tr>
                    <td>AUDIO002</td>
                    <td>Studio Headphones</td>
                    <td>$199.99</td>
                    <td>audio</td>
                    <td>20x18x10 cm</td>
                    <td>Yes</td>
                </tr>
                <tr>
                    <td>LIGHT001</td>
                    <td>Desk Lamp</td>
                    <td>$39.99</td>
                    <td>lights</td>
                    <td>30x10x10 cm</td>
                    <td>Yes</td>
                </tr>
                <tr>
                    <td>LIGHT002</td>
                    <td>Ceiling Light</td>
                    <td>$89.99</td>
                    <td>lights</td>
                    <td>40x40x5 cm</td>
                    <td>No</td>
                </tr>
                <tr>
                    <td>SPEAKER001</td>
                    <td>Portable Bluetooth Speaker</td>
                    <td>$59.99</td>
                    <td>speakers</td>
                    <td>15x10x10 cm</td>
                    <td>Yes</td>
                </tr>
                <tr>
                    <td>SPEAKER002</td>
                    <td>Soundbar</td>
                    <td>$149.99</td>
                    <td>speakers</td>
                    <td>90x10x8 cm</td>
                    <td>Yes</td>
                </tr>
            </tbody>
        </table>
        <Link to="/admin/products/add">
        <CiCirclePlus className="text-[50px] absolute right-2 bottom-2 "  />
        </Link>
        <h1>admin Products pages</h1>
       </div>
    )
}