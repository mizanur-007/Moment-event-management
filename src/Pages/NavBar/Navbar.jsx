import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { button } from "@material-tailwind/react";
import { toast } from "react-toastify";

const Navbar = () => {
  const {user, signout} = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogOut = ()=>{
    signout()
    .then(()=>{
      toast.success("Logged Out",{
        position: toast.POSITION.TOP_CENTER,
        autoClose: 2000, 
        hideProgressBar: false, 
        closeOnClick: true, 
        pauseOnHover: true,
        draggable: true
      });
      navigate('/');
    })
    .catch((err)=>{
toast.error("Error", {
  position: toast.POSITION.TOP_CENTER,
  autoClose: 2000, 
  hideProgressBar: false, 
  closeOnClick: true, 
  pauseOnHover: true,
  draggable: true
});
    })
  }
    return (
        <>
        <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li  className="text-xl font-bold"><NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-[#FF444A] font-bold underline" : ""
              }
            >
              Home
            </NavLink></li>
        <li className="text-xl font-bold"><NavLink
              to="/services"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-[#FF444A] font-bold underline" : ""
              }
            >
              Services
            </NavLink></li>
        <li className="text-xl font-bold"><NavLink
              to="/about"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-[#FF444A] font-bold underline" : ""
              }
            >
              About Us
            </NavLink></li>
        <li className="text-xl font-bold"><NavLink
              to="/contact"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-[#FF444A] font-bold underline" : ""
              }
            >
              Contact Us
            </NavLink></li>
        <li className="text-xl font-bold"><NavLink
              to="/rental"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-[#FF444A] font-bold underline" : ""
              }
            >
              Rental 
            </NavLink></li>
      </ul>
    </div>
<h1 className="font-bold logofont text-lg md:text-xl lg:text-3xl rounded-full text-center bg-[#7B91A7]">Moments <br /><span className="text-base lg:text-lg">Event Management</span></h1>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    <li className="text-xl font-bold"><NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-[#FF444A] font-bold underline" : ""
              }
            >
              Home
            </NavLink></li>
        <li className="text-xl font-bold"><NavLink
              to="/services"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-[#FF444A] font-bold underline" : ""
              }
            >
              Services
            </NavLink></li>
            <li className="text-xl font-bold"><NavLink
              to="/about"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-[#FF444A] font-bold underline" : ""
              }
            >
              About Us
            </NavLink></li>
        <li className="text-xl font-bold"><NavLink
              to="/contact"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-[#FF444A] font-bold underline" : ""
              }
            >
              Contact Us
            </NavLink></li>
        <li className="text-xl font-bold"><NavLink
              to="/rental"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-[#FF444A] font-bold underline" : ""
              }
            >
              Rental
            </NavLink></li>
    </ul>
  </div>
  <div className="navbar-end space-x-2">
    {
      user && <><h1 className="text-xl font-semibold text-lime-900">{user.displayName}</h1>
      <img className="w-12 h-12 rounded-full" src={user.photoURL || 'https://i.ibb.co/dcfzhjK/Windows-10-Default-Profile-Picture-svg.png'} alt="" /></>
    }
  {
    user? <button  className="btn btn-secondary text-white" onClick={handleLogOut}>Log Out</button> : <><Link to='/register'><button className="btn btn-neutral">Register</button></Link>
    <Link to='/login'><button className="btn btn-neutral">Login</button></Link></>
  }
  </div>
</div>
        </>
    );
};

export default Navbar;