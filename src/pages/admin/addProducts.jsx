import axios from "axios";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

export default function AddProductPage() {
    const [productKey, setProductKey] = useState("");
    const [productName, setProductName] = useState("");
    const [productPrice, setProductPrice] = useState(0);
    const [productCategory, setProductCategory] = useState("lights");
    const [productDimension, setProductDimension] = useState("");
    const [productDescription, setProductDescription] = useState("");

    async function handleAddProduct() {
        console.log(productKey, productName, productPrice, productCategory, productDimension, productDescription);
    
        const token = localStorage.getItem("token"); // Fix the method name
    
        if (token) {
            try {
                const result = await axios.post("http://localhost:3000/api/products", { // Fix the URL
                    key: productKey,
                    name: productName,
                    price: productPrice,
                    category: productCategory,
                    dimensions: productDimension,
                    description: productDescription
                }, {
                    headers: {
                        Authorization: "Bearer " + token // Add space after 'Bearer'
                    }
                });
                toast.success("Product added successfully!");
            } catch (error) {
                toast.error("Failed to add product: " + error.response?.data?.message || error.message);
            }
        } else {
            toast.error("You are not authorized to perform this action"); // Fix typo
        }
    }
    
    return (
        <div className="w-full h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-600 to-indigo-600 p-5">
            <Toaster />
            <h1 className="text-3xl font-bold text-white mb-6">Add New Product</h1>
            <div className="w-full max-w-[600px] p-6 bg-white rounded-2xl shadow-2xl flex flex-col items-center space-y-4">
                <input
                    type="text"
                    placeholder="Product Key"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    onChange={(e) => setProductKey(e.target.value)}
                    value={productKey}
                />
                <input
                    type="text"
                    placeholder="Product Name"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    onChange={(e) => setProductName(e.target.value)}
                    value={productName}
                />
                <input
                    type="number"
                    placeholder="Product Price"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    onChange={(e) => setProductPrice(e.target.value)}
                    value={productPrice}
                />
                <select
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    onChange={(e) => setProductCategory(e.target.value)}
                    value={productCategory}
                >
                    <option value="audio">Mini</option>
                    <option value="lights">Large</option>
                    <option value="speakers">Max</option>
                </select>
                <input
                    type="text"
                    placeholder="Product Dimension"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    onChange={(e) => setProductDimension(e.target.value)}
                    value={productDimension}
                />
                <textarea
                    placeholder="Product Description"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    onChange={(e) => setProductDescription(e.target.value)}
                    value={productDescription}
                    rows="3"
                ></textarea>
                <div className="w-full flex space-x-4">
                    <button onClick={handleAddProduct}
                        className="w-1/2 py-3 bg-indigo-500  text-white font-bold rounded-lg hover:bg-indigo-600 transition duration-300"
                    >
                        Add Product
                    </button>
                    <button
                        className="w-1/2 py-3 bg-red-500 text-white font-bold rounded-lg hover:bg-red-600 transition duration-300"
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
}
