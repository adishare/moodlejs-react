// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


import React, { Component, Suspense, lazy } from "react";
import { Switch, Redirect } from "react-router-dom";
import Register from './views/register'
// import PrivateRoute from "./privateRoute";
// import PublicRoute from "./publicRoute";
import isAuthenticated from "./isAuthenticated";
// import NotFoundPage from "views/notFoundPage";
// import HomePage from "views/homePage";
// import LoginPage from "views/loginPage";
// dynamic import: (for route based code splitting)
// const HomePage = lazy(() => import(/* webpackChunkName: "homepage" */ "views/homePage"));
// const LoginPage = lazy(() => import(/* webpackChunkName: "loginpage" */ "views/loginPage"));

const routes = [
  {
    path: "/home",
    component: Register,
    exact: true,
    type: "public"
  },
  // {
  //   path: "/login",
  //   component: LoginPage,
  //   type: "public"
  // },
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
          <Register exact path={path} component={component} key={key} />
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
          <Switch>
            <Redirect exact from="/" to={isAuthenticated() === true ? "/home" : "/login"} />
            {routeComponents}
          </Switch>
        </Suspense>
      </div>
    );
  }
}
