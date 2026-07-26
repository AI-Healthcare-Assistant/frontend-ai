import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../api/authapi";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (event) => {
    event.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Please enter your email and password.");
      return;
    }

    try {
      setLoading(true);
      const token = await loginUser({ email, password });
      localStorage.setItem("token", token.access_token);
      localStorage.setItem("role", token.role);
      navigate("/dashboard", { replace: true });
    } catch (requestError) {
      setError(
        requestError.response?.data?.detail ||
        "Unable to sign in. Check your credentials and try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-100 to-cyan-100 flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-cyan-700 mb-8">Welcome Back</h2>
        {error && (
          <div role="alert" className="mb-5 rounded-lg bg-red-100 p-3 text-center text-red-700">
            {error}
          </div>
        )}
        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} autoComplete="email" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none" placeholder="Enter your email" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} autoComplete="current-password" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none" placeholder="Enter your password" />
          </div>
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="rounded text-cyan-600 focus:ring-cyan-500" />
              <span className="text-gray-600">Remember me</span>
            </label>
            <a href="#" className="text-cyan-600 hover:text-cyan-700 font-medium">Forgot password?</a>
          </div>
          <button type="submit" disabled={loading} className="w-full bg-cyan-600 text-white py-3 rounded-xl font-semibold hover:bg-cyan-700 transition duration-300 shadow-lg shadow-cyan-200 disabled:cursor-not-allowed disabled:opacity-70">
            {loading ? "Signing In..." : "Sign In"}
          </button>
        </form>
        <p className="text-center mt-6 text-gray-600">
          Don't have an account? <Link to="/register" className="text-cyan-600 font-semibold hover:underline">Sign up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
