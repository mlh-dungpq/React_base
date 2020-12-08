import React from "react";
import { useField } from "formik";
import styles from "./InputField.module.scss";

interface Props {
  name: string;
  type?: string;
  placeholder?: string;
}

const defaultProps: Props = {
  name: "",
  type: "text",
  placeholder: "",
};

const InputField: React.FC<Props> = (props) => {
  const [field, { error, touched }] = useField({
    name: props.name,
    type: props.name,
  });
  return (
    <div>
      <input {...field} {...props} />
      {error && touched && (
        <div className={`${styles.error} font-10`}>{error}</div>
      )}
    </div>
  );
};

InputField.defaultProps = defaultProps;

export default InputField;
