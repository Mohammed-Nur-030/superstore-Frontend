import React from 'react'

import { useFormik } from 'formik';
import * as yup from 'yup';
import { useDispatch } from "react-redux";
import {  resetPassword } from "../features/user/userSlice";
import {BiSolidUserCircle} from 'react-icons/bi'
import { Link, useLocation, useNavigate } from "react-router-dom";


const resetSchema = yup.object({
   
    password: yup.string().required("Password is required"),
    confirmPassword: yup.string().required("Confrim Password is required"),
   
   });


const ResetPassword = () => {
    const location=useLocation();
    const navigate=useNavigate();
    const dispatch=useDispatch();

    const getToken=location.pathname.split("/")[2];
       
    const formik = useFormik({
        initialValues: {
          password:'',
          confirmPassword:'',
        },
        validationSchema:resetSchema,
        onSubmit: (values) => {
          alert(JSON.stringify(values, null, 2));
          dispatch(resetPassword({token:getToken,password:values.password,confirmPassword:values.confirmPassword}))
        navigate('/login')
      
        },
      });
  return (
    <div>
          <section className="login py-5  h-[100vh]">
        <div className="  h-full">
          <div className="h-full flex flex-col items-center justify-center ">
            <div className="heading flex gap-2  mb-4">

              <BiSolidUserCircle className="text-white inline-block w-10 h-10"/>
              <h3 className="text-center text-white font-bold text-xl pt-1 ">PASSWORD RESET</h3>
            </div>
            <div className=" bg-gray-200 rounded-md mx-auto shadow-md shadow-gray-400 py-12">
              <form action=""
                onSubmit={formik.handleSubmit}
                className="flex flex-column gap-2 ">

                <input type="password" 
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
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  onChange={formik.handleChange("confirmPassword")}
                  onBlur={formik.handleBlur("confirmPassword")}
                  value={formik.values.confirmPassword}
                  className="bg-gray-300 rounded-xl px-2 py-1"
                  />
                  <div className="errors">
                     {
                         formik.touched.confirmPassword && formik.errors.confirmPassword
                     }
                  </div>

                <div className="flex flex-col">
                  <Link to="/forgot-password" className="text-xs text-red-600 underline">Forgot Password?</Link>

                  {/* <div className="mt-3 flex justify-center gap-4  items-center"> */}
                    <button
                      // onClick={()=>direct()}
                     className="login-button px-5 my-2 py-[3px] text-[15px]  rounded-xl bg-gray-400" type="submit">
                      Set Password
                    </button>
                    {/* <Link to="/signup"  className="login-button px-5 py-[3px] text-[15px]  rounded-xl">
                      SignUp
                    </Link> */}
                  {/* </div> */}
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ResetPassword
