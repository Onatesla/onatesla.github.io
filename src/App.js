
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from './navigate/onScreen/home';
import Contact from './navigate/onScreen/contact';
import Photogrid from './navigate/onScreen/photogrid';
import Where from './navigate/onScreen/where';
import Social from './navigate/onScreen/social';
import BusinessCard from './navigate/onScreen/businessCard';
import Me from './navigate/onScreen/me';

const App = () => {
  return (
    
      <BrowserRouter>
      <Routes>
        <Route to exact path = "/" element = {<Home/>}/>
        <Route to path = "/contact" element = {<Contact/>}/>
        <Route to path = "/photogrid" element = {<Photogrid/>}/>
        <Route to path = "/where" element = {<Where/>}/>
        <Route to path = "/social" element = {<Social/>}/>
        <Route to path = "/businesscard" element = {<BusinessCard/>}/>
        <Route to path = "/me" element = {<Me/>}/>
      </Routes>
      </BrowserRouter>
  
  );
}

export default App;
