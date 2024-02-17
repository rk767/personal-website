import React from 'react'


const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <>

        <div className='bg-slate-900'>
        <svg className='max-w-screen stroke-2 stroke-white z-10 svg -translate-y-20' xmlns="http://www.w3.org/2000/svg" height="225" viewBox="0 0 1440 160" ><path fill="#020617" d="M0,160L48,138.7C96,117,192,75,288,74.7C384,75,480,117,576,138.7C672,160,768,160,864,138.7C960,117,1056,75,1152,69.3C1248,64,1344,96,1392,112L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>

            <p className='text-white text-xl text-center mx-auto mt-16 pb-32'>Copyright © {currentYear} RYAN KHOSHKBARCHI.</p>
        </div>
        </>
        
    );
};

export default Footer;