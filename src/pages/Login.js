import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import { useFormik } from 'formik';
import * as yup from 'yup';
import { useDispatch } from "react-redux";
import { loginUser } from "../features/user/userSlice";
import {BiSolidUserCircle} from 'react-icons/bi'
import { useSelector } from "react-redux";

const loginSchema = yup.object({
    email: yup.string().nullable().email("Email should be valid").required("Email Required"),
    password: yup.string().required("Password is required"),
   
   });


const Login = () => {
  
   const loginSuccess = useSelector((state) => state.auth.isSuccess);
   const dispatch=useDispatch();
    const navigate = useNavigate();
    
    // const direct=()=>{

    //   if (loginSuccess) {
    //     navigate("/");
    //   }
    // }
    // useEffect(() => {
    //   direct();
    // }, [loginSuccess]);
    
const handleLogin = () => {
  // Perform login logic here

  // Redirect to home page
 
  navigate("/");
  window.location.reload();

  // Reload the page
};
 
    
    const formik = useFormik({
        initialValues: {
          email:'',
          password:'',
        },
        validationSchema:loginSchema,
        onSubmit: (values) => {
        //   alert(JSON.stringify(values, null, 2));
          dispatch(loginUser(values))
          
          setTimeout(()=>{

            handleLogin();
          },8000)
      
        },
      });
  return (
    <>

      {/* <Meta title={"Login"} /> */}
      {/* <BreadCrumb title="Login" /> */}

      <section className="login py-5  h-[100vh]">
        <div className="  h-full">
          <div className="h-full flex flex-col items-center justify-center ">
            <div className="heading flex gap-2  mb-4">

              <BiSolidUserCircle className="text-white inline-block w-10 h-10"/>
              <h3 className="text-center text-white font-bold text-xl pt-1 ">USER LOGIN</h3>
            </div>
            <div className=" bg-gray-200 rounded-md mx-auto shadow-md shadow-gray-400 py-12">
              <form action=""
                onSubmit={formik.handleSubmit}
                className="flex flex-column gap-2 ">

                <input type="email" 
                name="email"
                 placeholder="Email" 
                 onChange={formik.handleChange("email")}
                 onBlur={formik.handleBlur("email")}
                 value={formik.values.email}
                 className="bg-gray-300 rounded-xl px-2 py-1"
                 
                 />
                 <div className="errors">
                    {
                      formik.touched.email && formik.errors.email
                    }
                 </div>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  onChange={formik.handleChange("password")}
                  onBlur={formik.handleBlur("password")}
                  value={formik.values.password}
                  className="bg-gray-300 rounded-xl px-2 py-1"
                  />
                  <div className="errors">
                     {
                         formik.touched.password && formik.errors.password
                     }
                  </div>

                <div className="">
                  <Link to="/forgot-password" className="text-xs text-red-600 underline">Forgot Password?</Link>

                  <div className="mt-3 flex justify-center gap-4  items-center">
                    <button
                      // onClick={()=>direct()}
                     className="login-button px-5 py-[3px] text-[15px]  rounded-xl bg-gray-400" type="submit">
                      Login
                    </button>
                    <Link to="/signup"  className="login-button px-5 py-[3px] text-[15px]  rounded-xl">
                      SignUp
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
