import React, { useState } from 'react';
import axios from 'axios';
import { backendurl } from '../Service';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Contactus() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    mobile: ''
  });
  const [loading, setLoading] = useState(false);

  const updateInput = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const validateForm = () => {
    const { name, email, subject, message, mobile } = formData;
    if (!name || !email || !subject || !message || !mobile) {
      toast.error('All fields are required');
      return false;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      toast.error('Invalid email address');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);

    try {
      await axios.post(`${backendurl}/contact`, formData);
      toast.success("Message sent successfully");
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
        mobile: ''
      });
    } catch (error) {
      console.error('Error sending message:', error);
      toast.error("Failed to send message");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='container-fluid'>
        <ToastContainer />
        <div className='row'>
          <div className='col-md-12 text-center'>
            <h1>Contact <span className='carsoltext'>US</span></h1>
            <h4><span className='contacttext'>"Become a top IT professional with advanced tech skills"</span></h4>
          </div>
        </div>
        <div className='row mt-5'>
          <div className='col-md-2'></div>
          <div className='col-md-4'>
            <div className="mb-4">
              <input type="text" className="form-control" placeholder='Name' name='name' value={formData.name} onChange={updateInput} style={{ padding: '10px' }} />
            </div>
            <div className="mb-4">
              <input type="email" className="form-control" placeholder='Email' name='email' value={formData.email} onChange={updateInput} style={{ padding: '10px' }} />
            </div>
            <div className="mb-4">
              <input type="text" className="form-control" placeholder='Subject' name='subject' value={formData.subject} onChange={updateInput} style={{ padding: '10px' }} />
            </div>
          </div>
          <div className='col-md-4'>
            <div className="mb-4">
              <input type="text" className="form-control" placeholder='Mobile no.' name='mobile' value={formData.mobile} onChange={updateInput} style={{ padding: '10px' }} />
            </div>
            <div className="mb-3">
              <textarea className="form-control" placeholder='Message..' name='message' value={formData.message} onChange={updateInput} rows="7"></textarea>
            </div>
          </div>
          <div className='col-md-2'></div>
        </div>
        <div className="text-center">
          <button type='submit' className='btn btn-success' disabled={loading}>
            {loading ? 'Sending...' : 'SEND MESSAGE'}
          </button>
        </div>
      </div>
    </form>
  );
}

export default Contactus;
