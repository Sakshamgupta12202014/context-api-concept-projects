import React from "react";

function Button({
  children,
  type = "button",
  bgColor = "rgb(10, 102, 214)",
  textColor = "white",
  className = "",
  ...props
}) {
  return (
    <div style={{ backgroundColor: `${bgColor}`, textColor: `${textColor}` }}>
      {children}
    </div>
  );
}

export default Button;
