import React from 'react';
import logo from 'assets/images/logo.png';
import AuthService from 'services/authService';
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const isSignedUp = localStorage.getItem('accessToken');
  const onSignOut = () => {
    AuthService.signOut();
    navigate("/home", { replace: true });
  }
  return (
    <div className="bg-white text-theme-black">
      <div className="mx-auto w-[930px] grid grid-cols-12 gap-[20px] h-[80px] justify-items-center">
        <div className="col-span-2 flex items-center cursor-pointer">
          <img src={logo} />
          {
            isSignedUp &&
            <div className="h-[25px] w-[1px] border-r-[1px] border-gray-300 pr-[10px]"></div>
          }
        </div>
        {
          isSignedUp &&
          <div className="w-full col-span-3 flex items-center cursor-pointer text-[20px] font-semibold tracking-[0] leading-[25px]">
            Digital QA Lab
          </div>
        }
        {
          isSignedUp &&
          <div
            className="w-full col-start-11 col-span-2 cursor-pointer flex justify-self-end items-center  justify-end  text-[14px] font-semibold text-theme-red tracking-[0.88px] leading-[17px]"
            onClick={() => onSignOut()}
          >
            SIGN OUT
        </div>
        }
      </div>
    </div>
  )
}

export default Header;