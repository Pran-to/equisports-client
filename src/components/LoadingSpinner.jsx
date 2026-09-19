
const LoadingSpinner = () => {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center space-y-4">
      <div className="w-16 h-16 border-4 border-emerald-500/20 border-t-emerald-400 rounded-full animate-spin"></div>
      <p className="text-slate-400 text-sm font-medium animate-pulse">Loading sports gear...</p>
    </div>
  );
};

export default LoadingSpinner;