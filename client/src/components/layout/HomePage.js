import React from "react";
import { Link, Redirect } from "react-router-dom";
import PropsTypes from "prop-types";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";

const useStyles = makeStyles((theme) => ({
  title: {
    textAlign: "center",
    marginTop: theme.spacing(25),
  },
  auth: {
    textAlign: "center",
  },
  links: {
    textDecoration: "none",
    color: "#000000",
  },
}));

const HomePage = ({ isAuth }) => {
  const classes = useStyles();

  if (isAuth) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <React.Fragment>
      <Container>
        <CssBaseline />
        <h1 className={classes.title}>Welcome to Beverage</h1>
        <div className={classes.auth}>
          <Button color="inherit">
            <Link to="/signin" className={classes.links}>
              Login
            </Link>
          </Button>
          <Button color="inherit">
            <Link to="/signup" className={classes.links}>
              Register
            </Link>
          </Button>
        </div>
      </Container>
    </React.Fragment>
  );
};

HomePage.propTypes = {
  isAuth: PropsTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuth: state.authReducer.isAuthenticate,
});

export default connect(mapStateToProps)(HomePage);
