import React from "react";
import styles from "./Users.module.scss";
import { Formik, Form, Field } from "formik";
import {useTranslation} from 'react-i18next';
const yup = require("yup");

const SignupSchema = yup.object().shape({
  firstName: yup
    .string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  lastName: yup
    .string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: yup.string().email("Invalid email").required("Required"),
  password: yup.string().min(8, "Too Short!").required("Required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Required"),
});

export default function Users() {
  const {t} = useTranslation();
  const handleReset = () => {
    if (!window.confirm("Reset?")) {
      throw new Error("Cancel reset");
    }
  };

  return (
    <>
      <h1 className={styles.textCenter}>{t('Users.signup')}</h1>
      <div className={styles.user}>
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            confirmPassword: "",
          }}
          validationSchema={SignupSchema}
          onSubmit={(values) => {
            // same shape as initial values
            console.log(values);
          }}
          onReset={handleReset}
        >
          {({ errors, touched }) => (
            <Form>
              <label>{t('Users.firstName')}</label>
              <Field name="firstName" type="text" />
              {errors.firstName && touched.firstName ? (
                <div className={styles.error}>{errors.firstName}</div>
              ) : null}

              <label>{t('Users.lastName')}</label>
              <Field name="lastName" type="text" />
              {errors.lastName && touched.lastName ? (
                <div className={styles.error}>{errors.lastName}</div>
              ) : null}

              <label>{t('Users.email')}</label>
              <Field name="email" type="email" />
              {errors.email && touched.email ? (
                <div className={styles.error}>{errors.email}</div>
              ) : null}

              <label>{t('Users.password')}</label>
              <Field name="password" type="password" />
              {errors.password && touched.password ? (
                <div className={styles.error}>{errors.password}</div>
              ) : null}

              <label>{t('Users.confPassword')}</label>
              <Field name="confirmPassword" type="password" />
              {errors.confirmPassword && touched.confirmPassword ? (
                <div className={styles.error}>{errors.confirmPassword}</div>
              ) : null}

              <button type="submit">Submit</button>
              <button type="reset">Reset</button>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
}
