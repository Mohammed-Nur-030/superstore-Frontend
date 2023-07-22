import { useState } from "react";
import { FaCheck } from "react-icons/fa";
import CartAmountToggle from "./CartAmountToggle";
import { NavLink } from "react-router-dom";
import { useCartContext } from "../context/CartContext";
import { FaMinus, FaPlus } from "react-icons/fa";

const AddToCart = ({ product }) => {

  const { _id, color, quantity } = product;
  console.log("Inside add to cart")
  console.log(_id)
  console.log(color)
  console.log(quantity)

  const [colors, setColors] = useState(color[0]);
  const [amount, setAmount] = useState(1);

  const setDecrease = () => {
    amount > 1 ? setAmount(amount - 1) : setAmount(1);
  };

  const setIncrease = () => {
    amount < quantity ? setAmount(amount + 1) : setAmount(quantity);
  };

  return (
    <section>
      <div className="colors flex flex-col">
        <p className=" text-center flex justify-center items-center gap-3">
          Color:
          {color.map((curColor, index) => {
            return (
              <button
                key={index}
                style={{ backgroundColor: curColor.toLowerCase() }}
                className={colors === curColor ? "btnStyle active" : "btnStyle"}
                onClick={() => setColors(curColor)}
              >
                {colors === curColor ? <FaCheck className="checkStyle" /> : null}
              </button>
            );
          })}
        </p>
      </div>

      {/* add to cart  */}
      <div className=" w-[200px] flex justify-start">
        <div className="cart-button w-[50%] mx-auto">
          <div className="amount-toggle flex justify-around  rounded-xl mt-1">
            <button onClick={() => setDecrease()} className="border-black  rounded-tl-xl rounded-bl-xl bg-green-400 w-1/3 py-2">
              <FaMinus className="w-3 h-3 mx-auto" />
            </button>
            <div className=" px-4 flex w-1/3 mx-auto justify-center bg-gray-100 text-sm py-2">{amount}</div>
            <button onClick={() => setIncrease()} className="border-black  rounded-tr-xl rounded-br-xl bg-green-400 w-1/3 py-2">
              <FaPlus className="w-3 h-3 mx-auto" />
            </button>
          </div>
        </div>
      </div>

      <NavLink to="/cart">
        <button className="py-3 px-4 rounded-full bg-green-500 text-white  hover:bg-green-600 mx-10 my-4">Add To Cart</button>
      </NavLink>
    </section>
  );
};

export default AddToCart; 