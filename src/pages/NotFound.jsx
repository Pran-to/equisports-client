
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-[75vh] flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-9xl font-black text-slate-800">404</h1>
      <h2 className="text-3xl font-bold text-slate-100 mt-4">Page Out of Bounds!</h2>
      <p className="text-slate-400 max-w-md mt-2 mb-8">The sports equipment or route you are attempting to locate does not exist or has been relocated.</p>
      <Link to="/" className="px-6 py-3 bg-emerald-500 text-slate-950 font-bold rounded-xl hover:bg-emerald-400 transition">
        Return to Home Field
      </Link>
    </div>
  );
};

export default NotFound;