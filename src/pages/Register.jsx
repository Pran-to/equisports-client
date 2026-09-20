import  { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const Register = () => {
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const photoURL = e.target.photoURL.value;
    const password = e.target.password.value;

    if (password.length < 6) {
      Swal.fire({ title: 'Weak Password', text: 'Password must be at least 6 characters long.', icon: 'warning', confirmButtonColor: '#f59e0b' });
      return;
    }
    if (!/[A-Z]/.test(password)) {
      Swal.fire({ title: 'Weak Password', text: 'Password must contain at least one uppercase letter.', icon: 'warning', confirmButtonColor: '#f59e0b' });
      return;
    }
    if (!/[a-z]/.test(password)) {
      Swal.fire({ title: 'Weak Password', text: 'Password must contain at least one lowercase letter.', icon: 'warning', confirmButtonColor: '#f59e0b' });
      return;
    }

    createUser(email, password)
      .then(() => {
        updateUserProfile(name, photoURL)
          .then(() => {
            Swal.fire({ title: 'Registration Complete!', text: 'Your account has been created.', icon: 'success', timer: 1500, showConfirmButton: false });
            navigate('/');
          });
      })
      .catch((err) => {
        Swal.fire({ title: 'Registration Error', text: err.message, icon: 'error', confirmButtonColor: '#ef4444' });
      });
  };

  return (
    <div className="max-w-md mx-auto px-4 py-12">
      <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl shadow-xl space-y-6">
        <h2 className="text-3xl font-extrabold text-center text-slate-100">Create EquiSports Account</h2>
        <form onSubmit={handleRegister} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-1">Name</label>
            <input type="text" name="name" required className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-slate-200 focus:outline-none focus:border-emerald-500" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-1">Email</label>
            <input type="email" name="email" required className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-slate-200 focus:outline-none focus:border-emerald-500" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-1">Photo URL</label>
            <input type="url" name="photoURL" required className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-slate-200 focus:outline-none focus:border-emerald-500" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-1">Password</label>
            <input type="password" name="password" required className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-slate-200 focus:outline-none focus:border-emerald-500" />
          </div>
          <button type="submit" className="w-full py-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 font-bold rounded-xl hover:opacity-90 transition">Register</button>
        </form>

        <p className="text-center text-sm text-slate-400">
          Already registered? <Link to="/login" className="text-emerald-400 hover:underline">Log in here</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;