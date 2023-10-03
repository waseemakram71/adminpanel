
'use client'
import React, { useState } from 'react';

function Admin() {
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    phone: '',
    office: '',
    year: '',
  });

  const [emailError, setEmailError] = useState('');


  const bbb = /^[0-9]*$/;

  const handleInputChange = (e) => {
    // phone and year validation
    if ((e.target.name === 'phone' || e.target.name === 'year') && !bbb.test(e.target.value)) {
      return;
    }

    // email validation
    if (e.target.name === 'email') {
      const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      
      if (!emailPattern.test(e.target.value)) {
        setEmailError('Please enter a valid email address');
      } else {
        setEmailError('');
      }
    }

    setUserData((prevUserData) => ({
      ...prevUserData,
      [e.target.name]: e.target.value,
    }));
  };

   const handleSubmit = async (e) => {
    e.pereventDefault();

   }
  return (
    <div className='flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100'>
      <main className='flex flex-col items-center justify-center w-full flex-1 px-20 text-center'>
        <div className='bg-white rounded-2xl shadow-2xl flex w-2/3 max-w-4xl'>
          <div className='w-3/5 p-5'>
            <div className='text-left font-bold'>
              <span className='text-green-500'>Company</span> Name
            </div>
            <div className='py-10'>
              <h2 className='text-3xl font-bold text-blue-500 mb-2'>Add User</h2>
              <div className='border-2 w-10 border-blue-500 inline-block mb-2 rounded-2xl'></div>
              <div className='flex flex-col items-center '>
                <div className='bg-gray-100 w-64 p-2 flex items-center mt-5'>
                  <input
                    type='text'
                    name='name'
                    placeholder='Name'
                    className='bg-gray-100 outline-none text-sm'
                    value={userData.name}
                    autoComplete='off'
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className='bg-gray-100 w-64 p-2 flex items-center mt-5'>
                  <input
                    type='email'
                    name='email'
                    placeholder='Email'
                    className='bg-gray-100 outline-none text-sm'
                    value={userData.email}
                    autoComplete='off'
                    onChange={handleInputChange}
                    required
                  />
                </div>
                {emailError && <span className="text-red-500">{emailError}</span>}
                <div className='bg-gray-100 w-64 p-2 flex items-center mt-5'>
                  <input
                    type="tel"
                    name='phone'
                    inputMode="tel"
                    placeholder="Phone number"
                    className='bg-gray-100 outline-none text-sm'
                    value={userData.phone}
                    autoComplete='off'
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className='bg-gray-100 w-64 p-2 flex items-center mt-5'>
                  <input
                    type='text'
                    name='office'
                    placeholder='Office'
                    className='bg-gray-100 outline-none text-sm'
                    value={userData.office}
                    autoComplete='off'
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className='bg-gray-100 w-64 p-2 flex items-center mt-5'>
                  <input
                    type='tel'
                    title='Only Number'
                    pattern="^[0-9]"
                    name='year'
                    maxLength={4}
                    min="2018"
                    placeholder='Year'
                    className='bg-gray-100 outline-none text-sm'
                    value={userData.year}
                    autoComplete='off'
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
            </div>
          </div>
          <div className='w-3/5 bg-blue-500 text-white rounded-tr-2xl rounded-br-2xl py-36 px-12'>
            <h2 className='text-3xl font-bold mb-2'>About Us</h2>
            <div className='border-2 w-10 border-white inline-block mb-2 rounded-2xl'></div>
            <p className='mb-10'>Quickly Build a Website With Our Unified Platform. Grow Your Business With Shopify®. Easily Create a Website With Our Unified Platform. Mobile Commerce Ready</p>
           
            <button
              className='border-2 border-white rounded-full px-12 py-2 inline-block font-semibold hover:bg-blue-900 hover:text-blue-500'
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Admin;
