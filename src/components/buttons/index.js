import React from "react";
import { classNames } from "../../utils/functions";

const Button = ({ label, handleClick, ...props }) => {
    return (
        <button
            {...props}
            onClick={handleClick}
            className={classNames(
                "flex justify-center items-center text-white w-full bg-green-600 py-3 px-4 focus:outline-none hover:bg-green-700 rounded-[0.5rem] text-base font-medium",
            )}
        >
            {label}
        </button>
    );
};

export default Button;
