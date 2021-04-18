import React, { useState } from "react";

const Login = ({ showModalLogin, handleLogin }) => {
  return (
    <div>
      <div className="modal">
        <div className="modal-content">
          z
          <span className="close" onClick={() => showModalLogin()}>
            X
          </span>
          <h1 style={{ marginBottom: "40px" }}>LOGIN</h1>
          <div className="form-group">
            <input type="text" className="custom-input" placeholder="Email" />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="custom-input"
              placeholder="Password"
            />
          </div>
          <div className="form-group" style={{ marginTop: "50px" }}>
            <button className="button" onClick={() => handleLogin()}>
              Login
            </button>
          </div>
          <p style={{ color: "#B1B1B1", fontSize: "18px" }}>
            Don't have an account ? Klik{" "}
            <span style={{ fontWeight: "900", cursor: "pointer" }}>Here</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
