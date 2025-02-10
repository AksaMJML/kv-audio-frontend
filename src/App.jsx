import './App.css'
import ProductCard from './components/productCard' 

function App() {

  return (
    <div>
    <>
      <ProductCard 
      name="Audio Setup" 
      price = "3500" 
      description="hgfdhhhhaydggggggggggdsssssss" 
      image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOt24ovFYohm69e4a1D5ZvV2V93_nBRQvYbQ&s"/>
    </>

    <ProductCard 
    name="portable sound card kit"
    price="14000"
    description="Ships from overseas Products shipped by International sellers are delivered at no additional cost"
    image="https://img.drz.lazcdn.com/static/lk/p/01145fb0649587205c280deb767ac701.png_400x400q75.png_.webp">
    </ProductCard>
    </div>
  )
}

export default App
