import React from "react";
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <div>
      <Link to={"/"}>
        <button className="btn btn-primary">Back</button>
      </Link>
      <h1>SignIn</h1>{" "}
    </div>
  );
};

export default SignIn;
