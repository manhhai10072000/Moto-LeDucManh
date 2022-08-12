
import './App.css';
import './App2.css';
import { useState } from 'react';
import { Routes,Route } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/header';
import Home from './components/Home';
import About from './components/About';
import Detail from './components/Detail';
import Contact from './components/Contact';
import Carousel from './components/Carousel';
import Product from './components/Product';
import Search from './components/Search';
import ShoppingCart from './components/ShoppingCart';
import Blog from './components/Blog';



function App() {
  const [search,setSearch] = useState('')
  const handleParam=(value)=>{
    setSearch(value)
  }
  return (
    <>
    <Header handleSearch={handleParam}></Header>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/detail' element={<Detail/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/product' element={<Product/>}/>
      <Route path='/search' element={<Search searchParam={search}/>}/>
      <Route path='/card' element={<ShoppingCart/>}/>
      <Route path='/blog' element={<Blog/>}/>
    </Routes>
    <Footer></Footer>
    </>
  );
}

export default App;
