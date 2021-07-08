import React, { useEffect } from "react";
import { Provider } from "react-redux";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./components/layout/HomePage";
import NavBar from "./components/layout/NavBar";
import AlertForm from "./components/layout/AlertForm";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import BeverageFrom from "./components/beverage/BeverageForm";
import Beverages from "./components/beverage/Beverages";
import DashBoard from "./components/dashboard/DashBoard";
import store from "./redux/store";
import { loadUser } from "./redux/auth/authAction";
import setAuthToken from "./utils/setAuthToken";
import PrivateRoute from "./components/routing/PrivateRoute";
import "./App.css";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <React.Fragment>
          <NavBar />
          <Route exact path="/" component={HomePage} />
          <CssBaseline />
          <Container />
          <section>
            <AlertForm />
            <Switch>
              <Route exact path="/signin" component={SignIn} />
              <Route exact path="/signup" component={SignUp} />
              <PrivateRoute
                exact
                path="/createBeverage"
                component={BeverageFrom}
              />
              <PrivateRoute exact path="/dashboard" component={DashBoard} />
              <PrivateRoute exact path="/beverage" component={Beverages} />
            </Switch>
          </section>
          <Container />
        </React.Fragment>
      </Router>
    </Provider>
  );
};

export default App;
