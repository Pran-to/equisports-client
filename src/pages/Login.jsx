import  { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import Swal from 'sweetalert2';

const Login = () => {
  const { loginUser, googleLogin } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    loginUser(email, password)
      .then(() => {
        Swal.fire({ title: 'Welcome Back!', text: 'Login successful.', icon: 'success', timer: 1500, showConfirmButton: false });
        navigate(from, { replace: true });
      })
      .catch((err) => {
        Swal.fire({ title: 'Login Failed!', text: err.message, icon: 'error', confirmButtonColor: '#ef4444' });
      });
  };

  const handleGoogleSignIn = () => {
    googleLogin()
      .then(() => {
        Swal.fire({ title: 'Welcome!', text: 'Google authentication successful.', icon: 'success', timer: 1500, showConfirmButton: false });
        navigate(from, { replace: true });
      })
      .catch((err) => {
        Swal.fire({ title: 'Authentication Error', text: err.message, icon: 'error', confirmButtonColor: '#ef4444' });
      });
  };

  return (
    <div className="max-w-md mx-auto px-4 py-16">
      <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl shadow-xl space-y-6">
        <h2 className="text-3xl font-extrabold text-center text-slate-100">Login to EquiSports</h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-1">Email</label>
            <input type="email" name="email" required className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-slate-200 focus:outline-none focus:border-emerald-500" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-1">Password</label>
            <input type="password" name="password" required className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-slate-200 focus:outline-none focus:border-emerald-500" />
          </div>
          <button type="submit" className="w-full py-3 bg-emerald-500 text-slate-950 font-bold rounded-xl hover:bg-emerald-400 transition">Login</button>
        </form>

        <div className="relative border-b border-slate-800 text-center">
          <span className="bg-slate-900 px-3 text-xs text-slate-500 absolute -top-2 left-1/2 -translate-x-1/2">OR</span>
        </div>

        <button onClick={handleGoogleSignIn} className="w-full py-2.5 border border-slate-700 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-xl text-sm font-semibold transition flex items-center justify-center space-x-2">
          <span>Continue with Google</span>
        </button>

        <p className="text-center text-sm text-slate-400">
          Don't have an account? <Link to="/register" className="text-emerald-400 hover:underline">Register here</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;