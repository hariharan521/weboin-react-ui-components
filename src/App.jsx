import { useState } from 'react'

import './App.css'
import ContactForm from './ContactFrom'
import PortfolioCard from './Portfolio/PortfolioCard'
import DigitalMarketing from './components/DigitalMarketing'
import Servicessection from './components/Servicessection'




function App() {
  
  return (
   <>
   <DigitalMarketing/>
   <Servicessection/>
  <PortfolioCard/>
  <ContactForm/>
   </>
  )
}


export default App