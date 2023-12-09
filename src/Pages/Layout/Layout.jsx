import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../NavBar/Navbar";
import Footer from "../Footer/Footer";
import { useEffect } from "react";

const Layout = () => {
    const location = useLocation();

useEffect(()=>{
  if(location.pathname=='/'){
    document.title = 'Home';
  }
  else if(location.pathname=='/services'){
    document.title = 'Services';
  }
  else if(location.pathname=='/about'){
    document.title = 'About Us';
  }
  else if(location.pathname=='/login'){
    document.title = 'Login ';
  }
  else if(location.pathname=='/register'){
    document.title = 'Register ';
  }
  else if(location.pathname=='/rental'){
    document.title = 'Rental ';
  }
  else if(location.pathname=='/contact'){
    document.title = 'Contact Us ';
  }
  else if(location.state){
    document.title = location.state;
  }
},[location.pathname])
    return (
<>
<div className="max-w-6xl mx-auto">
            <Navbar></Navbar>
            <Outlet />
        </div>
        <Footer></Footer>
</>
    );
};

export default Layout;