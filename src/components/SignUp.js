import React from "react";
import { Formik, Field, Form, ErrorMessage, useFormikContext } from "formik";
import * as Yup from "yup";
import { BiLogoFacebook, BiLogoLinkedin } from "react-icons/bi";
import { AiOutlineGooglePlus } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { RiLockPasswordLine } from "react-icons/ri";
import logo from "../assets/img/logo.png";
import { Link } from "react-router-dom";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
const phoneRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])/;

const SignUp = () => {
  const style = {
    backgroundColor: "rgb(233, 233, 233)",
  };

  const initialValues = { name: "", email: "", pswd: "" };
  const validationSchema = Yup.object({
    name: Yup.string()
      .min(4, "Minimum 4 characters or more")
      .max(20, "Maximum 20 characters or less")
      .required("Required"),
    // email: Yup.string().email("Invalid email address").required("Required"),
    email: Yup.string()
      .matches(emailRegex, "Invalid email address")
      .required("Required"),
    pswd: Yup.string()
      .matches(
        phoneRegex,
        "Must contain at least one Capitale letter, symbol and number"
      )
      .required("Required"),
  });

  return (
    <div className="container-fluid card">
      <div className="main-card">
        {/* <div> */}
        <div className="signin-card">
          <div className="signin-card-logo p-3">
            <img src={logo} alt="Logo" width={50} />
            <h6 className="ps-2 pt-1" style={{color:"white"}}>Diprella</h6>
          </div>
          <div className="d-flex justify-content-center align-item-center h-100 ">
            <div className="signin-card-welcome">
              <h2>Welcome Back!</h2>
              <p>
                to keep connected with us please <br /> login with your personal
                info
              </p>
              <button className="button-signin">
                <Link
                  style={{ textDecoration: "none", color: "white" }}
                  to={"/signin"}
                >
                  SIGN IN
                </Link>
                {/* SIGN IN */}
              </button>
            </div>
          </div>
        </div>
        <div className="signup-card ">
          <div>
            <div className="m-3">
              <h2>Create Account</h2>
            </div>
            <div className="link-card m-3 d-flex justify-content-center align-item-center">
              <div className="social-border m-2">
                <a href="#" className="link-icon">
                  <BiLogoFacebook className="link-icons" />
                </a>
              </div>
              <div className="social-border m-2">
                <a href="#" className="link-icon">
                  <AiOutlineGooglePlus className="link-icons" />
                </a>
              </div>
              <div className="social-border m-2">
                <a href="#" className="link-icon">
                  <BiLogoLinkedin className="link-icons" />
                </a>
              </div>
            </div>

            <div className="mt-3 d-flex justify-content-center align-item-center">
              <p>Or use your email for registration:</p>
            </div>
          </div>
          <div className="form-card">
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={(values, { setSubmitting, resetForm }) => {
                setTimeout(() => {
                  console.log("values",values);
                  setSubmitting(false);
                  resetForm();
                }, 400);
              }}
            >
              {(formik) => {
                return (
                  <Form>
                    <div className="m-3 input-card-div">
                      {!formik.values.name && (
                        <div className="input-card">
                          <BsPerson />
                        </div>
                      )}
                      {/* <div className="input-card">
                        <BsPerson />
                      </div> */}
                      <Field
                        className="form-control input-icon"
                        name="name"
                        type="text"
                        placeholder="Name"
                        style={style}
                      />
                      <ErrorMessage
                        name="name"
                        component="div"
                        className="err-msg"
                      />
                    </div>

                    <div className="m-3 input-card-div">
                      {!formik.values.email && (
                        <div className="input-card">
                          <HiOutlineMail />
                        </div>
                      )}
                      <Field
                        className="form-control"
                        name="email"
                        type="email"
                        placeholder="Email"
                        style={style}
                      />
                      <ErrorMessage
                        name="email"
                        component="div"
                        className="err-msg"
                      />
                    </div>

                    <div className="m-3 input-card-div">
                      {!formik.values.pswd && (
                        <div className="input-card">
                          <RiLockPasswordLine />
                        </div>
                      )}
                      <Field
                        className="form-control"
                        name="pswd"
                        type="password"
                        placeholder="Password"
                        style={style}
                      />
                      <ErrorMessage
                        name="pswd"
                        component="div"
                        className="err-msg"
                      />
                    </div>
                    <div className="m-3 d-flex justify-content-center align-item-center ">
                      <button
                        className="button-signup"
                        type="submit"
                        disabled={!(formik.isValid && formik.dirty)}
                      >
                        SIGN UP
                      </button>
                    </div>
                  </Form>
                );
              }}
            </Formik>
          </div>
        </div>
        {/* </div> */}
      </div>
    </div>
  );
};

export default SignUp;
