/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../../config/axiosConfig";
import toast from "react-hot-toast";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const data = {
    name,
    email,
    password,
  };

  const handleSubmit = async (e: React.FormEvent) => {
    const toastloadingId = toast.loading("Please wait....");
    e.preventDefault();
    try {
      const response = await axios.post("/registerAdmin", data);
      toast.success("Register Successfully");
      console.log(response.data.data);
      navigate("/login");
    } catch (error: any) {
      console.log(error.response.data.message);
    } finally {
      toast.dismiss(toastloadingId);
    }

    // Add registration logic here
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#0a0f2d]">
      <div className="bg-white p-6 rounded-lg shadow-md w-[350px]">
        <h2 className="text-2xl font-semibold text-center mb-4">Register</h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {/* Name */}
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="p-2 border rounded-md"
          />

          {/* Email */}
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="p-2 border rounded-md"
          />

          {/* Password */}
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="p-2 border rounded-md"
          />

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition"
          >
            Register
          </button>
        </form>

        {/* Already have an account? */}
        <p className="text-sm text-center mt-4">
          Already have an account?{" "}
          <span
            className="text-blue-500 cursor-pointer"
            onClick={() => navigate("/login")}
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
};

export default Register;
