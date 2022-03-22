import React, { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { faChevronLeft, faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from "react-router-dom";

function Solutions() {

  useEffect(() => {
    document.querySelector("#root").scrollTo(0,0);
  }, [])

  return (
    <div className="mx-auto w-[930px] z-1">
      <Link
        className="block mt-[32px] text-[14px] tracking-[0px] leading-[16px] text-theme-red"
        to="/"
      >
        <FontAwesomeIcon icon={faAngleLeft} /> Back To Solutions
      </Link>
      <div className="mt-[40px] text-[30px] tracking-[0px] leading-[37px] font-semibold">
        Upcoming Solutions
      </div>
      <div className="w-full h-[528px] mt-[40px] text-white">
        <video controls className="h-full w-full" poster="https://media.vimejs.com/poster.png">
          <source src="https://media.vimejs.com/720p.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="mt-[80px] mb-[89px] text-[30px] tracking-[0px] leading-[36px] font-normal">
        Everything we do is rooted in the belief that, together with our guests, partners, and communities, we can create positive change to build a healthier, thriving future. Our purpose comes to life every day through our Impact Agenda, which comprises three pillars: Be Human, Be Well, and Be Planet.
      </div>
    </div>
  )
}

export default Solutions;