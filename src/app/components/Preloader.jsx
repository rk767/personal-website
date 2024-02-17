import React from 'react'


const Preloader = () => {
  return (
    <div className='w-screen h-screen bg-slate-950 fixed top-0 z-50 preloader overflow-hidden flex items-center justify-center'>
        <div className="loader"></div>
    </div>
  );
};

export default Preloader;