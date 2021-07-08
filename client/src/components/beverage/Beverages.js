import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import BeverageItem from "./BeverageItem";
import { getBeverages } from "../../redux/beverage/beverageAction";
import Loading from "../layout/Loading";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

const Beverages = ({ getBeverages, beverage: { loading, beverages } }) => {
  useEffect(() => {
    getBeverages();
  }, [getBeverages]);
  const classes = useStyles();

  return loading ? (
    <Loading />
  ) : (
    <Fragment>
      <h1>Beverages</h1>
      <div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {beverages.map((beverage) => (
              <BeverageItem key={beverage._id} beverage={beverage} />
            ))}
          </Grid>
        </Container>
      </div>
    </Fragment>
  );
};

Beverages.propTypes = {
  getBeverages: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({ beverage: state.beverageReducer });
export default connect(mapStateToProps, { getBeverages })(Beverages);
