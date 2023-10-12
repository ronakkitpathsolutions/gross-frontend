import React from "react";
import { classNames } from "../../../utils/functions";

const InputGroup = ({ children, className, label, labelClass, ...props }) => {
  return (
    <div
      {...props}
      className={classNames(
        "flex flex-col justify-center items-start",
        className,
      )}
    >
      {label ? (
        <label
          className={classNames(
            "mb-[0.25rem] text-base font-medium",
            labelClass,
          )}
        >
          {label}
        </label>
      ) : null}
      {children}
    </div>
  );
};

export default InputGroup;
