
import { BrowserRouter, Route,  Routes } from 'react-router-dom'
import './App.css'
import 'boxicons/css/boxicons.min.css'
import 'react-toastify/dist/ReactToastify.css';
import RegisterContext from './Project/RegisterAnsLogin/RegisterContext'
import HomePage from './Project/Home/HomePage'
import Registration from './Project/RegisterAnsLogin/Registration'
import Login from './Project/RegisterAnsLogin/Login'
import ProductContext from './Project/Home/ProductContext'
import CartProduct from './Project/Home/CartProduct';
import OrdersList from './Project/Home/OrdersList';

function App() {


  return (
    <>
      
      <RegisterContext>
        <ProductContext>
       <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage/>}></Route>
          <Route path='/register' element={<Registration/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/cartproduct' element={<CartProduct/>}></Route>
          <Route path='/orderlist' element={<OrdersList/>}></Route>
        </Routes>
        </BrowserRouter>
        </ProductContext>
      </RegisterContext>
      
    </>
  )
}

export default App
