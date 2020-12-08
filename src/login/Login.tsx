import React, { useState } from "react";
import InputField from "custom-fields/input-field/InputField";
import { Form, Formik } from "formik";
import style from "./Login.module.scss";
const Yup = require("yup");

const schema = Yup.object().shape({
  email: Yup.string().required(),
  password: Yup.number().required(),
});

const Login: React.FC = () => {
  const [initialValues] = useState(() => ({
    email: "",
    password: "",
  }));

  const handleLogin = () => {
    console.log("Login");
  };
  return (
    <div className={`${style.wrapper} flex-center flex-column`}>
      <h1 className="font-weight-300">Login form</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={handleLogin}
        validationSchema={schema}
      >
        {(formikProps) => {
          return (
            <Form>
              <InputField name="email" placeholder="Email" />
              <InputField
                name="password"
                placeholder="Password"
                type="password"
              />
              <button type="submit">Login</button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default Login;
