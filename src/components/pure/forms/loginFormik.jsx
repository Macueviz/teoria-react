import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';


const loginSchema = Yup.object().shape(
  {
    email: Yup.string()
          .email('Invalid email format')
          .required('Email is required'),
    password: Yup.string().required('Password is required')
  }
  )
  
const LoginFormik = () => {
  const initialCredentials = {
    email: '',
    password: ''
  }

  return (
    <div>
      <h4>Login Form</h4>
      <Formik
        // *** Initial values that the form will take ***
        initialValues={initialCredentials}
        // *** YUP Validation Schema ***
        validationSchema={loginSchema}
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r,1000));
          alert(JSON.stringify(values,null,2));
        }}
      >

      {/* We obtain props from formik */}
      {(
        {
          values,
          touched,
          errors,
          isSubmitting,
          handleChange,
          handleBlur
        }) => (
          <Form>
            <label htmlFor='email'>Email:</label>
            <Field id='email' type='email' name='email' placeholder='example@email.com'/>

              {/*Email errors */}
            {errors.email && touched.email && 
              (<div>
                <ErrorMessage component='div' name="email" />
              </div>
              )
            }

            <label htmlFor='email'>Password:</label>
            <Field 
              id='password'
              type='password'
              name='password'
              placeholder='your password'
            />
              {/*Password errors */}
            {errors.password && touched.password && 
              (<div>
                <ErrorMessage component='div' name="password" />
              </div>
              )
            }
            <button type='submit'>Login</button>
            </Form>
        )
      }
      </Formik>
    </div>
  );
};


LoginFormik.propTypes = {

};


export default LoginFormik;
