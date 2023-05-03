import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate} from 'react-router-dom';

const HomePage = () => {
  const navigate  = useNavigate();
  return (
    <div className='container rounded-bl-lg mt-40 bg-transparent flex'>

      <h1 class="mb-4 text-3xl font-extrabold text-gray-900 dark:text-emerald-400 md:text-5xl lg:text-6xl"><span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-500 from-white">WELCOME TO</span> <span class="text-transparent bg-clip-text bg-gradient-to-r to-black from-red-400">Pred-Sport</span> <></></h1>
      <p class="text-lg font-normal text-black lg:text-2xl dark:text-black">Here at Pred-Sport we focus on NBA players, statistics and predict the future statistics of players, come in to try and be impressed.</p>

      <div className=''>

        <button 
        className='mx-3.5 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800 bg-transparent text-white' 
        onClick={ () => {
            navigate("/login")
        }}>
        Log In
        </button>
        <button 
        className=' my-24 mx-96 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800 bg-transparent text-white'
        onClick={ () => {
          navigate("/signup")
      }}>
        Sign Up</button>
      
      </div>
      </div>
  );
};

export default HomePage;
