import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
const AddStudent = () => {
  const [formData, setFormData] = useState({
    roll: "",
    name: "",
    grade: "",
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:3000/", formData);
      console.log("Server response:", response.data);
    } catch (error) {
      console.error("Error during login:", error);
    }

    console.log("Form submitted:", formData);
  };
  return (
    <>
      <div className=" w-50 mx-auto  my-5">
        <h2>Add Student</h2>
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Roll No:</label>
            <input
              type="text"
              className="form-control"
              id="roll"
              placeholder="Enter Your Roll"
              name="roll"
              value={formData.roll}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Neme:</label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Enter Your Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Grade:</label>
            <input
              type="text"
              className="form-control"
              id="grade"
              name="grade"
              placeholder="Enter Your Phone Grade"
              value={formData.grade}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
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

export default AddStudent;
