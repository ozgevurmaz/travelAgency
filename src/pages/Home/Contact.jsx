import React from 'react';
import { useFormik } from 'formik';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import contactSchema from '../../components/Schemas/contactSchema';
import Button from '../../components/UIElements/Button';

function Contact() {
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
      name: '',
      phone: '',
      email: '',
      date: '',
    },
    validationSchema: contactSchema,
    onSubmit: (formValues, { resetForm }) => {
      console.log('Submitted form values:', formValues);
      resetForm();
    },
  });

  return (
    <main className="flex flex-col items-center mt-[-4rem]">
      <div className="flex items-center flex-col bg-orange-200 w-10/12 py-8">
        <h2 className="text-2xl md:text-3xl xl:text-5xl font-semibold text-purple-800 pb-4 text-center">Contact Us & Start Travel</h2>

        <form onSubmit={handleSubmit} autoComplete="off">
          <div className="grid xl:grid-cols-4 gap-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 items-center justify-center">
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
                id: 'phone',
                name:'phone',
            }}
              regions={'europe'}
              onBlur={handleBlur}
              value={values.phone}
              onChange={(phone) => setFieldValue('phone', phone)}
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
            
            <DatePicker
              id="date"
              name="date"
              selected={values.date}
              onBlur={handleBlur}
              onChange={(date) => setFieldValue('date', date)}
              dateFormat="dd/MM/yyyy"
              placeholderText="Select a date"
              className={`border border-gray px-2 pr-12 h-[35px] w-full rounded-[5px] ${
                errors.date && touched.date ? "input-error" : ""
              }`}
            />
            
          </div>
          <div className='text-red-500'>
          {errors.name && touched.name && <p>{errors.name}</p>}
          {errors.phone && touched.phone && <p>{errors.phone}</p>}
          {errors.email && touched.email && <p>{errors.email}</p>}
          {errors.date && touched.date && <p>{errors.date}</p>}
          </div>
          <p className="mt-3 text-gray-800 m-2">This site is protected by reCAPTCHA. Google's Privacy Policy and Terms of Service apply.</p>
          <div className="flex flex-col items-center mt-5">
            <Button type="submit" text="Send It" otherStyles="bg-purple-800 text-purple-100 hover:bg-inherit hover:text-purple-800" handleClick={()=>{}} />

          </div>
        </form>
      </div>
    </main>
  );
}

export default Contact;
