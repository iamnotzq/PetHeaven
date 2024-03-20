import "./App.css"
import Navbar from "./common/Navbar/Navbar.js"
import Home from "./components/pages/Home.js"
import About from "./components/About/About.js"
import Adopt from "./components/Adopt/Home.js"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import SinglePage from "./SinglePage/SinglePage.js"



import Release from "./components/Release/Release.js"
import Contact from "./components/Contact/Contact.js"
import Footer from "./common/footer/Footer.js"
import Login from "./components/login/Login.js"
import Register from "./components/login/Register.js"


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/adopt' element={<Adopt/>} />
          <Route path='/singlepage/:id' element={<SinglePage/>} />
          <Route path='/release' element={<Release/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/sign-in' element={<Login/>} />
          <Route path='/Register' element={<Register/>} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App