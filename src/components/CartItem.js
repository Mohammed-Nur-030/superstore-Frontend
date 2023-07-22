import React, { useState } from "react";
// import FormatPrice from "../Helpers/FormatPrice";
import CartAmountToggle from "./CartAmountToggle";
import { FaTrash } from "react-icons/fa";
import { useCartContext } from "../context/CartContext";
import { NavLink } from "react-router-dom";
import { FaMinus, FaPlus } from "react-icons/fa";


const CartItem = (props) => {
    const { _id, productId, color, price, amount, deleteACartProduct } = props;
    console.log("productId")
    console.log(productId)
    // const { removeItem, } = useCartContext();
    // const [quantity,setQuantity]=useState(null);
    // console.log(quantity)


    // const setDecrease = () => {
    //     //   amounts > 1 ? setAmounts(amounts - 1) : setAmounts(1);
    //     setAmounts(amount - 1)
    //     console.log(amounts)
    // };

    // const setIncrease = () => {
    //     // amounts < productId.quantity ? setAmounts(amounts + 1) : setAmounts(productId.quantity);
    //     setAmounts(amount + 1)
    //     console.log("amounts")
    //     console.log(amounts)
    // };

    return (
        <>
            <div className="cart_heading flex gap-2">
                <div className="cart-image--name w-1/5 flex   " >
                    <div className="w-1/3 h-full">
                        <NavLink to={`/singleproduct/${_id}`}>
                            <img src={productId?.images[0]?.url} alt={_id} />
                        </NavLink>
                    </div>
                    <div className="flex flex-col px-2">
                        <p>{productId?.title}</p>
                        <div className="color-div flex justify-center items-center gap-3  ">
                            <p>color:</p>
                            <div
                                className="color-style  flex w-3 h-3 rounded-full items-center justify-center   mt-1"
                                style={{ backgroundColor: color, color: color }}></div>
                        </div>
                    </div>
                </div>
                {/* price   */}
                <div className="cart-hide w-1/5   justify-center">
                    <p className="text-center">
                        &#8377;{price}
                    </p>
                </div>

                {/* Quantity  */}
                < div className="w-1/5 flex justify-center  ">
                    {amount}
                </div>

                {/* //Subtotal */}
                <div className="cart-hide w-1/5 text-center ">
                    <p>
                        &#8377;{price * amount}
                    </p>
                </div>

                <div className=" w-1/5 text-center  flex justify-center pt-3">
                    <FaTrash className="w-4 text-gray-500 h-4 hover:text-red-400" onClick={() => deleteACartProduct(_id)} />
                    {/* <img src="images/open-trash-can.png" alt="" className="w-4 h-4" /> */}
                </div>
            </div>
            {/* <div className="border-[1px] border-gray-500"> </div>
             */}
            <hr className="my-2" />

        </>
    );
};

export default CartItem;