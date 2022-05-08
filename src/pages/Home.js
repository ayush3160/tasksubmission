import React from "react";
import Data from "../Data.json";
import Modal from "../component/Modal";
import { useState } from "react";

export default function Home() {

    const [show,setShow] = useState(false)


    const handleShow = (a) => {
        if(a == 1){setShow(true);}
        if(a == 2){setShow(false);}
    }

  return (
    <div className="container-fluid">
      <div
        className="card mx-auto my-5"
        style={{ width: "60%", backgroundColor: "transparent", border: "none" }}
      >
        <h1 style={{ color: "rgba(178,180,183,255)" }}>Hello Jane</h1>
        <p style={{ fontSize: "20px", color: "grey" }}>
          How are you doing today ? Would You Like to share something with the
          community
        </p>

        {/* Create Post Section */}


        <button
          className="card my-4"
          style={{ backgroundColor: "rgba(39,41,45,255)", textAlign: "left" }}
          onClick={() => {
            handleShow(1)
          }}
        >
          <h4 className="mx-3 my-3" style={{ color: "rgba(178,180,183,255)" }}>
            💬 Create post
          </h4>
          <div
            className="card mx-3 my-1"
            style={{
              height: "80px",
              width: "95%",
              backgroundColor: "rgba(19,19,25,255)",
            }}
          >
            <p
              className="mx-3 my-auto"
              style={{ fontSize: "20px", color: "grey" }}
            >
              How Are You Feeling Today ?
            </p>
          </div>
          <button
            style={{ width: "20%", marginLeft: "70%" }}
            className="btn btn-primary my-3"
          >
            Post
          </button>
        </button>


        { /* All Different Posts From the Data json which can also be fetched using the api.*/}

        {Data.map((value, index) => {
          return (
            <>
              <button
                className="card my-4"
                style={{
                  backgroundColor: "rgba(39,41,45,255)",
                  textAlign: "left",
                }}
                onClick={() => {
                    handleShow(1)
                }}
              >
                <h5
                  className="mx-3"
                  style={{ color: "rgba(178,180,183,255)", marginTop: "10px" }}
                >
                  {value.name}
                </h5>
                <p className="mx-3" style={{ color: "rgba(178,180,183,255)" }}>
                  {value.time} mins ago
                </p>
                <div
                  className="card mx-3 my-1"
                  style={{
                    height: "100px",
                    width: "95%",
                    backgroundColor: "rgba(19,19,25,255)",
                  }}
                >
                  <p
                    className="mx-3 my-auto"
                    style={{ fontSize: "20px", color: "grey" }}
                  >
                    {value.post}
                  </p>
                </div>
                <p className="mx-3" style={{ color: "rgba(178,180,183,255)" }}>
                  💬 {value.comments} comments
                </p>
              </button>
            </>
          );
        })}

        <Modal show = {show} handleShow = {handleShow}/>

      </div>
    </div>
  );
}
