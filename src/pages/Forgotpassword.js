import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useDispatch } from "react-redux";

import {BiSolidUserCircle} from 'react-icons/bi'
import { forgotPasswordToken } from "../features/user/userSlice";

const emailSchema = yup.object({
  email: yup.string().nullable().email("Email should be valid").required("Email Required"),
 
 });


const Forgotpassword = () => {

  const dispatch=useDispatch();
  const navigate = useNavigate();
     
  const formik = useFormik({
    initialValues: {
      email:'',
    },
    validationSchema:emailSchema,
    onSubmit: (values) => {
      // alert(JSON.stringify(values, null, 2));
      dispatch(forgotPasswordToken(values))
  
    },
  });




  return (
    <>
      {/* <Meta title={"Forgot Password"} />
      <BreadCrumb title="Forgot Password" /> */}
      <section className="login py-5 h-[100vh]   border-black flex justify-items-center">
        <div className="flex justify-items-center mx-auto   py-4">
          <div className="flex flex-col mx-auto items-center justify-center  ">
            <div className=" flex gap-2   ">
              <BiSolidUserCircle className="text-white inline-block w-10 h-10" />
              <h3 className="text-center text-white font-bold text-xl pt-1 ">Reset Your Password</h3>
            </div>
            <div className="flex flex-col justify-items-center bg-gray-200 rounded-md  shadow-md shadow-gray-400 py-6 px-2   border-red-400 ">
              <p className="text-center mt-2 mb-3">
                We will send you an email to reset your password
              </p>
              <form action="" className="flex flex-col py-4"
              onSubmit={formik.handleSubmit}>
                <input
                  type="email"
                  name="email"
                  className="rounded-xl px-4 py-2 "
                  placeholder="Email"
                  onChange={formik.handleChange("email")}
                  onBlur={formik.handleBlur("email")}
                  value={formik.values.email}
                />
                        <div className="errors">
                    {
                      formik.touched.email && formik.errors.email
                    }
                 </div>

                <div className="">
                  <div className="mt-3 flex justify-center  gap-4 items-center py-2">
                    <button className="login-button rounded-xl px-4 py-1 border-0" type="submit">
                      Submit
                    </button>

                    <Link
                     to="/login"
                     className="login-button rounded-xl px-4 py-1 border-0 ">Cancel</Link>
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

export default Forgotpassword;
