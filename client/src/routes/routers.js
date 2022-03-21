import React, { useEffect, useState } from 'react';
import { Route } from 'react-router';
import {
  Navigate,
  useNavigate
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

const RouteGaurd = ({ children, pageConfig }) => {
  const { permissions, redirect } = pageConfig;
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const _permissions = Array.isArray(permissions) ? permissions : [permissions];
    const promises = [];

    _permissions.forEach(async (permission) => {
      if (!!permission) {
        promises.push(permission());
      }
    });

    Promise.all(promises).then((values) => {
      setProgress(100);
      let next = values.every(value => value);
      if (!next) {
        const to = redirect || "/signin";
        navigate(to, { replace: true });
      }
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <LoadingBar color="#f11946" progress={progress} onLoaderFinished={() => setProgress(0)}/>
  } else {
    return (
      <React.Fragment>
        <LoadingBar color="#f11946" progress={progress} onLoaderFinished={() => setProgress(0)}/>
        {children}
      </React.Fragment>
    )
  }
}

export const getRoute = (pageConfig) => {
  const { path, element, layout: Layout } = pageConfig;
  let _element;
  _element = Layout ? <Layout>{element}</Layout> : element;
  _element = <RouteGaurd pageConfig={pageConfig}>{_element}</RouteGaurd>;

  return <Route path={path} element={_element} key={path} />;
}