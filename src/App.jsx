import { Typography } from '@mui/material'
import './App.css'
import Button from './components/Common/Button'
import Header from './components/Layout/Header'
import Footer from './components/Layout/Footer'
import Layout from './components/Layout/Layout'
import Showcase from './components/Showcase/Showcase'
import About from './components/About/About'
import Product from './components/Product/Product'
import Contact from './components/Contact/Contact'
import Partner from './components/Partner/Partner'
import PopularProduct from './components/PopularProducts/PopularProduct'


function App() {

  return (
    <>
    <Header />
    <Showcase />
    <PopularProduct />
    <About />
    <Product />
    <Contact />
    <Partner />
    <Footer/>

    </>
  )
}

export default App
