import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import MainHeading from './MainHeading'
import Home from './Home.jsx'
import Banner from './Banner.jsx'
import './App.css'
import { Category } from './Category'
import { Product } from './Product'
import { Contact } from './Contact'
function App() {

  return (
    <>
      <MainHeading/>
      <Home/>
      <Banner/>
      <Category/>
      <Product/>
      <Contact/>
    </>
  )
}

export default App
