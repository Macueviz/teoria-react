import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup'
// MODELS //
import { User } from '../../../models/user.class';
import { ROLES } from '../../../models/roles.enum';

const RegisterFormik = () => {

  let user = new User();

  const submit = (values) => {
    alert('Register user')
  }

  const registerSchema = Yup.object().shape(
    {
      username: Yup.string()
          .min(6, 'Name too short')
          .max(12, 'Username too long')
          .required(),
      email: Yup.string()
          .email('Invalid email format')
          .required('Email is required'),
      role: Yup.string().oneOf([ROLES.USER, ROLES.ADMIN],' You must select a Role: User / Admin').required(),
      password: Yup.string()
          .min(8, 'Password too short')
          .required('Password is required'),
      confirm: Yup.string()
            .when("password",{ //variable a comparar
              // Condicion Valor existe y < 0
              is: value => (value && value.length > 0 ? true : false),
              //Si coincide -> oneOf compara con la lista que le pasemos
              then: Yup.string().oneOf( 
                //Lista que se compara (string de password)
                [Yup.ref("password")], 
                '¡Password must match!' //Si no se cumple
              )
            }).required()

    }
  )

  const initialCredentials = {
    username: '',
    password: '',
    confirm: '',
    role: ROLES.USER
  }

  return (
    <div>
      <h5> Register form</h5>
      <Formik
      initialValues={initialCredentials}
      // *** YUP Validation Schema ***
      validationSchema={registerSchema}
      onSubmit={async (values) => {
        await new Promise((r) => setTimeout(r,1000));
        alert(JSON.stringify(values,null,2));
      }}
      >
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
          <label htmlFor='username'>Username:</label>
          <Field id='username'
                type='text'
                name='username'
                placeholder='Insert a username'/>

            {/*Username errors */}
          {errors.username && touched.username && 
          (<ErrorMessage component='div' name="username" />)
          }

          <label htmlFor='email'>Email:</label>
          <Field id='email'
            type='email'
            name='email'
            placeholder='example@email.com'/>

            {/*Email errors */}
          {errors.email && touched.email && 
          (<ErrorMessage component='div' name="email" />)
          }

          <label htmlFor='password'>Password:</label>
          <Field 
            id='password'
            type='password'
            name='password'
            placeholder='Insert your password'
          />
            {/*Password errors */}
          {errors.password && touched.password && 
          (<ErrorMessage component='div' name="password" />)
          }

          <label htmlFor='confirm'>Confirm password:</label>
          <Field 
            id='confirm'
            type='password'
            name='confirm'
            placeholder='Confirm your password'
          />
            {/*Confirm password errors */}
          {errors.confirm && touched.confirm && 
          (<ErrorMessage component='div' name="confirm" />)
          }

          <button type='submit'>Register Account</button>
          {isSubmitting ? (<p>Sending your credentials...</p>): null}
        </Form>  

      )}    
      </Formik>
    </div>
  );
};



export default RegisterFormik;
