export default function AddItemPage(){
    return(
        <div className="w-full h-full flex flex-col items-center">
            <h1>add items</h1>
            <div className="w-[400px] border flex flex-col items-center">
                <input type="text" placeholder="Product Key" ></input>
                <input type="text" placeholder="Product Name" ></input>
                <input type="text" placeholder="Product Price" ></input>
                <button>Add</button>
            </div>
        </div>
    )
}