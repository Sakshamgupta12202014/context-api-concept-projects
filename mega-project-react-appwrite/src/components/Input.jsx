import React, { forwardRef, useId } from "react";

const Input = forwardRef(function Input(
  { label, type = "text", ...props },
  ref
) {
  // Using forwardRef to allow parent components to pass a ref to the input
  // This is useful for focusing the input or accessing its value directly
  const id = useId(); // gemnerate s unique id for the input
  return (
    <div>
      {label && (
        <label className="label" htmlFor={id}>
          {label}
        </label>
      )}
      <input
        type={type}
        {...props} // spread operator to pass all other props like value, onChange, etc.
        // placeholder={placeholder}
        className="input"
        ref={ref}
        id={id}
      />
    </div>
  );
});

export default Input;
