import './App.css'
import ProductCard from './components/productCard' ;
import AdminPage from './components/adminPage';
import { Route } from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>
    <div>
      <Routes path="/">
        <Route path='admin' element={<AdminPage/>}/>
        <Route path='/' element={<h1>Home</h1>}></Route>
      </Routes>
     </div>
     </BrowserRouter> 
  ); 
}

export default App;
