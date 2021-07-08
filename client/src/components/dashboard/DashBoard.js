import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Loading from "../layout/Loading";

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

const DashBroad = ({
  isAuth: {
    loading,
    user: { username },
  },
}) => {
  const classes = useStyles();
  return loading && username === null ? (
    <Loading />
  ) : (
    <React.Fragment>
      <Container>
        <CssBaseline />
        <h2 className={classes.title}>
          Welcome <em>{username.toUpperCase()}</em> click below to create your
          beverage
        </h2>
        <div className={classes.auth}>
          <Button color="inherit">
            <Link to="/createBeverage" className={classes.links}>
              Create Beverage
            </Link>
          </Button>
        </div>
      </Container>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => ({
  isAuth: state.authReducer,
});

export default connect(mapStateToProps)(DashBroad);
