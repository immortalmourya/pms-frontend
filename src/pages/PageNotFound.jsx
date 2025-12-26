import React from 'react';
import { Link } from 'react-router-dom';

function PageNotFound() {
  document.title = 'Placement Portal | Page Not Found';
  return (
    <>
      <div className="flex h-screen justify-center items-center px-3 py-2">
        <div className='flex flex-col justify-center items-center gap-4 max-w-xl text-center'>
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-600 to-emerald-500 shadow-md" />
          <h1 className='playfair text-6xl'>404</h1>
          <h2 className='text-xl sm:text-2xl font-semibold'>Page not found</h2>
          <p className='text-gray-600'>The page you’re looking for doesn’t exist or has been moved.</p>
          <button type="button" className="btn btn-primary">
            <Link to='../student/login' className='text-white no-underline text-xl'>
              Go to login
            </Link>
          </button>
        </div>
      </div>
    </>
  )
}

export default PageNotFound
