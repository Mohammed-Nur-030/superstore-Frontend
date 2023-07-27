import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import { useFormik } from "formik";
import * as yup from 'yup';

const stateOptions = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
    "Andaman and Nicobar Islands",
    "Chandigarh",
    "Dadra and Nagar Haveli",
    "Daman and Diu",
    "Delhi",
    "Ladakh",
    "Lakshadweep",
    "Puducherry",
    "Jammu and Kashmir"
];


const shippingSchema = yup.object({

    firstName: yup.string().required("First Name is Required"),
    lastName: yup.string().required("Last Name is Required"),
    //    email:yup.email().required("Email is Required"),
    address: yup.string().required("Address Details is Required"),
    state: yup.string().required("State is Required"),
    city: yup.string().required("City is Required"),
    other: yup.string().required("Additional Detail will help us Delivering your Product"),
    country: yup.string().required("Country is Required"),
    pincode: yup.number().required("Pincode is Required"),

});


const Checkout = () => {
    const dispatch = useDispatch();
    const cartState = useSelector(state => state.auth.cartProduct)
    const [totalAmount, setTotalAmount] = useState(null)
    const [shippingInfo,setShippingInfo]=useState(null);
    const getTokenFromLocalStorage = localStorage.getItem("user")
        ? JSON.parse(localStorage.getItem("user"))
        : null;


    const formik = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            address: "",
            state: "",
            city: "",
            country: "",
            other: "",
            pincode: "",
            //   email:'',

        },
        validationSchema: shippingSchema,
        onSubmit: (values) => {
            //   alert(JSON.stringify(values, null, 2));
            setShippingInfo(values);
            //   dispatch(loginUser(values))

        },
    });


    const first = getTokenFromLocalStorage.user.firstName;
    const last = getTokenFromLocalStorage.user.lastName;
    const mail = getTokenFromLocalStorage.user.email;

    console.log("cartState")
    console.log(cartState)
    useEffect(() => {
        let sum = 0;

        for (let index = 0; index < cartState?.cart.length; index++) {

            sum = sum + (Number(cartState.cart[index].amount)) * cartState.cart[index].price;

        }
        setTotalAmount(sum);
    }, [dispatch])
    return (
        <>

            <section className=" py-5  bg-gray-100 min-h-[100vh]">
                <div className="checkout-container container flex h-[100vh]  ">
                    <div className=" checkout-item-form w-1/2">
                        <div className="bg-white mx-4 px-2 rounded-md  shadow-gray-200 py-6">

                            <h4 className= "  title-checkout total text-center ">Shipping Details</h4>
                            <p className="user-details total text-center text-gray-600">
                                {first} &nbsp;
                                {last} &nbsp;
                                ({mail})
                            </p>
                            <form
                                onSubmit={formik.handleSubmit}
                                action=""
                                className="flex gap-1 flex-wrap items-center justify-center bg-gray-200 py-4 w-[80%] my-4 mx-auto rounded-xl shadow-xl"
                            >
                            <h4 className=" py-2">Shipping Address</h4>
                                <div className="w-full">
                                    <select
                                        name="country"
                                        onChange={formik.handleChange("country")}
                                        onBlur={formik.handleBlur("country")}
                                        value={formik.values.country}
                                        className="form-control form-select w-full  px-2 py-1 rounded-xl" id="">
                                        <option value="" selected disabled>
                                            Select Country
                                        </option>
                                        <option value="India" >
                                            India
                                        </option>
                                    </select>
                                    <div className="errors">
                                        {
                                            formik.touched.country && formik.errors.country
                                        }
                                    </div>
                                </div>


                                
                                <div className="flex-grow-1 w-full">
                                    <input
                                        type="text"
                                        placeholder="First Name"
                                        className="form-control w-full  px-2 py-1 rounded-xl"
                                        name="firstName"
                                        onChange={formik.handleChange("firstName")}
                                        onBlur={formik.handleBlur("firstName")}
                                        value={formik.values.firstName}
                                    />
                                    <div className="errors text-xs">
                                        {
                                            formik.touched.firstName && formik.errors.firstName
                                        }
                                    </div>

                                </div>
                                <div className="flex-grow-1 w-full">
                                    <input
                                        type="text"
                                        placeholder="Last Name"
                                        className="form-control w-full  px-2 py-1 rounded-xl"
                                        name="lastName"
                                        onChange={formik.handleChange("lastName")}
                                        onBlur={formik.handleBlur("lastName")}
                                        value={formik.values.lastName}
                                    />
                                    <div className="errors text-xs">
                                        {
                                            formik.touched.lastName && formik.errors.lastName
                                        }
                                    </div>
                                </div>
                                <div className="w-full">
                                    <input
                                        type="text"
                                        placeholder="Address"
                                        className="form-control w-full  px-2 py-1 rounded-xl"
                                        name="address"
                                        onChange={formik.handleChange("address")}
                                        onBlur={formik.handleBlur("address")}
                                        value={formik.values.address}
                                    />
                                    <div className="errors text-xs">
                                        {
                                            formik.touched.address && formik.errors.address
                                        }
                                    </div>                                 </div>
                                <div className="w-full">
                                    <input
                                        type="text"
                                        placeholder="Apartment, Suite ,etc"
                                        className="form-control w-full  px-2 py-1 rounded-xl"
                                        name="other"
                                        onChange={formik.handleChange("other")}
                                        onBlur={formik.handleBlur("other")}
                                        value={formik.values.other}
                                    />
                                    <div className="errors text-xs">
                                        {
                                            formik.touched.other && formik.errors.other
                                        }
                                    </div>                                 </div>
                                <div className="flex-grow-1 w-full">
                                    <input
                                        type="text"
                                        placeholder="City"
                                        className="form-control w-full  px-2 py-1 rounded-xl"
                                        name="city"
                                        onChange={formik.handleChange("city")}
                                        onBlur={formik.handleBlur("city")}
                                        value={formik.values.city}
                                    />
                                    <div className="errors text-xs">
                                        {
                                            formik.touched.city && formik.errors.city
                                        }
                                    </div>                                 </div>
                                <div className="flex-grow-1 w-full">
                                    <select
                                        id=""
                                        className="form-control form-select w-full  px-2 py-1 rounded-xl"
                                        name="state"
                                        onChange={formik.handleChange("state")}
                                        onBlur={formik.handleBlur("state")}
                                        value={formik.values.state}
                                    >
                                        <option value="" disabled>
                                            Select State
                                        </option>
                                        {stateOptions.map((state) => (
                                            <option key={state} value={state}>
                                                {state}
                                            </option>
                                        ))}
                                    </select>
                                    <div className="errors text-xs">
                                        {formik.touched.state && formik.errors.state}
                                    </div>
                                </div>

                                <div className="flex-grow-1 w-full">
                                    <input
                                        type="text"
                                        placeholder="Zipcode"
                                        className="form-control w-full px-2 py-1 rounded-xl "
                                        name="pincode"
                                        onChange={formik.handleChange("pincode")}
                                        onBlur={formik.handleBlur("pincode")}
                                        value={formik.values.pincode}
                                    />  
                                       <div className="errors text-xs">
                                        {formik.touched.pincode && formik.errors.pincode}
                                    </div>                      
                                 </div>
                                <div className="w-full py-2 ">
                                    <div className="flex justify-center items-center">
                                        <button className="px-2 py-1 bg-green-400 
                                        hover:bg-green-500 rounded-full text-white">
                                            Place Order
                                        </button>
                                    </div>
                                    <div className="flex justify-between py-4 gap-4 w-full ">

                                        <Link to="/cart" 
                                        className="text-dark flex  items-center gap-0 px-2
                                        text-sm py-1 bg-red-400 
                                        hover:bg-red-500 rounded-full text-white" >
                                            <BiArrowBack className="me-2" />
                                            Return to Cart
                                        </Link>

                                        <Link to="/" className="text-dark flex  items-center gap-0 px-2
                                        text-sm py-1 bg-red-400 
                                        hover:bg-red-500 rounded-full text-white">
                                            Continue Shopping
                                        </Link>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div className="checkout-item w-1/2 ">
                        <div className="product-checkout border-bottom  py-4  ">
                            <div className="flex flex-col mb-2 items-center">
                                {
                                    cartState && cartState?.cart?.map((item, index) => {
                                     console.log("item")
                                     console.log(item)
                                        console.log(item?.productId?.images[0]?.url)
                                        return (
                                            <>
                                     

                                            <div key={index} className="product-checkout w-full h-[140px]   flex   my-1 py-4 px-2  shadow-md">
                                            
                                                
                                                   
                                                <div className="w-[30%]  relative rounded-xl shadow-md"
                                                    style={{
                                                        backgroundImage: `url(${item?.productId?.images[0].url})`,
                                                        backgroundPosition: 'center',
                                                        backgroundSize: 'cover',
                                                        backgroundRepeat: 'no-repeat'
                                                    }}>

                                                    <span
                                                        style={{ top: "-10px", right: "2px" }}
                                                        className=" text-white bg-green-400  px-2 text-xs  rounded-full h-5 w-5 absolute flex justify-center items-center"
                                                        >
                                                        {item.amount}
                                                    </span>
                                                        
                                                    {/* <img className="border-2 " src="images/bg2.jpg" alt="product" /> */}
                                                </div>
                                                     
                                                
                                                <div className=" bg-white w-[70%] mx-2 px-2 py-2 rounded-xl shadow-sm">
                                                    <h5 className="total-price">{item?.productId?.title}</h5>
                                                    <p className="total-price
                                                    text-gray-700">{item?.color}</p>
                                                  <div className="flex-grow-1 py-4">
                                                    <h5 className="total">&#8377;{item.price}</h5>
                                                </div>
                                                </div>
                                    
                                            </div>
                                                       
                                            </>
                                    
                                        )
                                    })
                                }


                            </div>
                        </div>
                        
                        <div className="border-bottom py-4  px-4 bg-white rounded-xl shadow-md">
                            <div className="flex justify-between items-center">
                                <p className="total">Subtotal</p>
                                <p className="total-price">&#8377;{totalAmount ? totalAmount : 0}</p>
                            </div>
                            <div className="flex justify-between items-center">
                                <p className="mb-0 total text-gray-500">Shipping</p>
                                <p className="mb-0 total-price text-gray-500">&#8377;{
                                totalAmount>1000 ?49 : 99
                               }</p>
                            </div>
                        </div>

                        <div className="flex justify-between items-center py-4  bg-white rounded-xl shadow-md my-2 px-4 font-semibold">
                            <h4 className="total">Total</h4>
                            <h5 className="total-price">&#8377;{totalAmount  + 
                              (  totalAmount>1000 ?49 : 99)
                               }</h5>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Checkout;
