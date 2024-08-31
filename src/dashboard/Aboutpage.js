import React from 'react';
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';


function Aboutpage() {


    const navigate =useNavigate();

    const routeChange =() =>{
        navigate('/join')
    }




  return (
    <div className='container-fluid ' style={{marginTop:'60px'}}>
        <div className='row'>
            <div className='col-md-12 text-center'>
            <h1>WELCOME TO <span className='carsoltext'>eLEARNING</span> PLATFORM </h1>
            <p style={{color:'gray',fontSize:'20px'}}>Best Plateform for eLEARNING</p>
            </div>
        </div>
        <div className='row'>
            <div className='col-md-6'>
                <img className='w-100' src='pic/university.jpg' alt='college'/>

            </div>
            <div className='col-md-6'>  
                <p className='text-body-secondary'>An electronic learning platform is an integrated
                     set of interactive online services that provide trainers, learners, and others 
                     involved in education with information, tools, and resources to support</p>
                <p className='font-monospace'> <FaRegArrowAltCircleRight/> Organises lectures, seminars and lab work.</p>
                <br/>
                <p className='font-monospace'> <FaRegArrowAltCircleRight/> Provides a wide range of resources for teaching.</p>
                <br/>
                <p className='font-monospace'> <FaRegArrowAltCircleRight/> Provides administrative services and centrally managed student services.</p>
                <br/>
                <p className='font-monospace'> <FaRegArrowAltCircleRight/> Provides 100% Placement Assistance in Top IT Companies.</p>
                <br/>
                <input type='button' className='btn joinbtn ' value='Join Now' onClick={routeChange}/>


            </div>
        </div>
    </div>
  )
}

export default Aboutpage