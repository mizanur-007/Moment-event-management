import React from 'react';
import { Link } from 'react-router-dom';
import { BsFillArrowRightSquareFill, BsFillArrowDownSquareFill} from "react-icons/bs";

const ErrorPage = () => {
    return (
        <div className="hero min-h-screen rounded-xl mt-6 mb-16" style={{backgroundImage: 'url(https://i.ibb.co/FxvR1dm/error-text-broken-glass-font.jpg)'}}>
  <div className="hero-overlay bg-opacity-90 rounded-xl"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className='flex flex-col md:flex-row items-center justify-center gap-32 spay'>
        <div data-aos="slide-down"
    data-aos-offset="-40"
    data-aos-delay="50"
    data-aos-duration="5000"
    data-aos-easing="ease"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-center">
            <h1 className='text-red-600 font-bold text-5xl'>OOPS!</h1>
            <p  className='font-bold text-3xl my-3'>Looks Like You Lost Way</p>
            <h1  className=' font-bold text-3xl'>Let me help you</h1>
            <h1  className='text-blue-100 font-bold text-5xl mt-3'>Follow The Arrow</h1>
        </div>
        <BsFillArrowRightSquareFill className='text-5xl hidden md:block' data-aos="slide-down"
    data-aos-offset="-20"
    data-aos-delay="50"
    data-aos-duration="500000"
    data-aos-easing="ease"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-center"></BsFillArrowRightSquareFill>
        <BsFillArrowDownSquareFill className='text-5xl block md:hidden'></BsFillArrowDownSquareFill>
<Link to='/'><button className='btn btn-accent w-32 lg:w-auto text-red-400 font-bold text-lg lg:text-2xl' data-aos="slide-down"
    data-aos-offset="-70"
    data-aos-delay="50"
    data-aos-duration="1000000"
    data-aos-easing="ease"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-center">Click Me</button></Link>
    </div>
  </div>
</div>
    );
};

export default ErrorPage;