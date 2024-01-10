import React from "react";
import { Navigate, Route, Routes, useLocation, HashRouter } from "react-router-dom";
import { useSelector } from "react-redux";

// layout constants
import { LayoutTypes } from "../constants/layout";

// strore
import { RootState } from "../redux/store";

// All layouts containers
import DefaultLayout from "../layouts/Default";
import VerticalLayout from "../layouts/Vertical";
import DetachedLayout from "../layouts/Detached";
import HorizontalLayout from "../layouts/Horizontal/";
import TwoColumnLayout from "../layouts/TwoColumn/";
import { useDispatch } from "react-redux";
import {
  authProtectedFlattenRoutes,
  publicProtectedFlattenRoutes,
} from "./index";

import { APICore } from "../helpers/api/apiCore";

interface RoutesProps { }

const AllRoutes = (props: RoutesProps) => {
  const { layout } = useSelector((state: RootState) => ({
    layout: state.Layout,
  }));
  const { user, userLoggedIn, loading, error } = useSelector(
    (state: RootState) => ({
      user: state.Auth.user,
      loading: state.Auth.loading,
      error: state.Auth.error,
      userLoggedIn: state.Auth.userLoggedIn,
    })
  );
  const getLayout = () => {
    let layoutCls = TwoColumnLayout;

    switch (layout.layoutType) {
      case LayoutTypes.LAYOUT_HORIZONTAL:
        layoutCls = HorizontalLayout;
        break;
      case LayoutTypes.LAYOUT_DETACHED:
        layoutCls = DetachedLayout;
        break;
      case LayoutTypes.LAYOUT_VERTICAL:
        layoutCls = VerticalLayout;
        break;
      default:
        layoutCls = TwoColumnLayout;
        break;
    }
    return layoutCls;
  };

  let Layout = getLayout();
  const api = new APICore();
  return (
    <>

      <React.Fragment>
        <HashRouter>
          <Routes>
            <Route>
              {authProtectedFlattenRoutes.map((route, idx) => (
                <Route
                  path={route.path}
                  element={
                    api.isUserAuthenticated() === false ? (
                      <Navigate
                        to={{
                          pathname: "/",
                          search: "next=" + route.path
                        }}
                      />
                    ) : (
                      <Layout {...props}>{route.element}</Layout>
                    )
                  }
                  key={idx}
                />
              ))}
              {publicProtectedFlattenRoutes.map((route, idx) => (
                <Route
                  path={route.path}
                  element={
                    <DefaultLayout {...props} layout={layout}>
                      {route.element}
                    </DefaultLayout>
                  }
                  key={idx}
                />
              ))}
            </Route>


          </Routes>
        </HashRouter>
      </React.Fragment>
    </>
  );
};

export default AllRoutes;
