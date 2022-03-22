import React from 'react';
import { faChrome } from '@fortawesome/free-brands-svg-icons';
import { faLaptopCode, faUserGear, faListCheck, faChartLine, faLinkSlash } from '@fortawesome/free-solid-svg-icons';

import Card from 'base/Card';

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
      description: "Run the automation suites for every release",
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
      description: "Find out all the broken links across regions and websites",
      url: 'https://www.screamingfrog.co.uk/',
      icon: faLinkSlash
    }
  ];
  const email = ""
  return (
    <div className="mx-auto w-[930px]">
      <div className="w-full text-black">
        <div className="text-[30px] mt-[40px] font-semibold leading-[37px]">John</div>
        <div className="mt-[16px] text-[19px] font-normal leading-[26px]">
          Here is the consolidated dashboard of all the key QA challenges for this quarter. <br></br>
            Feel free to explore each solution. For any queries, email
            <a href="mailto:karumugam@lululemon.com" className="text-[#c8112e] ml-[5px]">INTLQALeads@lululemon.com</a>.
            {/* <input type="email" value="karumugam@lululemon.com" /> */}
        </div>
      </div>
      <div className="w-full">
        <div className="text-[30px] mt-[40px] text-black text-center font-normal leading-[36px]">Explore our solutions</div>
      </div>
      <Card solutions={solutions}></Card>
      <div className="text-[20px] my-[64px] leading-[24px] font-normal">
        <span className="">Didn't find what you're looking for? Check our </span>
        <a className="text-[#CF052C] underline" href="#">Upcoming Solutions </a>
      </div>
    </div>
  )
}

export default Dashboard;