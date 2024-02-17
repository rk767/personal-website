import React from "react";
import Navbar from "./Navbar";
const HeroSection = () => {
  return (
  <section data-te-animation-start="onLoad" className="hero-section flex w-screen h-[110vh] items-center justify-center flex-row gap-44">    
    <div className=" mt-28 sm:mt-0 mx-11">
      <div>
        <h1 className="text-white text-6xl sm:text-5xl font-bold mb-1 animate-fade">Hey, I&apos;m <span className="fade-color text-blue-600">Ryan</span> <span className="inline text-2xl sm:hidden italic font-semibold text-gray-400"></span></h1>
        <h2 className="text-white text-2xl sm:text-xl tracking-wide animate-fade-in-left font-semibold ">I&apos;m an 18 year old developer from Canada.</h2>
      </div>
      <ul className="relative z-10 flex flex-row gap-4 py-3">
        <li className="opacity-0 animate-fade-bottom">
          <a href="https://github.com/Ryan2k05?tab=repositories" target="_blank" className="flex h-12 w-12 rounded-full bg-slate-900 duration-300 hover:bg-slate-800">
            <svg xmlns="http://www.w3.org/2000/svg" className="m-auto mt-2.5 w-7 h-7 fill-white" viewBox="0 0 16 16"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path></svg>
          </a>
        </li>
        <li className="opacity-0 animate-fade-bottom">
          <a href="https://www.linkedin.com/in/ryan-khoshkbarchi-671904250/" target="_blank" className="flex h-12 w-12 rounded-full bg-slate-900 duration-300 hover:bg-slate-800">
            <svg xmlns="http://www.w3.org/2000/svg" className="m-auto mt-2.5 w-7 h-7 fill-white" width="30" height="30" fill="currentColor" viewBox="0 0 16 16"><path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/></svg>
          </a>
        </li>
        <li className="opacity-0 animate-fade-bottom">
          <a href="" target="_blank" className="flex h-12 w-12 rounded-full bg-slate-900 duration-300 hover:bg-slate-800">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="m-auto mt-2.5 w-7 h-7" viewBox="0 0 16 16">
              <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334q.002-.211-.006-.422A6.7 6.7 0 0 0 16 3.542a6.7 6.7 0 0 1-1.889.518 3.3 3.3 0 0 0 1.447-1.817 6.5 6.5 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.32 9.32 0 0 1-6.767-3.429 3.29 3.29 0 0 0 1.018 4.382A3.3 3.3 0 0 1 .64 6.575v.045a3.29 3.29 0 0 0 2.632 3.218 3.2 3.2 0 0 1-.865.115 3 3 0 0 1-.614-.057 3.28 3.28 0 0 0 3.067 2.277A6.6 6.6 0 0 1 .78 13.58a6 6 0 0 1-.78-.045A9.34 9.34 0 0 0 5.026 15"/>
            </svg>          
          </a>
        </li>
      </ul>
      {/* <svg className="signature-path relative z-10 signature mt-3" fill="none" width="200" height="60" viewBox="0 0 100 30" xmlns="http://www.w3.org/2000/svg">
        <path className="signature" d="M42.9255 1C42.4079 2.87956 42.1966 4.82088 41.6551 6.7012C40.6523 10.183 39.2353 13.4984 37.5685 16.708C37.2626 17.2972 36.7731 18.3338 37.4058 17.0147C38.1619 15.4381 39.0978 13.9346 40.2345 12.6027C42.8608 9.52522 46.1417 7.03339 48.9959 4.17916C49.5606 3.61444 50.0347 2.96521 50.5667 2.37054C50.7204 2.19879 51.0356 1.67455 51.3052 1.64459C51.4081 1.63316 50.171 3.79327 50.1474 3.8287C48.6508 6.08407 46.8766 8.11298 44.9719 10.0306C44.9602 10.0423 42.813 11.7965 43.9393 11.2634C45.0755 10.7257 46.2975 10.454 47.5566 10.4436C48.5887 10.4351 49.4024 10.7195 49.8095 11.7265C49.8819 11.9057 49.9588 12.9981 50.3102 12.6778C51.6046 11.4975 52.427 9.57376 53.2265 8.05923C54.1254 6.35629 55.0058 4.61668 55.6922 2.81487C55.7 2.79447 56.0765 1.59073 56.099 1.99505C56.2121 4.03116 55.8922 6.16403 55.3793 8.12181C54.4868 11.5284 53.0782 14.7962 51.1675 17.7531C51.0384 17.953 50.9873 18.0569 51.0924 17.8408C51.4202 17.167 51.7553 16.4962 52.0499 15.8069C53.8003 11.7111 54.0689 6.66782 56.9814 3.15281C57.6719 2.31936 58.5484 1.52327 59.6035 1.20026C60.2974 0.987859 60.1737 1.38505 59.9728 1.97002C59.341 3.80972 58.1313 5.37843 57.1065 7.00785C56.9645 7.23362 56.3319 8.23544 56.2304 8.59743C56.0481 9.24747 57.0648 9.10008 57.3506 9.10434C59.1441 9.13111 60.9339 9.06419 62.7264 9.02299C62.8292 9.02062 63.5978 8.99613 63.8028 9.04802C64.062 9.11365 63.6731 9.44744 63.6401 9.50487C63.5523 9.65731 63.5123 9.75973 63.6839 9.8741C63.8792 10.0043 64.6002 10.0659 64.366 10.0493C58.0036 9.59946 51.5249 9.74941 45.1597 9.88661C31.8158 10.1742 18.5906 11.3091 5.45152 13.6791C4.46632 13.8568 3.4858 14.0596 2.50392 14.2548C2.02456 14.3501 0.649997 14.3917 1.08331 14.6178C1.50009 14.8352 2.36749 14.8035 2.82309 14.8556" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
      </svg> */}
     
    </div>
    <img src="https://media.discordapp.net/attachments/1045786920564818000/1196555287474208820/pfp.png?ex=65b80df3&is=65a598f3&hm=8f88d012050504ac377d31dc6dc4dd3a850b31c1c6fd4a9b1498c4ca45aaab4c&=&format=webp&quality=lossless&width=675&height=675" alt="" draggable="false" className="fade-color relative rounded-full h-[24rem] w-[24rem] border-[2px] border-white  mr-8 lg:hidden mt-28 scale"/>
    {/* <div className="w-screen h-20 absolute bottom-0 bg-gradient-to-b from-transparent to-slate-900"></div> */}
  </section>

)};

export default HeroSection;