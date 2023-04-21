import  "../src/css/style.css"
import React, {useState} from "react";
import Header from './Header/Header';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from 'react-router-dom';
import New from './Page/New/New';
import Catalog from './Page/Catalog/Catalog';
import AboutUs from './Page/AboutUs/AboutUs';
import Refund from './Page/Refund/Refund';
import Contact from './Page/Contact/Contact';
import Footer from './Footer/Footer';
import Delivery from "./Page/Delivery/Delivery";
import PersonalAccount from "./Page/PersonalAccount/PersonalAccount";


function App() {
  const [load, setLoad] = useState(false);
  
  return (
    <div className="App">
        <Router>
          <Header load = {load} />
            <Routes>
                <Route index path="/Page/New/New.jsx" element={<New load={load} setLoad={setLoad} />}/>
                <Route path="/Page/Catalog/Catalog" element={<Catalog/>}/>
                <Route path="/Page/AboutUs/AboutUs" element={<AboutUs/>}/>
                <Route path="/Page/Refund/Refund" element={<Refund/>}/>
                <Route path="/Page/Delivery/Delivery" element={<Delivery/>}/>
                <Route path="/Page/Contact/Contact" element={<Contact/>}/>
                <Route path="/Page/PesonalAccount/*" element={<PersonalAccount/>}/> 
            </Routes>
            <Footer/>
        </Router>
    </div>
  );
}

export default App;
