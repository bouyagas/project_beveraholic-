import React from "react";
import PropTypes from "prop-types";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

const PrivateRoute = ({
  component: Component,
  isAuth: { isAuthenticate, loading },
  ...rest
}) => (
  <Route
    {...rest}
    render={(props) =>
      !isAuthenticate && !loading ? (
        <Redirect to="/signin" />
      ) : (
        <Component {...props} />
      )
    }
  />
);

PrivateRoute.propTypes = {
  isAuth: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({ isAuth: state.authReducer });

export default connect(mapStateToProps)(PrivateRoute);
