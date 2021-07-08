import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: "60ch",
    marginTop: "auto",
    marginButton: "auto",
    textAlign: "center",
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: "Block",
  },
}));
const BeverageItem = ({
  beverage: {
    _id,
    name,
    category_name,
    alcohol_content,
    ingredients,
    instruction,
  },
  isAuth,
}) => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <List className={classes.root}>
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          </ListItemAvatar>
          <ListItemText
            primary={isAuth.user.username}
            secondary={
              <React.Fragment>
                <Typography
                  component="span"
                  variant="body2"
                  className={classes.inline}
                  color="textPrimary"
                >
                  {name}
                </Typography>
                - {instruction}
                <div> - {alcohol_content}</div>
                <div> - {category_name} </div>
                <div> - {ingredients} </div>
              </React.Fragment>
            }
          />
        </ListItem>
        <Divider variant="inset" component="li" />
      </List>
    </React.Fragment>
  );
};

BeverageItem.prototypes = {
  isAuth: PropTypes.isRequired,
  beverage: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({ isAuth: state.authReducer });
export default connect(mapStateToProps, {})(BeverageItem);
