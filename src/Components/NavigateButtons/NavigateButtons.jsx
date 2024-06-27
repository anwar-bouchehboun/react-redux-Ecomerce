import React from "react";
import { Button } from "@material-tailwind/react";
import clothes from "../../assets/images/clothes.jpg";
import { filterProducts } from "../../features/slices/productsSlice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const NavigateButtons = () => {
  const buttons = [
    "Hoodies",
    "Dresses",
    "Suits",
    "Shoes",
    "T-Shirts",
    "Jeans",
    "Jackets",
    "Bags",
  ];

  const dispatch = useDispatch();

  return (
    <div>
      <div className="flex items-center justify-center py-8">
        {buttons.map((button, index) => {
          return (
            <div key={index} className="mr-4">
              <Link to={"/filteredProducts/" + button}>
                <Button
                  
                  color="blue"
                  size="lg"
                  variant="outlined"
                  ripple={true}
                  className="text-black duration-300 ease-in-out bg-cyan-300 hover:bg-teal-300 hover:text-white"
                  onClick={() => dispatch(filterProducts(button))}
                >
                  {button}
                </Button>
              </Link>
            </div>
          );
        })}
      </div>
      <div className="bg-teal-600 p-2 w-[55%] mx-auto rounded-md">
        <h3 className="text-lg font-bold leading-none tracking-normal text-center text-white font-inter">
          SALES UP TO 50%
        </h3>
      </div>
      <div className="flex justify-center py-4 item-center">
        <img
          className="h-[600px] w-[70%] rounded-md shadow-lg shadow-gray-600"
          src={clothes}
          alt="clothes"
        ></img>
      </div>
    </div>
  );
};

export default NavigateButtons;
