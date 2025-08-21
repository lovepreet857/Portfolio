import React from "react";

const Input = ({
  label,
  name,
  type = "text",
  value,
  onChange,
  placeholder,
  required = false,
  className = "",
  checked,
  tel,
  labelClassName = "",
  ...rest
}) => {
  return (
    <>
      <div className="flex flex-col gap-1">
        {label && (
          <label
            htmlFor={name}
            className={`text-white-white font-Inter font-normal text-base md:text-[24px] leading-[100%] pb-3 ${labelClassName}`}
          >
            {label}
          </label>
        )}

        <input
          id={name}
          name={name}
          type={type}
          value={type === "checkbox" ? undefined : value}
          checked={type === "checkbox" ? checked : undefined}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          className={`border border-white-white text-white-white  px-3 py-2 rounded-xl  outline-none ${className}`}
          {...rest}
        />
      </div>
    </>
  );
};

export default Input;
