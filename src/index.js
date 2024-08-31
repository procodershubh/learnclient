import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import './index.css';
import Navbar from './share/Navbar';
import Homepage from './dashboard/Component/Homepage';
import Aboutpage from './dashboard/Aboutpage';
import Professor from './dashboard/Professor';
import Placement from './dashboard/Placement';
import Blog from './dashboard/Blog';
import Course from './dashboard/Course';
import Contactus from './dashboard/Contactus';
import Joinnow from './dashboard/Joinnow';
import Whatsapp from './dashboard/Whatsapp';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
<BrowserRouter>
<Navbar/>
<Whatsapp/>

<Routes>  

  <Route path='' element={<Homepage/>}></Route>
  <Route path='about' element={<Aboutpage/>}/>
  <Route path='expert' element={<Professor/>}/>
  <Route path='placement' element={<Placement/>}/>
  <Route path='blog' element={<Blog/>}/>
  <Route path='course' element={<Course/>}/>
  <Route path='contact' element={<Contactus/>}/>
  <Route path='join' element={<Joinnow/>}/>



</Routes>

</BrowserRouter>
  </React.StrictMode>
);


