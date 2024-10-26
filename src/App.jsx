
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
import AdminPage from './Project/AdminComponent/AdminPage';
import AdminContext from './Project/AdminComponent/AdminContext';

function App() {


  return (
    <>
      <AdminContext>
      <RegisterContext>
        <ProductContext>
       <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage/>}></Route>
          <Route path='/register' element={<Registration/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/cartproduct' element={<CartProduct/>}></Route>
          <Route path='/orderlist' element={<OrdersList/>}></Route>
          <Route path='/admin' element={<AdminPage/>}>
           <Route></Route>
          </Route>
        </Routes>
        </BrowserRouter>
        </ProductContext>
      </RegisterContext>
      </AdminContext>
      
    </>
  )
}

export default App
