import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component, Suspense, lazy } from "react";
import { Redirect, BrowserRouter as Router, Switch} from 'react-router-dom'

// import PrivateRoute from "./privateRoute";
// import PublicRoute from "./publicRoute";
import isAuthenticated from "./isAuthenticated";

// import NotFoundPage from "views/notFoundPage";
import Register from './views/register'
import HomePage from "./views/home";
const LoginPage = lazy(() => import(/* webpackChunkName: "loginpage" */ "./views/login"));

const routes = [
  {
    path: "/home",
    component: HomePage,
    exact: true,
    type: "public"
  },
  {
    path: "/login",
    component: LoginPage,
    type: "public"
  },
  // {
  //   path: "*",
  //   component: NotFoundPage,
  //   type: "public"
  // }
];

export default class route extends Component {

  render() {

    const routeComponents = routes.map(({ path, component, exact, type }, key) => {
      if(type === "public") {
        return exact ? (
          <HomePage exact path={path} component={component} key={key} />
        ) : (
          <Register path={path} component={component} key={key} />
        );
      } 
      // else {
      //   return exact ? (
      //     <PrivateRoute exact path={path} component={component} key={key} />
      //   ) : (
      //     <PrivateRoute path={path} component={component} key={key} />
      //   );
      // }
    });

    return (
      <div>
        <Suspense fallback={<div className="loader-div"></div>}>
          <Router>
            <Switch>
              <Redirect exact from="/" to={isAuthenticated() === true ? "/home" : "/login"} />
              {routeComponents}
            </Switch>
          </Router>
        </Suspense>
      </div>
    );
    
  }
}
