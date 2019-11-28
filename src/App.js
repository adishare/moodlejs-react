import './assets/bootstrap.css';
import 'holderjs/holder'
import React, { Component, Suspense } from "react";
import { Redirect, BrowserRouter as Router, Switch, Route} from 'react-router-dom'

// import PrivateRoute from "./privateRoute";
// import PublicRoute from "./publicRoute";
import isAuthenticated from "./isAuthenticated";

import NotFoundPage from "./views/notFoundPage";
import RegisterPage from './views/register'
import HomePage from "./views/home";
import LoginPage from "./views/login";
import CoursesPage from "./views/courses";
import CourseCategoryId from "./views/courseCategoryId";
import CourseEdit from "./views/courseEdit";
import courseOverview from "./views/courseOverview";
import CourseLearn from "./views/courseLearn";

const routes = [

  { path: "/home", component: HomePage, type: "public", exact: true },
  { path: "/login", component: LoginPage, type: "public", exact: true },
  { path: "/register", component: RegisterPage, type: "public", exact: true },
  { path: "/courses", component: CoursesPage, type: "public", exact: true },
  { path: "/courseCategory/:courseCategoryId", component: CourseCategoryId, type: "public", exact: true },
  { path: "/course/edit", component: CourseEdit, type: "public", exact: true },
  { path: "/course/overview/:courseId", component: courseOverview, type: "public", exact: true },
  { path: "/course/learn/:courseId", component: CourseLearn, type: "public", exact: true },
  { path: "*", component: NotFoundPage, type: "public", exact: false }
];


export default class route extends Component {

  render() {

    const routeComponents = routes.map(({ path, component, exact, type }, key) => {
      if(type === "public") {
        return (
          <Route exact={exact} path={path} component={component} key={key}></Route>
        );
      } 
      else {
        // return exact ? (
        //   <PrivateRoute exact path={path} component={component} key={key} />
        // ) : (
        //   <PrivateRoute path={path} component={component} key={key} />
        // );
        return (
          <Route exact={exact} path={path} component={component} key={key} ></Route>
        );
      }
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
