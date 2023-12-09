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
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";
import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { toast } from "react-toastify";

const Register = () => {
  const [name, setName] = useState("");
  const [photo, setPhoto] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [check, setChecked] = useState("");

const passwordRegEx6c = /^.{6,}$/;
const passwordRegExCapital = /^(?=.*[A-Z]).+$/;
const passwordRegExSpecial = /^(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?/~\-]).+$/;


  const navigate = useNavigate();

  const { createUser, handleUpdateProfile, googleLogin,githubLogin } = useContext(AuthContext);

  // google 
  const handleGoogleLogin =(e)=>{
    e.preventDefault();
    googleLogin()
    .then(()=>{
      toast.success("Logged In", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 2000, 
        hideProgressBar: false, 
        closeOnClick: true, 
        pauseOnHover: true,
        draggable: true
      })
      navigate('/')
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
      navigate('/')
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

  const handleRegister = (e) => {
    e.preventDefault();
    if(!passwordRegEx6c.test(password)){
      toast.error("Password must be minimum 6 character.", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 2000, 
        hideProgressBar: false, 
        closeOnClick: true, 
        pauseOnHover: true,
        draggable: true
      });
      return;
    }
    else if(!passwordRegExCapital.test(password)){
      toast.error("Password must contains atleast one capital letter.", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 2000, 
        hideProgressBar: false, 
        closeOnClick: true, 
        pauseOnHover: true,
        draggable: true
      });
      return;
    }
    else if(!passwordRegExSpecial.test(password)){
      toast.error("Password must contain atleast one special character.", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 2000, 
        hideProgressBar: false, 
        closeOnClick: true, 
        pauseOnHover: true,
        draggable: true
      });
      return;
    }

      if (check) {
        createUser(email, password)
              .then(res => {
                handleUpdateProfile(name, photo)
                      .then(() => {
                          toast.success('User created successfully', {
                            position: toast.POSITION.TOP_CENTER,
                            autoClose: 2000, 
                            hideProgressBar: false, 
                            closeOnClick: true, 
                            pauseOnHover: true,
                            draggable: true
                          });
                          navigate('/')
  
                      })
              })
              .catch(error => {
                  toast.error(error.message, {
                    position: toast.POSITION.TOP_CENTER,
                    autoClose: 2000, 
                    hideProgressBar: false, 
                    closeOnClick: true, 
                    pauseOnHover: true,
                    draggable: true
                  })
              })
        }
  };
  return (
    <>
      <div className="flex flex-row-reverse mb-32 h-[650px] md:mr-3 lg:mr-24  mt-8">
        <div className="mt-6 mr-6 md:mr-0">
          <form onSubmit={handleRegister}>
            <Card className="w-96">
              <CardHeader
                variant="gradient"
                className="mb-4 grid h-28 place-items-center bg-[#ADBAC2]"
              >
                <Typography variant="h3" className="text-white">
                  Registration
                </Typography>
              </CardHeader>
              <CardBody className="flex flex-col gap-4">
                <Input
                required
                  onChange={(e) => setName(e.target.value)}
                  label="Name"
                  type="text"
                  size="lg"
                  
                />
                <Input
                required
                  onChange={(e) => setPhoto(e.target.value)}
                  label="Image URL"
                  type="text"
                  size="lg"
                  
                />
                <Input
                required
                  onChange={(e) => setEmail(e.target.value)}
                  label="Email"
                  type="email"
                  size="lg"
                  
                />
                <Input
                required
                  onChange={(e) => setPassword(e.target.value)}
                  label="Password"
                  type="password"
                  size="lg"
                  
                />
                <div className="-ml-2.5">
                  <Checkbox
                    
                    required
                    onChange={(e) => setChecked(e.target.checked)}
                    label="Accepts Terms and Conditions"
                  />
                </div>
              </CardBody>
              <CardFooter className="pt-0 ">
                <button
                  type="submit"
                  className="w-full py-3 text-white bg-gradient-to-r from-[#6574CD] via-[#7F9CF5] to-[#6574CD] rounded-lg"
                >
                  Register
                </button>
                <Typography
                  variant="small"
                  className="mt-6 flex gap-2 justify-center items-center"
                >
                  Have an account?
                  <Link to="/login">
                    <Typography
                      variant="small"
                      className="ml-1 font-bold text-[#354807]"
                    >
                      Login
                    </Typography>
                  </Link>
                </Typography>
                <Typography
                  variant="small"
                  className="mt-2 flex gap-4 items-center justify-center"
                >
                  Register With
                  <button  onClick={handleGoogleLogin} className="text-2xl">
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

        <div className="w-full pb-5 rounded-lg hidden md:block">
          <img
            className="w-full h-full rounded-lg"
            src="/register.jpg"
            alt="welcome image"
          />
        </div>
      </div>
    </>
  );
};

export default Register;
