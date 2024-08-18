import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar';
import Slideshow from './components/Slideshow';
import OurProjects  from './components/OurProjects';
import People from './components/People'
import Media from './components/Media'
import Contact from './components/ContactUs'
import ContactUs from './components/ContactUs';
import Strengths from './components/Strengths';
import Services from './components/Services';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <Slideshow/>
    <Services/>
    <OurProjects/>
    <Strengths/>
    <People/>
    <Media/>
    <ContactUs/>
   
    {/* <Slideshow/>
    <Slideshow/> */}
    </>
  )
}

export default App
