import React from "react";

const Button = ({ type, text, handleClick, otherStyles }) => {
  return (
    <button
      type={type ? "submit" : "button"}
      className={`text-[25px] flex px-4 py-2 rounded-lg hover:bg-inherit transition duration-200 hover:ease-in ${otherStyles? `${otherStyles}` : ""}`}
      onClick={handleClick}
    >
      {text}
    </button>
  );
};

export default Button;
