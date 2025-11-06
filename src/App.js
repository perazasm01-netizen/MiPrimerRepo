import Home from "./Screens/home";
import AboutUs from "./Screens/aboutus";
import ContactUs from "./Screens/ContactUs"
import NavBar from "./Components/navbar"
import { Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer"
import Information from "./Screens/Information"
import Error from "./Screens/Error"


function App() {
  return (
    <div className="App">
      
      <NavBar/>
      <Routes>
        <Route  path="/" element={<><Information/></>} />
        <Route  path="/Home" element={<><Home/> <Footer Show="True"/></>} />
        <Route  path="/AboutUs" element={<><AboutUs/> <Footer Show="True"/></>} />
        <Route  path="/ContactUs" element={<ContactUs/>} />
        <Route path="*" element={<Error/>}/>
      </Routes>
    </div>
  );
}

export default App;
