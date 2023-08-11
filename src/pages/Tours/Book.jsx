import React, { useRef } from "react";

import { useFormik } from "formik";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

import schema from "./schema";

function Book() {

  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    setFieldValue,
  } = useFormik({
    initialValues: {
      name: "",
      phone: "",
      email: "",
      message: "",
    },
    validationSchema: schema,
    onSubmit: (formValues, { resetForm }) => {
      console.log("Submitted form values:", formValues);
      resetForm();
      closeModal();
    },
  });

  return (
    <div className="flex">
      <div
        className="bg-red-50 p-3 rounded-xl shadow-lg shadow-red-500"
      >
        <h2 className="text-2xl text-center">Book Now</h2>
        <form onSubmit={handleSubmit} autoComplete="off">
          <div className="grid grid-cols-1 items-center justify-center">
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Name"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`border border-gray px-2 pr-12 h-[35px] rounded-[5px] ${
                errors.name && touched.name ? "input-error" : ""
              }`}
            />

            <PhoneInput
              inputProps={{
                id: "phone",
                name: "phone",
              }}
              regions={"europe"}
              onBlur={handleBlur}
              value={values.phone}
              onChange={(phone) => setFieldValue("phone", phone)}
              placeholder="Phone"
            />

            <input
              id="email"
              name="email"
              type="email"
              value={values.email}
              onBlur={handleBlur}
              onChange={handleChange}
              placeholder="E-mail"
              className={`border border-gray px-2 pr-12 h-[35px] rounded-[5px] ${
                errors.email && touched.email ? "input-error" : ""
              }`}
            />

            <input
              id="message"
              name="message"
              type="message"
              placeholder="Your Message"
              value={values.message}
              onChange={handleChange}
              onBlur={handleBlur}
              className="border border-gray px-2 pr-12 h-[35px] rounded-[5px]"
            />
          </div>
          <div className="text-red-500">
            {errors.name && touched.name && <p>{errors.name}</p>}
            {errors.phone && touched.phone && <p>{errors.phone}</p>}
            {errors.email && touched.email && <p>{errors.email}</p>}
          </div>
          <p className="mt-3 text-gray text-sm m-2">
            This site is protected by reCAPTCHA. Google's Privacy Policy and
            Terms of Service apply.
          </p>
          <div className="flex flex-col items-center mt-5">
            <button
              type="submit"
              className="flex px-7 text-xl bg-red-600 rounded-lg text-white-red font-bold hover:bg-inherit hover:text-red-600"
            >
              Send It Now!
            </button>
          </div>
        </form>
      </div>
    </div>
  );

  
}

export default Book;
