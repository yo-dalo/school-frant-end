import React, { useState } from 'react';

const CircularLayout = () => {
  const [isOpen, setIsOpen] = useState(false);

  const items = [
    { icon: '🏠', label: 'Home', onClick: () => console.log('Home'),a:-83},
     { icon: '⚙️', label: 'Settings', onClick: () => console.log('Settings') ,a:-23},
     { icon: '📊', label: 'Dashboard', onClick: () => console.log('Dashboard'),a:35},
    { icon: '👤', label: 'Profile', onClick: () => console.log('Profile') ,a:94},
     { icon: '📧', label: 'Messages', onClick: () => console.log('Messages'),a:158 },
     { icon: '🔍', label: 'Search', onClick: () => console.log('Search'),a:-145 },
  

  ];

  const radius = 120; // Adjust radius in pixels



  return (
   <div className="   center  ">

  <div className="w-[45vw]  relative h-[45vw] overflow-hidden center rounded-full bg-zinc-300d">

<div className="w-[25vw] rounded-full  bg-orange-400 h-[25vw]"></div>

 <div className=" absolute  top-6 bg-slate-500w left-1 -z-10"><img className='FULL object-cover' src="https://i.pinimg.com/736x/2e/bb/49/2ebb49c2e9cee470cfbf140ff55908db.jpg" alt="" /></div>
             
 <div className=" absolute top-3 L bg-slate-500w left-1 -z-10"><img className='FULL object-cover' src="https://i.pinimg.com/736x/2e/bb/49/2ebb49c2e9cee470cfbf140ff55908db.jpg" alt="" /></div>




  </div>






   </div>
  );
};

export default CircularLayout;



