import React from 'react';
import { FaWhatsapp } from "react-icons/fa6";
import { Link } from 'react-router-dom';


function Whatsapp() {
  return (
  <Link  className='position-fixed bottom-0 end-0 whatsapp' to="https://api.whatsapp.com/send/?phone=+91-8409285776&text=Hi%21&type=phone_number&app_absent=0"> <FaWhatsapp/> </Link>
  )
}

export default Whatsapp