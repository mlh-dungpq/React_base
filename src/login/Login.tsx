import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { Form, Formik } from "formik";
import InputField from "_custom-fields/input-field/InputField";
import style from "./Login.module.scss";
import { login } from "_services/auth/authActions";
import { useDispatch, useSelector } from "react-redux";
import { RootStore } from "store";
const Yup = require("yup");

const schema = Yup.object().shape({
  email: Yup.string().required(),
  password: Yup.string().required(),
});

const Login: React.FC = () => {
  const authState = useSelector((state: RootStore) => state.auth);
  const dispatch = useDispatch();
  const [initialValues] = useState(() => ({
    email: "",
    password: "",
  }));

  const handleLogin = (data: any) => {
    dispatch(login(data));
  };

  if (authState.token) {
    return <Redirect to="/account" />;
  }
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
