import './App.css'
import ProductCard from './components/productCard' ;
import AdminPage from './components/adminPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>
      <Routes path="/">
        <Route path='admin' element={<AdminPage/>}/>
        <Route path='/' element={<h1>Home</h1>}></Route>
      </Routes>
    </BrowserRouter>
    );  
}

export default App;
