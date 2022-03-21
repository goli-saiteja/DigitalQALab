import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './card.scss';

function Card({ solutions }) {
  return (
    <div className="action-card-container grid grid-cols-12 mt-[24px]">
      {
        solutions && solutions.map((solution, key) => (
          <a 
            key={key}
            href={solution.url} 
            target="_blank" 
            className="action-card w-full col-span-4 flex flex-col items-center cursor-pointer bg-white justify-center"
          >
            <div className="text-[#798897] text-[40px] mt-[50px] card-icon">
              <FontAwesomeIcon icon={solution.icon} />
            </div>
            <div className="mt-[40px] text-[19px] tracking-[0] leading-[24px]">{solution.title}</div>
            <div className="mt-[20px] text-[14px] tracking-[0] leading-[18px] text-[#57585B] w-[230px] text-center p-[10px]">{solution.description}</div>
            <button className="bg-theme-red text-white w-[200px] rounded-[3px] text-[13px] tracking-[1.3px] leading-[16px] py-[12px] my-[40px]">LEARN MORE</button>
          </a>
        ))
      }
    </div>
  )
}

export default Card;