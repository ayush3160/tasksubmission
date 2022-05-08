import React from "react";
import { useState } from "react";

export default function Modal(props) {

  const [type, setType] = useState("register");

  // Type will decide whether the model is of login or register

  if (props.show === false) {
    return <></>;
  } else {
    if (type === "register") {
      // Model is register model
      return (
        <div className="modal-1">
          <div
            className="card mx-auto"
            style={{
              width: "50%",
              backgroundColor: "rgba(19,19,25,255)",
              border: "2px solid rgba(92,92,92,255)",
              borderRadius: "5%",
            }}
          >
            <button
              className="my-4"
              style={{
                float: "right",
                width: "30px",
                height: "30px",
                borderRadius: "50%",
                marginLeft: "85%",
                backgroundColor: "rgba(39,41,45,255)",
                border: "none",
              }}
              onClick={() => {
                setType("register")
                props.handleShow(2);
              }}
            >
              X
            </button>
            <h5 className="text-center" style={{ color: "rgba(80,82,86,255)" }}>
              Sign Up
            </h5>
            <h4 className="text-center" style={{ color: "white" }}>
              Create an account to continue
            </h4>
            <p className="mx-2 my-3" style={{ color: "rgba(178,180,183,255)" }}>
              Email
            </p>
            <input
              className="mx-auto"
              placeholder="Enter your Email or Username"
              style={{
                width: "90%",
                backgroundColor: "transparent",
                height: "40px",
                border: "1px solid rgba(92,92,92,255)",
              }}
            />
            <p className="mx-2 my-3" style={{ color: "rgba(178,180,183,255)" }}>
              UserName
            </p>
            <input
              className="mx-auto"
              type={"password"}
              placeholder="Choose a prefered password"
              style={{
                width: "90%",
                backgroundColor: "transparent",
                height: "40px",
                border: "1px solid rgba(92,92,92,255)",
              }}
            />
            <p className="mx-2 my-3" style={{ color: "rgba(178,180,183,255)" }}>
              Password
            </p>
            <input
              className="mx-auto"
              type={"password"}
              placeholder="Set a strong password"
              style={{
                width: "90%",
                backgroundColor: "transparent",
                height: "40px",
                border: "1px solid rgba(92,92,92,255)",
              }}
            />
            <button
              className="btn btn-primary my-4 mx-auto"
              style={{ width: "90%" }}
              onClick={() => {
                props.handleShow(2);
              }}
            >
              Continue
            </button>
            <p className="mx-2" style={{ color: "rgba(178,180,183,255)" }}>
              Already Have an account?
              <button
                style={{
                  border: "none",
                  backgroundColor: "transparent",
                  color: "whitesmoke",
                }}
                onClick={() => {
                  setType("login");
                }}
              >
                Login{"->"}
              </button>
            </p>
          </div>
        </div>
      );
    } else {
      return (
        <div className="modal-1">
          <div
            className="card mx-auto"
            style={{
              width: "50%",
              backgroundColor: "rgba(19,19,25,255)",
              border: "2px solid rgba(92,92,92,255)",
              borderRadius: "5%",
            }}
          >
            <button
              className="my-4"
              style={{
                float: "right",
                width: "30px",
                height: "30px",
                borderRadius: "50%",
                marginLeft: "85%",
                backgroundColor: "rgba(39,41,45,255)",
                border: "none",
              }}
              onClick={() => {
                setType("register")
                props.handleShow(2);
              }}
            >
              X
            </button>
            <h5 className="text-center" style={{ color: "rgba(80,82,86,255)" }}>
              Welcome Back
            </h5>
            <h4 className="text-center" style={{ color: "white" }}>
              Login to continue
            </h4>
            <p className="mx-2 my-3" style={{ color: "rgba(178,180,183,255)" }}>
              Email or Username
            </p>
            <input
              className="mx-auto"
              placeholder="Enter your Email or Username"
              style={{
                width: "90%",
                backgroundColor: "transparent",
                height: "40px",
                border: "1px solid rgba(92,92,92,255)",
              }}
            />
            <p className="mx-2 my-3" style={{ color: "rgba(178,180,183,255)" }}>
              Password
            </p>
            <input
              className="mx-auto"
              type={"password"}
              placeholder="Enter Your Password"
              style={{
                width: "90%",
                backgroundColor: "transparent",
                height: "40px",
                border: "1px solid rgba(92,92,92,255)",
              }}
            />
            <button
              className="btn btn-primary my-4 mx-auto"
              style={{ width: "90%" }}
              onClick={() => {
                props.handleShow(2);
              }}
            >
              Login Now
            </button>
            <p className="mx-2" style={{ color: "rgba(178,180,183,255)" }}>
              Not Registered Yet?
              <button
                style={{
                  border: "none",
                  backgroundColor: "transparent",
                  color: "whitesmoke",
                }}
                onClick={() => {
                  setType("register");
                }}
              >
                Register{"->"}
              </button>
            </p>
          </div>
        </div>
      );
    }
  }
}
