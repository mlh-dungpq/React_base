import React from "react";
import { useField } from "formik";
import styles from "./InputField.module.scss";

interface Props {
  name: string;
  type?: string;
  placeholder?: string;
  label?: string;
}

const defaultProps: Props = {
  name: "",
  type: "text",
  placeholder: "",
  label: "",
};

const InputField: React.FC<Props> = (props) => {
  const [field, { error, touched }] = useField(props);
  return (
    <div>
      {props.label && <label htmlFor={props.name}>{props.label}</label>}
      <div className={styles.formControl}>
        <input {...field} {...props} className={styles.formInput} />
      </div>
      {error && touched && (
        <div className={`${styles.error} font-10`}>{error}</div>
      )}
    </div>
  );
};

InputField.defaultProps = defaultProps;

export default InputField;
