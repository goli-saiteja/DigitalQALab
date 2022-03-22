import React from 'react';
import { useNavigate } from "react-router-dom";
import teams from 'assets/images/teams.png';

function Home() {
  const navigate = useNavigate();

  const onSignin = () => {
    navigate("/signin", { replace: true });
  }
  return (
    <div className="relative z-0">
      <div className="mx-auto h-[calc(100%-180px)] flex items-center w-[930px] z-1">
        <div className="w-[608px] py-[40px] px-[40px] ml-[-40px] bg-[#FAFAFA]">
          <div className="text-[36px] tracking-[0px] leading-[44px] font-semibold">
            Welcome to Digital 
            <div className="inline-block mx-[10px]">
              QA 
              <div class="w-full h-[5px] bg-theme-red"></div>
            </div>
            Labs
        </div>
          <div className="mt-[24px] text-[19px] tracking-[0px] leading-[24px]">
            We are here to help and solve all your real-world software testing problems. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
        </div>
          <button
            className="mt-[24px] w-[204px] text-[13px] tracking-[1.3px] leading-[16px] font-semibold py-[18px] border border-black text-black hover:bg-black rounded-[3px] hover:text-white"
            onClick={() => onSignin()}
          >
            SIGN IN
        </button>
        </div>
        <div className="absolute top-0 right-0 z-[-1] h-[calc(100%-20px)]">
          <img className="w-auto h-full" src={teams} />
        </div>
      </div>
    </div>
  )
}

export default Home;