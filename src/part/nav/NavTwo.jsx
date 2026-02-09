import React from 'react'
import { Link } from 'react-router-dom'

export const NavTwo = () => {
  return (
    <div className='w-full BT phone:px-5 px-16 phone:h-12 h-20 bg-white '>

      <Link to={"/"} className="h-full w-auto">

        <img src="/img/logo/logo.png" alt="" />

      </Link>










      <div className="h-full center">

        <Link to={"/admission-Form"} className="h-full w-auto">

          <img src="/img/x/ad.png" alt="" />

        </Link>




        <div className="h-full py-3 w-auto">

          <img src="/img/x/n1.png" alt="" />

        </div>




      </div>










    </div>
  )
}
