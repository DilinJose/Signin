import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { BiLogoFacebook, BiLogoLinkedin } from "react-icons/bi";
import { AiOutlineGooglePlus } from "react-icons/ai";

const SignUp = () => {
  const initialValues = { name: "", email: "", pswd: "" };
  const validationSchema = Yup.object({
    name: Yup.string()
      .max(15, "Must be 15 characters or less")
      .required("Required"),
    email: Yup.string().email("Invalid email address").required("Required"),
    pswd: Yup.string().required("Required"),
  });
  return (
    <div className="container">
      <div className="signin-card">
        <div>
          <h1>Wellcome Back</h1>
          <p>
            to keep connected with us please <br /> login with your personal
            info
          </p>
        </div>
      </div>
      <div className="signup-card">
        <div>
          <div>
            <h2>Create Account</h2>
          </div>
          <div className="flex-card">
            <div>
              <a href="#" className=".link-icons">
                <BiLogoFacebook className="link-icons" />
              </a>
            </div>
            <div>
              <a href="#">
                <AiOutlineGooglePlus className="link-icons" />
              </a>
            </div>
            <div>
              <a href="#">
                <BiLogoLinkedin className="link-icons" />
              </a>
            </div>
          </div>
          <div>
            <p>Or use your email for registration:</p>
          </div>
        </div>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          <Form>
            <div>
              <Field
                className="form-control"
                name="name"
                type="text"
                placeHolder="Name"
              />
              <ErrorMessage name="name" />
            </div>

            <div>
              <Field
                className="form-control"
                name="email"
                type="email"
                placeHolder="Email"
              />
              <ErrorMessage name="email" />
            </div>

            <div>
              <Field
                className="form-control"
                name="pswd"
                type="password"
                placeHolder="Password"
              />
              <ErrorMessage name="pswd" />
            </div>
            <div>
              <button className="button" type="submit">
                Sign Up
              </button>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default SignUp;
