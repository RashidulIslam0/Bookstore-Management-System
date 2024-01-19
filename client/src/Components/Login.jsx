import React from "react";
import "../css/Login.css";
const Login = () => {
  return (
    <>
      <div className=" w-50 mx-auto  my-5">
        <h2>Login</h2>
        <form className="login-form">
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Email"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Password"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="role">Role:</label>
            <select className="form-control" id="role" name="role">
              <option value="admin">Admin</option>
              <option value="user">Student</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
