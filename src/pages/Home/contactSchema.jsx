import * as Yup from 'yup';

const contactSchema = Yup.object().shape({
  name: Yup.string()
  .min(3, 'Name must be more than 3 letter')
  .required('Name is required'),
  email: Yup.string()
  .email('Invalid email')
  .required('Email is required'),
  phone: Yup.string()
  .required('Phone Number is required')
  .min(9, 'Invalid phone number')
  .matches(/^\+?[0-9]+$/, 'Invalid phone number'),
  date: Yup.date()
    .test('is-later-than-now', 'Date must be later than now', (value) => {
      const now = new Date();
      return value && value > now;
    }),
});

export default contactSchema