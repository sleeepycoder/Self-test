// Render Prop
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const Basic = () => (
  <div>
    <h1>Any place in your app!</h1>
    <Formik 
      initialValues={{ email: '', password: '' }}
      validate={values => {
        const errors = {};
        if (!values.email) {
          errors.email = 'Required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting }) => (
        <Form className='flex justify-center flex-col my-4 p-4  items-center gap-2 mx-[480px] border rounded-lg h-80 bg-slate-400' >
          <Field type="email" name="email" className='border border-red-500 rounded-md' />
          <ErrorMessage name="email" component="div" />
          <Field type="password" name="password" className='border border-red-500 rounded-md' />
          <ErrorMessage name="password" component="div" />
          <button type="submit" disabled={isSubmitting} className='bg-red-900 w-1/4 border rounded-lg'>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  </div>
);

export default Basic;