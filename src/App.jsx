import './App.css'
import ProductCard from './components/productCard' 
import { BsGraphDown } from "react-icons/bs";
import { FaRegBookmark, FaRegUser } from "react-icons/fa";
import { MdOutlineSpeaker } from "react-icons/md";
import AdminPage from './components/adminPage';
import { BrowserRouter } from 'react-router-dom';


function App() {

  return (
    <BrowserRouter>
    <div>
      <AdminPage/>
     </div>
     </BrowserRouter> 
  );
}

export default App;
