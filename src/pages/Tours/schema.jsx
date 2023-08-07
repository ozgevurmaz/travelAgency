import * as Yup from 'yup';

const schema = Yup.object().shape({
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
});

export default schema