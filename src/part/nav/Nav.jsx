import React from 'react'
import NavOne from './NavOne'
import { NavTwo } from './NavTwo'
import { NavThree } from './NavThree'
import { NavFour } from './NavFour'
import { useAuth } from "../../context/AuthContext";
import {PhoneNav} from './PhoneNav'


export const Nav = () => {
  const { resData } = useAuth();
  return (
    <>
      <NavOne />
      <NavTwo />
      <NavThree />
      <PhoneNav />
      <NavFour />
    </>

  )
}
