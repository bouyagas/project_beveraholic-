import React from "react";
import { connect } from "react-redux";
import PropsTypes from "prop-types";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { signOutUser } from "../../redux/auth/authAction";

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  links: {
    textDecoration: "none",
    color: "#ffffff",
  },
}));

const NavBar = ({ signOutUser, isAuth: { isAuthenticate, loading } }) => {
  const classes = useStyles();

  const authLinks = (
    <React.Fragment>
      <Button color="inherit">
        <Link to="/dashboard" className={classes.links}>
          Dashbroad
        </Link>
      </Button>
      <Button color="inherit">
        <Link to="/beverage" className={classes.links}>
          Beverage Feeds
        </Link>
      </Button>
      <Button onClick={signOutUser} color="inherit">
        <Link to="/" className={classes.links}>
          Sign Out
        </Link>
      </Button>
    </React.Fragment>
  );

  const guestLinks = (
    <React.Fragment>
      <Button color="inherit">
        <Link to="/signUp" className={classes.links}>
          Sign Up
        </Link>
      </Button>
      <Button color="inherit">
        <Link to="/signIn" className={classes.links}>
          Sign In
        </Link>
      </Button>
    </React.Fragment>
  );

  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <Button color="inherit">
              <Typography variant="h6" className={classes.title}>
                <Link to="/" className={classes.links}>
                  Beveraholic
                </Link>
              </Typography>
            </Button>
          </Typography>
          {!loading && (
            <React.Fragment>
              {isAuthenticate ? authLinks : guestLinks}
            </React.Fragment>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

NavBar.propTypes = {
  signOutUser: PropsTypes.func.isRequired,
  isAuth: PropsTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  isAuth: state.authReducer,
});

export default connect(mapStateToProps, { signOutUser })(NavBar);
