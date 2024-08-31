import React, { useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import { backendurl } from '../Service';
import {   ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Joinnow() {

   const appnavigate =useNavigate();
    
    const updateinput = (e) => {
        const { name, value } = e.target;
        setdata((a) => {
            return {
                ...a,
                [name]: value
            }
        })
    }

    const [insdata, setdata] = useState({
        fullname: "",
        email: "",
        phone: "",
        dob: "",
        gender: "",
        course: "",
    });

    const registerpage = async()=>{

        const {fullname,email,phone,dob,gender,course} = insdata;
        const mydata = await fetch(`${backendurl}/students`,{
            method: "POST",
            headers: {"content-type":"application/json"}, 
            body: JSON.stringify({
                fullname,email,phone,dob,gender,course
            })
        })
        const res = await mydata.json();
        console.log(res);
        if(res.status===255)
        {
            toast.success("thank you for contacting us");

           
            setTimeout(() => {
                appnavigate("/")
              }, 3000);

        }
        else if(res.status===409)
        {
            toast.warning("email allready used");

        }
        else if(res.status===450)
            {
                toast.warning("Name must be 3 digits long");

            }
            else if(res.status===500)
                {
                    toast.error( "invalid Email ");
    
                }
        

        
    }




    return (
     

        <form>
            <div className='container'>
           
                         <ToastContainer/>
            
                <div className='row justify-content-md-center'>
                    <div className='col-sm-8 p-3'>
                        <div className='container-fluid border p-5 bg-light shadow'>
                            <div className='row'>
                                <div className='col-12 text-center'>
                                <h1> <span className='carsoltext'>KINDLY FILL THIS FORM</span> </h1>
                                </div>
                                <div className='col-md-6 p-2 mt-2'>
                                    <label className="form-label">Full Name</label>
                                    <input type='text' className='form-control' placeholder='Full Name' name='fullname' value={insdata.fullname} onChange={updateinput} />
                                </div>
                                <div className='col-md-6 p-2 mt-2'>
                                    <label className="form-label">Email Id</label>
                                    <input type='email' className='form-control' placeholder='email' name='email'value={insdata.email} onChange={updateinput} />

                                </div>
                                <div className='col-md-6 p-2 mt-2'>
                                    <label className="form-label">Phone No</label>
                                    <input type='text' className='form-control' placeholder='phone' name='phone'value={insdata.phone} onChange={updateinput} />
                                </div>
                                <div className='col-md-6 p-2 mt-2'>
                                    <label className="form-label">DOB</label>
                                    <input type='date' className='form-control' name='dob'onChange={updateinput} value={insdata.dob}  />
                                </div>
                                <div className='col-md-6 p-2 mt-2'>
                                    <label className="form-label">Gender</label><br />
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" name="gender" value="male" onChange={updateinput} />
                                        <label className="form-check-label">Male</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" name="gender" value="female" onChange={updateinput}/>
                                        <label className="form-check-label">Female</label>
                                    </div>
                                </div>
                                <div className='col-md-6 p-2 mt-2'>
                                    <label className="form-label">Course</label>
                                    <select className='form-select' name='course' onChange={updateinput} value={insdata.course}>
                                        <option>Mern</option>
                                        <option>Mean</option>
                                        <option>java</option>
                                        <option>UI/UX</option>
                                    </select>
                                </div>
                               
                             

                                <div className='col-12 p-2 mt-2 text-center'>
                                    <input type='button' value="Registor Now" className='btn btn-success' onClick={registerpage}  />
                                    <Link to="/" className='btn btn-danger ms-3'>cancel</Link>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default Joinnow