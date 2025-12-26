import React from 'react';

function LoadingComponent() {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-full bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <div className="flex flex-col justify-between items-center">
        <h1 className="text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-indigo-600 to-emerald-500 bg-clip-text text-transparent">
          Placement Portal
        </h1>
        <div className="mt-6 flex items-center gap-3">
          <div className="w-10 h-10 border-4 border-indigo-600/60 border-t-transparent border-solid rounded-full animate-spin"></div>
          <p className="text-base sm:text-lg font-medium text-slate-700">Loading…</p>
        </div>
      </div>
    </div>
  );
}

export default LoadingComponent;
