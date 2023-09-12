
import Coins from "./Components/Coins"
import Navbar from "./Components/Navbar"
import Home from "./Components/Home"
import Detail from './Components/Detail'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import About from "./Components/About"
import Price from "./Components/Price"

const App = () => {

  return (
         <div className="w-full h-[100%] bg-teal-600">
         <Router>
          <Navbar />
          <Routes>
            <Route path="/a" element={<Coins />} />
            <Route path="/" element={<Home />} />
            <Route path="/a/:id" element={<Detail />} />
            <Route path="/about" element={<About />} />
            <Route path="/pr" element={<Price />} />




          </Routes>
         </Router>
         </div>
  )
}

export default App
