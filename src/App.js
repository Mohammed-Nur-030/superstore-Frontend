
// import logo from './logo.svg';
import './App.css';
import {Routes,Route} from 'react-router-dom'
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import OurStore from './pages/OurStore';
import Error from './pages/Error';
import SingleProduct from './pages/SingleProduct';
import Cart from './pages/Cart'
import Login from './pages/Login';
import Signup from './pages/Signup'
import Forgotpassword from './pages/Forgotpassword'
import BlogPage from './pages/BlogPage';
import Checkout from './pages/Checkout';
import ResetPassword from './pages/ResetPassword';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Layout></Layout>}>
        <Route index  element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/our-store' element={<OurStore/>}/>         
        <Route path='/singleproduct/:id' element={<SingleProduct/>}/>         
        <Route path='/cart' element={<Cart/>}/>         
    <Route path="/login" element={<Login/>}></Route>
    <Route path="/login/forgot-password" element={<Forgotpassword/>}></Route>
    <Route path="/signup" element={<Signup/>}></Route>
    <Route path="/forgot-password" element={<Forgotpassword/>}></Route>
    <Route path="/forgot-password/:id" element={<ResetPassword/>}></Route>
    <Route path="/blog/:id" element={<BlogPage/>}></Route>
    <Route path="/checkout" element={<Checkout/>}></Route>
    <Route path="*" element={<Error/>}></Route>
           
      </Route>
      
    </Routes>
    </>
  );
}

export default App;



















 


