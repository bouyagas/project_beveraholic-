import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import CreateIcon from "@material-ui/icons/Create";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { addBeverage } from "../../redux/beverage/beverageAction";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  image: {
    backgroundImage:
      "url(https://raw.githubusercontent.com/DEsp04/project-beveraholic/7367ed769592aebfc612e69aaca6c3a872696fdd/client/src/images/logos/beveraholic_logo.svg)",
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "333px",
    backgroundPosition: "center",
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const BeverageForm = ({ addBeverage }) => {
  const [formData, setFormData] = useState({
    name: "",
    category_name: "",
    alcohol_content: "",
    ingredients: "",
    instruction: "",
  });

  const {
    name,
    category_name,
    alcohol_content,
    ingredients,
    instruction,
  } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    addBeverage({
      name,
      category_name,
      alcohol_content,
      ingredients,
      instruction,
    });
  };

  const classes = useStyles();

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid
        item
        direction="row"
        xs={false}
        sm={4}
        md={7}
        className={classes.image}
      />
      <Grid item xs component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <CreateIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Create Beverage
          </Typography>
          <form className={classes.form} onSubmit={(e) => onSubmit(e)}>
            <TextField
              variant="outlined"
              value={name}
              margin="normal"
              required
              fullWidth
              id="name"
              label="Name"
              name="name"
              autoComplete="name"
              autoFocus
              onChange={(e) => onChange(e)}
            />
            <TextField
              variant="outlined"
              value={category_name}
              margin="normal"
              required
              fullWidth
              id="category_name"
              label="Category Name"
              name="category_name"
              onChange={(e) => onChange(e)}
              autoComplete="category_name"
              autoFocus
            />
            <TextField
              variant="outlined"
              value={alcohol_content}
              margin="normal"
              required
              fullWidth
              id="alcohol_content"
              label="Alcohol Content"
              onChange={(e) => onChange(e)}
              name="alcohol_content"
              autoComplete="alcohol_content"
              autoFocus
            />
            <TextField
              variant="outlined"
              value={ingredients}
              margin="normal"
              required
              fullWidth
              name="ingredients"
              label="Ingredients"
              type="ingredients"
              id="ingredients"
              autoComplete="instruction"
              onChange={(e) => onChange(e)}
            />
            <TextField
              variant="outlined"
              value={instruction}
              margin="normal"
              required
              fullWidth
              name="instruction"
              label="Instuction"
              type="instruction"
              id="instruction"
              onChange={(e) => onChange(e)}
              autoComplete="instruction"
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Add Beverage
            </Button>
          </form>
        </div>
      </Grid>
    </Grid>
  );
};

export default connect(null, { addBeverage })(BeverageForm);
