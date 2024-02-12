import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import ThePulseLoader from "../../components/pulse-loader";
import { signInUser } from "../../services/auth-Service";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import authSlice, { authSliceActions } from "../../slices/auth-slice";

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required."),
});

const initialValues = {
  email: "",
  password: "",
  rememberMe: false,
};

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [showPassword, setShowPassword] = useState(false);

  const handleFormSubmit = async (values, { setSubmitting, resetForm }) => {
    await signInUser(values.email, values.password)
      .then((user) => {
        navigate("/home");
        dispatch(
          authSliceActions.replaceLoggedInState({ user: user, token: "" })
        );
      })
      .catch((e) => {
        // show error message
        console.log(e.message);
      });
    setSubmitting(false);
  };

  return (
    <div className="flex flex-col items-center justify-center h-full text-white">
      <div className="max-w-md w-full p-6  rounded-md shadow-md flex flex-col items-start">
        <h2 className="text-2xl font-semibold tracking-wider mb-4">
          Sign in to your account
        </h2>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleFormSubmit}
        >
          {({ errors, touched, isSubmitting, values, setFieldValue }) => (
            <Form className="w-full">
              <div className="mb-4 flex flex-col items-start gap-y-1">
                <label
                  htmlFor="email"
                  className="text font-normal tracking-wider"
                >
                  Email
                </label>
                <Field
                  placeholder="eg. pasang@gmail.com"
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 px-4 py-3 w-full rounded-md bg-zinc-800 "
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>

              <div className="mb-6 flex flex-col items-start gap-y-1">
                <label
                  htmlFor="password"
                  className="text font-normal tracking-wider"
                >
                  Password
                </label>
                <div className="w-full relative">
                  <Field
                    placeholder="eg. **********"
                    type={showPassword ? "text" : "password"}
                    id="password"
                    name="password"
                    className="mt-1 px-4 pr-10 py-3 w-full rounded-md bg-zinc-800"
                  />
                  <FontAwesomeIcon
                    onClick={() => {
                      setShowPassword(!showPassword);
                    }}
                    className="absolute right-3 top-5"
                    icon={showPassword ? faEyeSlash : faEye}
                  ></FontAwesomeIcon>
                </div>

                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>

              <div className="mb-4 flex flex-col items-start">
                <label className="flex items-center relative">
                  <Field
                    type="checkbox"
                    id="rememberMe"
                    name="rememberMe"
                    className="mr-3 h-7 w-7 appearance-none checked:bg-red-500 checked:border-white border border-solid"
                  />
                  <span className="text tracking-wider">Keep me signed in</span>
                  {values.rememberMe && (
                    <span className="absolute left-1.5 top-0.5 ">
                      <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>
                    </span>
                  )}
                </label>
              </div>

              <button
                type="submit"
                className="bg-red-500 w-full text-white p-2 rounded-lg hover:bg-red-600 focus:outline-none focus:shadow-outline-blue"
              >
                {isSubmitting ? <ThePulseLoader></ThePulseLoader> : "Sign In"}
              </button>
            </Form>
          )}
        </Formik>
        <p className="text-sm my-5 text-zinc-600 tracking-wider">
          {" "}
          Forgot your password?
        </p>

        <div className="mt-4 flex flex-row w-full justify-center">
          <p className="text-sm">
            Create a new account?{" "}
            <a href="/register" className="text-red-500">
              Sign Up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
