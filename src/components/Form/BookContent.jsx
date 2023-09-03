import React , {useEffect}from "react";
import ReactDOM from "react-dom";

import ScrollReveal from "scrollreveal";
import Book from "./Book";


const BookContent = () => {

  useEffect(() => {
    ScrollReveal({
      distance: "100px",
      duraction: 200,
      delay: 200,
      reset: true,
    });

    ScrollReveal().reveal(".content", { origin: "top" });
  }, []);

 const content = (
  <div className="fixed z-50 content flex justify-center items-center top-[22vh] md:left-[17%] lg:left-[24%] xl:left-[32%]">
    <Book/>
  </div>
 )
  return ReactDOM.createPortal(content, document.getElementById("book-hook"));
};

export default BookContent;
