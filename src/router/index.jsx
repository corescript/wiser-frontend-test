import React, { Fragment } from "react";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";

import history from "./history";
import MainLayout from "layouts/MainLayout";

/**
 * Route listed below
 */

import Home from "pages/Home";
import Search from "pages/Search";
// import Home from "pages/Home";

import PropTypes from "prop-types";
import { useSelector } from "react-redux";

const routes = [
  {
    path: "/",
    component: Home,
    layout: MainLayout,
  },
  {
    path: "/search",
    component: Search,
    layout: MainLayout,
  },
];

const Element = ({ component, layout, privateRoute, publicRoute }) => {
  const auth = useSelector((state) => state.auth);

  if (privateRoute) {
    if (!auth.isAuthenticated) {
      return <Navigate to="/login" />;
    }
  } else if (publicRoute) {
    if (auth.isAuthenticated) {
      return <Navigate to="/" />;
    }
  }

  const Component = component;
  const Layout = layout || Fragment;

  return (
    <Layout>
      <Component />
    </Layout>
  );
};

Element.propTypes = {
  component: PropTypes.any,
  layout: PropTypes.func,
  privateRoute: PropTypes.bool,
  publicRoute: PropTypes.bool,
};

const createRoutes = (routes) => {
  return routes.map((route) => {
    if (route.routes?.length) {
      const indexRoute = route.routes.find((r) => r.index);
      return (
        <Route
          key={route.path}
          path={route.path}
          element={<Element {...route} />}
          index={route.index}
        >
          {!!indexRoute && (
            <Route index element={<Element {...indexRoute} />} />
          )}
          {createRoutes(route.routes)}
        </Route>
      );
    }
    return (
      <Route
        key={route.path}
        path={route.path}
        element={<Element {...route} />}
        index={route.index}
      />
    );
  });
};

export default function AppRouter() {
  return (
    <Router location={history.location} navigator={history}>
      <Routes>{createRoutes(routes)}</Routes>
    </Router>
  );
}
