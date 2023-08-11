export default bookContent = (
    <div className="fixed top-0 left-0 w-full h-full bg-red-500 flex justify-center items-center">
      <div
        ref={modalRef}
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