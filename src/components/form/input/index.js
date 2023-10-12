import React from "react";
import { classNames } from "../../../utils/functions";

const CustomInput = ({
  inputClass,
  name,
  value,
  type,
  handleChange,
  ...props
}) => {
  return (
    <input
      {...props}
      className={classNames(
        "w-full bg-white rounded-[0.5rem] border border-gray-300 focus:border-green-600 focus:ring-2 focus:ring-green-50 text-base outline-none text-gray-700 py-3 px-4 transition-colors duration-200 ease-in-out",
        inputClass,
      )}
      {...{ name, value, type, onChange: handleChange }}
    />
  );
};

export default CustomInput;
