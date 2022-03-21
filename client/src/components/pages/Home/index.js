import React from 'react';
import { faChrome } from '@fortawesome/free-brands-svg-icons';
import { faLaptopCode, faUserGear, faListCheck, faChartLine, faLinkSlash } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const onSignin = () => {
    navigate("/signin", { replace: true });
  }
  return (
    <div className="mx-auto h-[calc(100%-180px)] flex items-center w-[930px]">
      <div className="w-[608px] py-[40px] px-[40px] ml-[-40px] bg-[#FAFAFA]">
        <div className="text-[36px] tracking-[0px] leading-[44px] font-semibold">
          Welcome to Digital QA Labs
        </div>
        <div className="mt-[24px] text-[19px] tracking-[0px] leading-[24px]">
          We are here to help and solve all your real-world software testing problems. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
        </div>
        <button
          className="mt-[24px] w-[204px] text-[13px] tracking-[1.3px] leading-[16px] font-semibold py-[18px] bg-black rounded-[3px] text-white"
          onClick={() => onSignin()}
        >
          SIGN IN
        </button>
      </div>
    </div>
  )
}

export default Home;