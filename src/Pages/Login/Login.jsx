import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
  Button,
} from "@material-tailwind/react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";
import { useContext, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { toast } from "react-toastify";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [check, setChecked] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const { loginWithEmail, googleLogin, githubLogin } = useContext(AuthContext);

  // google 
  const handleGoogleLogin =(e)=>{
    e.preventDefault();
    googleLogin()
    .then(()=>{
      toast.success("Logged In",{
        position: toast.POSITION.TOP_CENTER,
        autoClose: 2000, 
        hideProgressBar: false, 
        closeOnClick: true, 
        pauseOnHover: true,
        draggable: true
      })
      navigate(location?.state ? location.state : '/')
    })
    .catch(()=>{
      toast.error("Problem occurred", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 2000, 
        hideProgressBar: false, 
        closeOnClick: true, 
        pauseOnHover: true,
        draggable: true
      });
    })
  }
  // github 
  const handleGithubLogin =(e)=>{
    e.preventDefault();
    githubLogin()
    .then(()=>{
      toast.success("Logged In", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 2000, 
        hideProgressBar: false, 
        closeOnClick: true, 
        pauseOnHover: true,
        draggable: true
      })
      navigate(location?.state ? location.state : '/')
    })
    .catch(()=>{
      toast.error("Problem occurred", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 2000, 
        hideProgressBar: false, 
        closeOnClick: true, 
        pauseOnHover: true,
        draggable: true
      });
    })
  }

  const handleLogin = (e)=>{
    e.preventDefault();
    loginWithEmail(email,password)
    .then(userCredentials=>{
      toast.success("Login Successfull", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 2000, 
        hideProgressBar: false, 
        closeOnClick: true, 
        pauseOnHover: true,
        draggable: true
      });
      navigate(location?.state ? location.state : '/')
    })
    .catch(err =>{
      toast.error("Invalid email or password", {
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
    <div className="flex mb-10 h-[500px]  mt-12">
      <div className="mt-6 ml-5 md:ml-0">
       <form onSubmit={handleLogin}>
       <Card className="w-96">
          <CardHeader
            variant="gradient"
            // color="blue"
            className="mb-4 grid h-28 place-items-center bg-light-blue-100"
          >
            <Typography variant="h3" className="text-black">
              Log In
            </Typography>
          </CardHeader>
          
          <CardBody className="flex flex-col gap-4">
            <Input onChange={(e) => setEmail(e.target.value)} label="Email" type="email" size="lg" required />
            <Input onChange={(e) => setPassword(e.target.value)} label="Password" type={check ? 'text' : 'password'} size="lg" required />
            <div className="-ml-2.5">
              <Checkbox onChange={(e) => setChecked(e.target.checked)} label="Show Password" />
            </div>
          </CardBody>
          <CardFooter className="pt-0 ">
  <button type="submit" className="w-full py-3 text-white bg-gradient-to-r from-[#6574CD] via-[#7F9CF5] to-[#6574CD] rounded-lg">
    Log In
  </button>


            <Typography variant="small" className="mt-6 flex justify-center">
              Don&apos;t have an account?
              <Link to="/register">
                <Typography
                  variant="small"
                  color="blue"
                  className="ml-1 font-bold"
                >
                  Register
                </Typography>
              </Link>
            </Typography>
            <Typography
              variant="small"
              className="mt-2 flex gap-4 justify-center"
            >
              Login With
              <button onClick={handleGoogleLogin} className="text-2xl">
                <FcGoogle></FcGoogle>
              </button>
              <span>or</span>
              <button onClick={handleGithubLogin} className="text-2xl">
                <BsGithub></BsGithub>
              </button>
            </Typography>
          </CardFooter>
        </Card>
       </form>
      </div>

      <div className="w-full pb-2 rounded-lg hidden md:block">
        <img
          className="w-full h-full rounded-lg"
          src="/welcome.jpg"
          alt="welcome image"
        />
      </div>
    </div>
    </>
  );
};

export default Login;
