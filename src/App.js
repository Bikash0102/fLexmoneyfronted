import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Registartion from './components/Registration';
import Paymentdone from './components/Paymentdone';

import './App.css';


function App() {
  return (
    <div className="App">
       <Router>

<Routes>

<Route path="/" element={<Registartion/>}/>
<Route path="/done" element={<Paymentdone/>}/>


</Routes>

</Router>
    </div>
  );
}

export default App;
