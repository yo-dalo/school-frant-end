import React, { useState } from 'react';

const CircularLayout = () => {
  const [isOpen, setIsOpen] = useState(false);

  const items = [
    { icon: '🏠', label: 'Home', onClick: () => console.log('Home'), a: -83 },
    { icon: '⚙️', label: 'Settings', onClick: () => console.log('Settings'), a: -23 },
    { icon: '📊', label: 'Dashboard', onClick: () => console.log('Dashboard'), a: 35 },
    { icon: '👤', label: 'Profile', onClick: () => console.log('Profile'), a: 94 },
    { icon: '📧', label: 'Messages', onClick: () => console.log('Messages'), a: 158 },
    { icon: '🔍', label: 'Search', onClick: () => console.log('Search'), a: -145 },


  ];

  const radius = 120; // Adjust radius in pixels



  return (
    <div className="   center  ">

      <div className="w-[30vw]  relative h-[40vw] overflow-hidden center rounded-full bg-zinc-300d">

      <img className='FULL object-cover' src="img/circal/Ellipse 1.svg" alt="" />




      </div>






    </div>
  );
};

export default CircularLayout;



