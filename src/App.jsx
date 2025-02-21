import './App.css'
import ProductCard from './components/productCard' ;
import AdminPage from './pages/admin/adminPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/home/homePage';
import Testing from './components/testing';
import LoginPage from './pages/login/login';

function App() {

  return (
    <BrowserRouter>
      <Routes path="/">
        <Route path='/testing' element={<Testing/>}></Route>
        <Route path='/login' element={<LoginPage/>}></Route>
        <Route path='/admin/*' element={<AdminPage/>}/>
        <Route path='/*' element={<HomePage/>}></Route>
      </Routes>
    </BrowserRouter>
    );  
}

export default App;
