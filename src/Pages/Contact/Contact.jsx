import React, { useContext } from 'react';
import { IoLocationOutline } from "react-icons/io5";
import { BsTelephoneInbound } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { AuthContext } from '../AuthProvider/AuthProvider';

const Contact = () => {
    const{ user} = useContext(AuthContext)
    return (
        <div className='my-16 px-5 lg:px-0'>
            <div className="hero min-h-screen rounded-xl" style={{backgroundImage: 'url(https://i.ibb.co/qgxnQT7/1000-F-636635610-5-T3han-FHLCg-N2j-Bn-CW2-Rh-GNwv1j-ZIUl9.jpg)'}}>
  <div className="hero-overlay bg-opacity-90 rounded-xl"></div>
  <div className="hero-content text-center text-neutral-content">

<div className='max-w-6xl'>
    <h1 className='text-2xl font-bold'>Contact Us</h1>

    <div className='flex flex-col gap-8 md:gap-0 md:flex-row items-center mt-10'>
        {/* address  */}
        <div>
<div className='space-y-12 w-1/2'>
    {/* 1  */}
    <div className='flex items-center text-left gap-5 w-96'>
        <IoLocationOutline className='text-6xl bg-white rounded-full'></IoLocationOutline>
        <div className='w-24'>
            <h1 className='text-blue-500 text-xl'>Address</h1>
            <p>Dhanmondi,Dhaka <br />Bangladesh</p>
        </div>
    </div>
    {/* 2  */}
    <div className='flex items-center text-left gap-5'>
        <BsTelephoneInbound  className='text-5xl bg-white rounded-full'></BsTelephoneInbound>
        <div className='w-24'>
            <h1  className='text-blue-500 text-xl'>Phone</h1>
            <p>+908734546444</p>
        </div>
    </div>
    {/* 3  */}
    <div className='flex items-center  text-left gap-5'>
        <AiOutlineMail  className='text-5xl bg-white rounded-full'></AiOutlineMail>
        <div className='w-24'>
            <h1 className='text-blue-500 text-xl'>Address</h1>
            <p>moments@gmail.com</p>
        </div>
    </div>
</div>
        </div>

        {/* text input  */}
        <div>
<div className='h-96 w-80 bg-white pl-2 rounded-lg' 
data-aos="fade-up"
    data-aos-offset="20"
    data-aos-delay="50"
    data-aos-duration="5000"
    data-aos-easing="ease"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-center">
<h1 className='text-black pt-4 mb-2 text-2xl font-bold'>Hi {user.displayName}</h1>
<h1 className='text-black text-left pl-4'>Your Email</h1>
<input className='text-black border-1 pl-2 border-black my-1 bg-gray-300 w-[90%] py-1' placeholder='Your Email' type="text" />
<h1 className='text-black text-left pl-4 my-2'>Contact Number</h1>
<input className='text-black border-1 mb-1 border-black bg-gray-300 w-[90%] py-1 pl-2' placeholder='Number ' type="text" />
<h1 className='text-black text-left pl-4 my-2'>Your Query</h1>
<textarea className='text-black border-1 border-black bg-gray-300 w-[90%] py-1 pl-2' placeholder=' Query' type="text" />
<button className='btn btn-secondary mt-2 font-bold text-xl'>Send</button>
</div>
        </div>
    </div>
</div>


  </div>
</div>
        </div>
    );
};

export default Contact;