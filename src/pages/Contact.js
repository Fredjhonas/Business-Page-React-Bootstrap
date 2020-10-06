/* eslint-disable no-undef */
import React, { useState } from 'react';

const Contact = () => {
  const [form, setValues] = useState({
    email: '',
    name: '',
    phone: '',
    message: ''
  });

  const clearInputs = () => {
    setValues({
      email: '',
      name: '',
      phone: '',
      message: ''
    });
    document.getElementById('InputEmail').focus();
  };

  const handleInput = (event) => {
    setValues({
      ...form,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(
      `My name is ${form.name}. My mobile number is ${form.phone}, and my email is ${form.email}\nHere is what i want to say ${form.message}`);
    clearInputs();
  };

  return (
    <>
      <div className='my-3'>
        <h1 className='text-center'>Contact Us</h1>
      </div>
      <div className='container contact-div'>
        <div className='row'>
          <div className='col-md-6 col-10 mx-auto'>
            <form onSubmit={handleSubmit}>
              <div className='form-group'>
                <label>Email address</label>
                <input type='email' className='form-control' id='InputEmail' aria-describedby='emailHelp' name='email' value={form.email} onChange={handleInput} />
                <small id='emailHelp' className='form-text text-muted'>We'll never share your email with anyone else.</small>
              </div>

              <div className='form-group'>
                <label>Full Name</label>
                <input type='text' className='form-control' id='exampleInputEmail1' aria-describedby='emailHelp' placeholder='Enter your name' name='name' value={form.name} onChange={handleInput} />
              </div>

              <div className='form-group'>
                <label>Phone Number</label>
                <input type='text' className='form-control' id='exampleInputEmail1' aria-describedby='emailHelp' placeholder='Enter your mobile number' name='phone' value={form.phone} onChange={handleInput} />
              </div>

              <div className='form-group'>
                <label>Message</label>
                <textarea className='form-control' id='exampleFormControlTextarea1' rows='3' name='message' value={form.message} onChange={handleInput} />
              </div>

              <button type='submit' className='btn-form btn-outline-primary'>Submit</button>
            </form>
          </div>
        </div>
      </div>
    </>

  );
};

export default Contact;
