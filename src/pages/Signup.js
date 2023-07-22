import React from "react";
import {  useNavigate } from "react-router-dom";
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../features/user/userSlice";
import {BiSolidUserCircle} from 'react-icons/bi'



const signupSchema = yup.object({
  firstName: yup.string().required("First Name is Required"),
  lastName: yup.string().required("Last Name is Required"),
  mobile: yup.string()
  .matches(/^\d{10}$/, "Mobile number must be 10 digits")
  .required("Mobile number is required"),
  email: yup.string().email("Email should be valid").required("Email Required"),
  password: yup.string().required("Password is required"),

});



const Signup = () => {
  const dispatch = useDispatch();
  const signupSuccess = useSelector((state) => state.auth.isSuccess);
  const navigate = useNavigate();
    
  const direct=()=>{
    if (signupSuccess) {
   navigate("/");
 }
}

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      mobile: '',
      password: '',
    },
    validationSchema: signupSchema,
    onSubmit: (values) => {
      // alert(JSON.stringify(values, null, 2));
      dispatch(registerUser(values))

    },
  });

  return (
    <>
      {/* <Meta title={"Sign Up"} />
      <BreadCrumb title="Sign Up" /> */}
      <section className="login py-5 h-[100vh]  ">
        <div className="flex h-full w-full ">
          <div className="  mx-auto flex justify-items-center">
            <div className="  m-auto flex justify-items-center flex-col ">
              <div className="heading   flex justify-items-center gap-2  mb-4 mx-auto text-center ">
                <BiSolidUserCircle className="text-white inline-block w-10 h-10" />
                <h3 className="text-center text-white font-bold text-xl pt-1 ">SIGN UP</h3>
              </div>

              <div className=" bg-gray-200 rounded-md mx-auto shadow-md shadow-gray-400 py-12">

              <form action=""
                className="flex flex-col gap-1  py-4"
                onSubmit={formik.handleSubmit}>
                <input type="text" name="name" placeholder="First Name"
                  value={formik.values.firstName}
                  onChange={formik.handleChange("firstName")}
                  onBlur={formik.handleBlur("firstName")}
                  className="bg-gray-300 rounded-xl px-2 py-1 mb-2"

                />
                <div className="errors">
                  {
                    formik.touched.firstName &&
                    formik.errors.firstName
                  }
                </div>
                <input type="text" name="name" placeholder="Last Name"
                  value={formik.values.lastName}
                  onChange={formik.handleChange("lastName")}
                  onBlur={formik.handleBlur("lastName")}
                  className="bg-gray-300 rounded-xl px-2 py-1 mb-2"

                />
                <div className="errors">
                  {
                    formik.touched.lastName &&
                    formik.errors.lastName
                  }
                </div>
                <input type="email" name="email" placeholder="Email"
                  value={formik.values.email}
                  onChange={formik.handleChange("email")}
                  onBlur={formik.handleBlur("email")}
                  className="bg-gray-300 rounded-xl px-2 py-1 mb-2"

                />
                <div className="errors">
                  {
                    formik.touched.email &&
                    formik.errors.email
                  }
                </div>
                <input
                  type="tel"
                  name="mobile"
                  placeholder="Mobile Number"
                  value={formik.values.mobile}
                  onChange={formik.handleChange("mobile")}
                  onBlur={formik.handleBlur("mobile")}
                  className="bg-gray-300 rounded-xl px-2 py-1 mb-2"

                />
                <div className="errors">
                  {
                    formik.touched.mobile &&
                    formik.errors.mobile
                  }
                </div>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={formik.values.password}
                  onChange={formik.handleChange("password")}
                  onBlur={formik.handleBlur("password")}
                  className="bg-gray-300 rounded-xl px-2 py-1 mb-2"

                />
                <div className="errors">
                  {
                    formik.touched.password &&
                    formik.errors.password
                  }
                </div>

                <div>
                  <div className="mt-3 d-flex justify-content-center gap-15 align-items-center">
                    <button 
                     onClick={()=>direct()}
                     className="login-button px-5 py-[3px] text-[15px]  rounded-xl">Sign Up</button>
                  </div>
                </div>

              </form>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Signup;
