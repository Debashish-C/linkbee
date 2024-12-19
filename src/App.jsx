
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home"
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Service from "./components/Services/Service";
import Login from "./components/Login/Login";
import SignUp from "./components/Signup/SignUp";
import Navbar from "./components/NavBar/Navbar";
import Work from "./components/Working/Work";

function App() {
  

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar/>}>
          <Route path="" element={<Home/>}/>
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="services" element={<Service/>} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="work" element={<Work />} />
          
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
