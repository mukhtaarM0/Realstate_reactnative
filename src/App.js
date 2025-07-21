import "./App.css";
import { Route, Routes } from "react-router-dom";
import About from "./Components/About";
import RegistrationForm from "./Components/RegistrationForm";
import Contact from "./Components/Contact";
import Login from "./Components/Login";
import Home from "./Components/Home";
import Cardinfo from "./Components/Cardinfo";
import Guryaha from "./Components/Guryaha";
import PropertyPage1 from "./Components/PropertyPage1";
import PropertyPage2 from "./Components/PropertyPage2";
import PropertyPage3 from "./Components/PropertyPage3";
import PropertyPage5 from "./Components/PropertyPage5";
import PropertyPage6 from "./Components/PropertyPage6";
import PropertyPage from "./Components/PropertyPage";
import ReservationCard from "./Components/ReservationCard";
import Dhulkaiibkaah from "./Components/Dhulkaiibkaah";
import ProCard from "./Components/ProCard";
import ProCard1 from "./Components/ProCard1";
import ProCard2 from "./Components/ProCard2";
import ProCard3 from "./Components/ProCard3";
import ProCard4 from "./Components/ProCard4";
import ProCard5 from "./Components/ProCard5";
import Footer from "./Components/Footer";
import ReservationCard2 from "./Components/ReservationCard2";
import ReservationCard3 from "./Components/ReservationCard3";
import NewArrivalsPage from "./Components/NewArrivalsPage";
import Guryahaiibkaah from "./Components/Guryahaiibkaah";



function App() {
  return (
    <div className="App">
  
      <Routes>
        <Route path="/" element={<Login />} /> {/* Default route */}
        <Route path="/Login" element={<Login />}></Route>
        <Route path="/Home" element={<Home />}></Route>
        <Route path="/About" element={<About />}></Route>
        <Route path="/Contact" element={<Contact />}></Route>
        <Route path="/RegistrationForm" element={<RegistrationForm />}></Route>
        <Route path="/Cardinfo" element={<Cardinfo />}></Route>
        <Route path="/Guryaha" element={<Guryaha />}></Route>
        <Route path="/Dhulkaiibkaah" element={<Dhulkaiibkaah />}></Route>
        <Route path="/PropertyPage" element={<PropertyPage />} />
        <Route path="/PropertyPage1" element={<PropertyPage1 />} />
        <Route path="/PropertyPage2" element={<PropertyPage2 />} />
        <Route path="/PropertyPage3" element={<PropertyPage3 />} />
        <Route path="/PropertyPage5" element={<PropertyPage5 />} />
        <Route path="/PropertyPage6" element={<PropertyPage6 />} />
        <Route path="/ReservationCard" element={<ReservationCard />} />
        <Route path="/ProCard" element={<ProCard />} />
        <Route path="/ProCard1" element={<ProCard1 />} />
        <Route path="/ProCard2" element={<ProCard2 />} />
        <Route path="/ProCard3" element={<ProCard3 />} />
        <Route path="/ProCard4" element={<ProCard4 />} />
        <Route path="/ProCard5" element={<ProCard5 />} />
        <Route path="/Footer" element={<Footer />} />
        <Route path="/ReservationCard2" element={<ReservationCard2 />} />
        <Route path="/ReservationCard3" element={<ReservationCard3 />} />
        <Route path="/NewArrivalsPage" element={<NewArrivalsPage />} />
        <Route path="/Guryahaiibkaah" element={<Guryahaiibkaah />} />
        
       
       
        
      </Routes>
    </div>
  );
}

export default App;
