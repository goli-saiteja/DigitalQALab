import React from 'react';
import { faChrome } from '@fortawesome/free-brands-svg-icons';
import { faLaptopCode, faUserGear, faListCheck, faChartLine, faLinkSlash } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

import Card from 'base/Card';
import tilesbg from 'assets/images/tilesbg.png';
import './dashboard.scss';

function Dashboard() {
  const solutions = [
    {
      title: "Cross Browser Testing",
      description: "Test on a wide variety of OS/Browser combinations",
      url: 'https://app.saucelabs.com/live/web-testing/desktop',
      icon: faChrome
    },
    {
      title: "Real Device Testing",
      description: "Test on the real devices live - mobile, tablets, iPads and more",
      url: 'https://app.saucelabs.com/live/web-testing',
      icon: faLaptopCode
    },
    {
      title: "Automation",
      description: "Run test automation suites for every release",
      url: 'https://app.travis-ci.com/github/Lululemon/SFCC-QA/builds',
      icon: faUserGear
    },
    {
      title: "Test Case Management",
      description: `Test all the scenarios that power every release`,
      url: 'https://lululemon.testrail.net/index.php?/projects/overview/29',
      icon: faListCheck
    },
    {
      title: "Metrics that Matter",
      description: "Know all the QA metrics in one consolidated dashboard",
      url: 'https://lululemon.atlassian.net/jira/dashboards/13926',
      icon: faChartLine
    },
    {
      title: "Screaming Frog",
      description: "Perform SEO Validations via a flexible site crawler",
      url: 'https://www.screamingfrog.co.uk/',
      icon: faLinkSlash
    }
  ];
  return (
    <div className="mx-auto w-[930px] overflow-hidden tiles-container">
      <div className="w-full">
        <div className="text-[30px] mt-[30px] text-black text-center font-normal leading-[36px]">Explore our solutions</div>
      </div>
      <Card solutions={solutions}></Card>
      <div className="mt-[35px] w-full text-black text-[19px] font-normal leading-[26px]">
        For any queries, email
        <a href="mailto:INTLDigital-eCommQA@lululemon.com" className="text-[#c8112e] ml-[5px]">INTLDigital-eCommQA@lululemon.com</a>.
        {/* <input type="email" value="karumugam@lululemon.com" /> */}
      </div>
      <div className="mt-[20px] mb-[64px] text-[19px] font-normal leading-[26px]">
        <span className="">Check our </span>
        <Link className="text-[#CF052C] underline" to="upcoming_solutions">Upcoming Solutions</Link>
      </div>
    </div>
  )
}

export default Dashboard;