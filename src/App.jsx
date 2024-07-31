import React from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Restaurant from './Components/Restaurants/Restaurant';
import Home from './Components/Home/Home';
import Quote from './Components/Quotes/Quote';
import NavSection from './Components/Nav/Nav';
import Foods from './Components/Foods/Foods';
import Contact from './Components/Contact/Contact';
import FoodDetails from './Components/Foods/FoodDetails';
import Footer from './Components/Footer/footer';
import logoIpsum from './assets/logoipsum.svg'

function App() {
 

  return (
    <>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <BrowserRouter>
    <NavSection />
    <Routes>
       <Route path='/' element={<Home />}/>
       <Route path='/Quote' element={<Quote />}/>
       <Route path='/Restaurant' element={<Restaurant />}/>
       <Route path='/Foods' element={<Foods />}/>
       <Route path='/Contact' element={<Contact />}/>
       <Route path='/food-detail/:id' element={<FoodDetails />}/>
    </Routes>
    </BrowserRouter>
    <Footer 
      logoIpsum={logoIpsum}
      footerPara="Lorem ipsum dolor sit amet consectetur adipisicing elite. incidunt consequuntur amet culpa cum itaque neque."
      list1="About" list2="Careers" list3="History" list4="Services" list5="Projects" list6="Blogs"
      icon1={<i class="fa-brands fa-facebook"></i>}
      icon2={<i class="fa-brands fa-twitter"></i>}
      icon3={<i class="fa-brands fa-instagram"></i>}
      icon4={<i class="fa-brands fa-github"></i>}
      icon5={<i class="fa-brands fa-linkedin"></i>}
      />
    </>
  )
}

export default App
