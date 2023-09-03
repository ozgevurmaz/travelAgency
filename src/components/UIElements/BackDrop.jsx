import React from "react";
import ReactDOM from "react-dom";


const BackDrop = (props) => {
  return ReactDOM.createPortal(
    <div className="fixed w-full h-full bg-red-900 bg-opacity-25 z-20"></div>,
    document.getElementById("backdrop-hook")
  );
};

export default BackDrop;