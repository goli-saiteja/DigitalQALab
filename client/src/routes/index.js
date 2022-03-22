import React, { useEffect } from 'react';
import {
  Routes, Route
} from "react-router-dom";

// import Route from './Route';
import Dashboard from "pages/Dashboard";
import Signin from "pages/SignIn";
import Home from "pages/Home";
import Solutions from "pages/Solutions";
import HeaderFooterLayout from 'layouts/HeaderFooterLayout';
import { getRoute } from './routers';
import * as permissions from './permissions';

const pages = [
  {
    path: "/",
    element: <Dashboard />,
    layout: HeaderFooterLayout,
    permissions: permissions.isPrivate
  },
  {
    path: "/upcoming_solutions",
    element: <Solutions />,
    layout: HeaderFooterLayout,
    permissions: permissions.isPrivate
  },
  {
    path: "/signin",
    element: <Signin />,
    layout: HeaderFooterLayout,
    permissions: permissions.isPublic,
    redirect: '/'
  },
  {
    path: "/home",
    element: <Home />,
    layout: HeaderFooterLayout
  }
];

function Router() {
  useEffect(() => {
    console.log('router rendered');
  })

  return (
    <Routes>
      {
        pages.map(page => getRoute(page))
      }
    </Routes>
  )
}
export default Router;

