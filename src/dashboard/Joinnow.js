import React, { useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import { backendurl } from '../Service.js';
import {   ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Joinnow() {

   const appnavigate =useNavigate();

       const [isLoading, setIsLoading] = useState(false); 

         const [insdata, setdata] = useState({
        fullname: "",
        email: "",
        phone: "",
        dob: "",
        gender: "",
        course: "",
    });

    
    const updateinput = (e) => {
        const { name, value } = e.target;
        setdata((a) => {
            return {
                ...a,
                [name]: value
            }
        })
    }

  

   

    //  const registerpage = async () => {
    //     setIsLoading(true); // ✅ Start loading

    //     const { fullname, email, phone, dob, gender, course } = insdata;

    //     try {
    //         const mydata = await fetch(`${backendurl}/students`, {
    //             method: "POST",
    //             headers: { "content-type": "application/json" },
    //             body: JSON.stringify({ fullname, email, phone, dob, gender, course })
    //         });

    //         const res = await mydata.json();
    //         console.log(res);

    //         if (res.status === 255) {
    //             toast.success("Thank you for contacting us");
    //             setTimeout(() => {
    //                 appnavigate("/");
    //             }, 3000);
    //         } else if (res.status === 409) {
    //             toast.warning("Email already used");
    //         } else if (res.status === 450) {
    //             toast.warning("Name must be 3 digits long");
    //         } else if (res.status === 500) {
    //             toast.error("Invalid Email");
    //         }
    //     } catch (error) {
    //         toast.error("Something went wrong");
    //         console.error(error);
    //     } finally {
    //         setIsLoading(false); // ✅ End loading
    //     }
    // };


    const registerpage = async () => {
  setIsLoading(true);
  const { fullname, email, phone, dob, gender, course } = insdata;

  try {
    const mydata = await fetch(`${backendurl}/students`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ fullname, email, phone, dob, gender, course }),
    });

    const res = await mydata.json();
    console.log(res);

    if (res.status === 255) {
      toast.success("Thank you for contacting us");

      // ✅ Use Promise-based delay (safer for mobile browsers)
      await new Promise((resolve) => setTimeout(resolve, 2000));

      appnavigate("/"); // Navigate after delay safely
    } 
    else if (res.status === 409) {
      toast.warning("Email already used");
    } 
    else if (res.status === 450) {
      toast.warning("Name must be 3 digits long");
    } 
    else if (res.status === 500) {
      toast.error("Invalid Email");
    }
  } 
  catch (error) {
    toast.error("Something went wrong");
    console.error(error);
  } 
  finally {
    setIsLoading(false);
  }
};


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
                                    {/* <input type='button' value="Registor Now" className='btn btn-success' onClick={registerpage}  /> */}
                                   <input type='button' value={isLoading ? "Submitting please wait..." : "Register Now"} className='btn btn-success' onClick={registerpage} disabled={isLoading}/>
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