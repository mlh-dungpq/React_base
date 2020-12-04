import React from 'react';
import './Users.scss';
import {useFormik} from 'formik';

const validate = (values: any) => {
  const errors = {
    firstName: '',
    lastName: '',
    email: ''
  };
  if (!values.firstName) {
    errors.firstName = 'Required';
  } else if (values.firstName.length > 15) {
    errors.firstName = 'Must be 15 characters or less';
  }

  if (!values.lastName) {
    errors.lastName = 'Required';
  } else if (values.lastName.length > 20) {
    errors.lastName = 'Must be 20 characters or less';
  }

  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  return errors;
};

export default function Users() {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: ''
    },

    onSubmit: values => {
      console.log('form data: ', values);
    },

    validate
  });

  console.log('form formik ', formik.values);

  return (
    <div className='user'>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label htmlFor="firstName">Full Name</label>
          <input 
            type='text' 
            id="firstName" 
            name='firstName' 
            onChange={formik.handleChange} 
            value={formik.values.firstName}
            onBlur={formik.handleBlur}
          />
          {formik.errors.firstName && formik.touched.firstName && (
            <p className='error'>{formik.errors.firstName}</p>
          )}
        </div>

        <label htmlFor="lastName">Last Name</label>
        <input
          id="lastName"
          name="lastName"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.lastName}
        />
        {formik.touched.lastName && formik.errors.lastName ? (
          <p className='error'>{formik.errors.lastName}</p>
        ) : null}

        <label htmlFor="email">Email Address</label>
        <input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email ? (
          <p className='error'>{formik.errors.email}</p>
        ) : null}

        <div>
          <button type='submit'>Submit</button>
        </div>
      </form>
    </div>
  )
}
