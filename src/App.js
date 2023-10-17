import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import OurStore from './pages/OurStore';
import Blog from './pages/Blog';
import CompareProduct from './pages/CompareProduct';
import Wishlist from './pages/Wishlist';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './pages/ResetPassword';
import SingleBlog from './pages/SingleBlog';
import PrivacyPolicy from './pages/PrivacyPolicy';
import ShippingPolicy from './pages/ShippingPolicy';
import RefundPolicy from './pages/RefundPolicy';
import TermAndCondition from './pages/TermAndCondition';
import SingleProduct from './pages/SingleProduct';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';


function App() {
  return (
   <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />}/>
          <Route path='about' element={<About />}/>
          <Route path='contact' element={<Contact />}/>
          <Route path='product' element={<OurStore />}/>
          <Route path='product/:id' element={<SingleProduct />}/>
          <Route path='blogs' element={<Blog />}/>
          <Route path='blog/:id' element={<SingleBlog />}/>
          <Route path='compare-product' element={<CompareProduct />}/>
          <Route path='wishlist' element={<Wishlist />}/>
          <Route path='login' element={<Login />}/>
          <Route path='forgot-password' element={<ForgotPassword />}/>
          <Route path='signup' element={<SignUp />}/>
          <Route path='reset-password' element={<ResetPassword />}/>
          <Route path='shipping-policy' element={<ShippingPolicy />}/>
          <Route path='refund-policy' element={<RefundPolicy />}/>
          <Route path='privacy-policy' element={<PrivacyPolicy />}/>
          <Route path='terms-conditions' element={<TermAndCondition />}/>
          <Route path='cart' element={<Cart />}/>
          <Route path='checkout' element={<Checkout />}/>


        </Route>
      </Routes>
    </BrowserRouter>
   </>
  );
}

export default App;
