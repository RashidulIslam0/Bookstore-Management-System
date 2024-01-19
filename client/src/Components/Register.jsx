import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <>
      <div className=" w-50 mx-auto  my-5">
        <h2>Register</h2>
        <form className="login-form">
          <div className="form-group">
            <label htmlFor="email">Neme:</label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Enter Your Name"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Phone:</label>
            <input
              type="text"
              className="form-control"
              id="phone"
              placeholder="Enter Your Name"
              required
            />
          </div>
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
            Register
          </button>
        </form>
        <p className="mt-3">
          Already registered? Please <Link to="/login">login</Link>.
        </p>
      </div>
    </>
  );
};

export default Register;
