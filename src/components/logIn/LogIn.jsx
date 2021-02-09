import React from "react";
import css from "./LogIn.module.css";
import { Formik, Field, Form, useField } from "formik";
import * as Yup from "yup";
import { Redirect } from "react-router-dom";

const LogIn = (props) => {
  const onSubmit = (data) => {
    props.login(data.login, data.password, data.rememberMe);
  };

  if (props.isAuth) {
    return <Redirect to="/profile" />;
  }

  return (
    <div>
      <h1 className={css.title}>LogIn</h1>
      <LogInForm onSubmit={onSubmit} {...props} />
    </div>
  );
};

export class LogInForm extends React.Component {
  render() {
    return (
      <Formik
        initialValues={{ login: "", password: "", rememberMe: false }}
        onSubmit={(data, { setSubmitting, resetForm }) => {
          setSubmitting(true);
          this.props.onSubmit(data);
          setSubmitting(false);
          resetForm();
        }}
        validationSchema={Yup.object({
          login: Yup.string().min(2).required(),
          password: Yup.string().min(2).required(),
        })}
      >
        {({ values, handleSubmit, isSubmitting }) => {
          return (
            <Form className={css.form} onSubmit={handleSubmit}>
              <CustomInput
                name="login"
                placeholder="Login"
                type="text"
                label="Login"
              />
              <CustomInput
                name="password"
                placeholder="Password"
                type="password"
                label="Password"
              />
              <CustomInput
                name="rememberMe"
                type="checkbox"
                label="Remember me"
              />

              {this.props.hasServerLoginError ? (
                <div className={css.error}>
                  {this.props.serverLoginErrorMessage}
                </div>
              ) : (
                ""
              )}
              <button
                name="submit"
                type="submit"
                className={css.btn}
                disabled={isSubmitting}
              >
                Login
              </button>
              <pre>{JSON.stringify(values)}</pre>
            </Form>
          );
        }}
      </Formik>
    );
  }
}

const CustomInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label>
        <Field {...field} {...props} /> {label}
      </label>
      {meta.touched && meta.error ? (
        <div className={css.error}>{meta.error}</div>
      ) : (
        ""
      )}
    </>
  );
};

export default LogIn;
