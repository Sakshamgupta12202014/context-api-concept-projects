import React from "react";

// In this context, children refers to the content that is placed between the opening and closing tags of the Button component when it is used. In React, children is a special prop that allows components to display nested elements or text.
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
