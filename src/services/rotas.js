import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Fotos from '../components/Fotos';
import Home from '../components/Home';
import Projects from '../components/Projects';
import Sobre from '../components/Sobre';


export default function Rotas(){

  return(
    <Router>
     <Routes>
     <Route path="/" element={<Home/>}/>
     <Route path="/Fotos" element={<Fotos/>}/>
     <Route path="/Projects" element={<Projects/>}/> 
     <Route path="/Sobre" element={<Sobre/>}/>
    </Routes> 
    </Router>
  )
}