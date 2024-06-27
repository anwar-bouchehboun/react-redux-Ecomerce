import React, { useState } from "react";
import logo from "../../assets/images/logo.png";
import Cart from "../Cart/Cart";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../features/slices/authSlice";
import { Avatar } from "@material-tailwind/react";
import { Tooltip } from "@material-tailwind/react";

const Navbar = () => {
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const user = useSelector((state) => state.user.user);
  const { name, image } = user;
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const dispatch = useDispatch();

  return (
    <>
      <div className="flex items-center justify-center w-full p-4 bg-teal-600">
        <p className="text-2xl font-bold text-white font-inter ">
         WELCOM ALL
        </p>
      </div>
      <div className="flex items-center justify-around">
        <div>
          <img className="w-full h-28" src={logo} alt="store"></img>
        </div>
        <div className="flex flex-row items-center">
         
          <div
            className="flex flex-row items-center cursor-pointer"
            onClick={handleOpen}
          >
            {totalAmount > 0 ? (
              <span className="px-2 mr-1 text-sm bg-gray-300 rounded-full font-inter">
                {totalAmount}
              </span>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="#000"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                />
              </svg>
            )}

            <p className="text-base font-medium leading-none tracking-normal text-center font-inter">
              Shopping bag
            </p>
            <div>
              {open && <Cart openModal={open} setOpen={setOpen}></Cart>}
            </div>
          </div>
          <div className="flex flex-row items-center pl-4 cursor-pointer">
            {image && (
              <Avatar
                src={image}
                alt="avatar"
                size="sm"
                className="mr-2"
              ></Avatar>
            )}
            <div onClick={() => dispatch(logout())}>
              <Tooltip content="Sign Out" placement="bottom">
                <p className="text-2xl font-bold leading-none tracking-normal text-teal-600 font-2xl font-inter">
                  Hi {name.charAt("0").toUpperCase() + name.slice(1)}
                </p>
              </Tooltip>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center w-full p-4 mx-auto bg-teal-600">
        <p className="text-base font-medium text-white font-inter ">50& OFF</p>
        <p className="text-base font-medium text-white font-inter mx-96">
          Free shipping and returns
        </p>
        <p className="text-base font-medium text-white font-inter ">
          Diffrent payment methods
        </p>
      </div>
    </>
  );
};

export default Navbar;
