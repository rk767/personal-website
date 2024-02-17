import Link from 'next/link'
import React from 'react'
import NavLink from './NavLink'

const navLinks = [
    {
        title: "About",
        path: "#about",
    },
    {
        title: "Projects",
        path: "#projects",
    },
    // {
    //     title: "Contact",
    //     path: "#contact",
    // },
]



const Navbar = () => {
  return (
    <>
    <svg data-te-animation-start="onLoad" className='max-w-screen absolute top-0 stroke-2 stroke-white z-10 svg animate-fade-in-top sm:hidden' xmlns="http://www.w3.org/2000/svg" height="225" viewBox="0 0 1440 160" ><path fill="#020617" d="M0,160L48,138.7C96,117,192,75,288,74.7C384,75,480,117,576,138.7C672,160,768,160,864,138.7C960,117,1056,75,1152,69.3C1248,64,1344,96,1392,112L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>

    <nav className='font-kanit fixed flex items-center justify-between w-screen z-20 bg-slate-950 opacity-90 animate-fade-in-top'>
        <Link className='block p-6 smm:ml-16 sm:ml-2 text-white text-xl hover:text-blue-300 transition duration-200' href={"/"}>Home</Link>
        <div className='menu block md:w-auto' id='navbar'>
            <ul className='flex text-xl gap-7 sm:gap-0'>
            {navLinks.map((link, index) => (
                <li key={index}>
                    <NavLink href={link.path} title={link.title} />
                </li>
            ))}
            <div className=' h-full w-16 sm:w-6'></div>
            </ul>
        </div>
    </nav>
    </>
  )
}

export default Navbar