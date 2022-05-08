import React from 'react'
import { Link } from "react-router-dom";

export default function Login() {
    return (
        <div className="container-fluid">
      <div
        className="card mx-auto"
        style={{
          width: "30%",
          marginTop: "130px",
          border: "2px solid rgba(92,92,92,255)",
          backgroundColor: "rgba(39,41,45,255)",
          borderRadius: "5%",
        }}
      >
        <h5
          className="text-center my-3"
          style={{ color: "rgba(80,82,86,255)" }}
        >
          Welcome Back
        </h5>
        <h5 className="text-center" style={{ color: "white" }}>
          Log in to your account
        </h5>
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
          Password <span style={{ float: "right" }}>Forgot Password?</span>
        </p>
        <input
          className="mx-auto"
          type={"password"}
          placeholder="Enter your Password"
          style={{
            width: "90%",
            backgroundColor: "transparent",
            height: "40px",
            border: "1px solid rgba(92,92,92,255)",
          }}
        />
        <Link
          className="btn btn-primary my-4 mx-auto"
          style={{ width: "90%" }}
          to="/"
        >
          Login Now
        </Link>
        <p className="mx-2" style={{ color: "rgba(178,180,183,255)" }}>
          Not Registered Yet?
          <button
            style={{
              border: "none",
              backgroundColor: "transparent",
              color: "whitesmoke",
            }}
          >
            Register{"->"}
          </button>
        </p>
      </div>
    </div>
    )
}