const { makeStyles } = require("@material-ui/core");

export default makeStyles((theme) => ({
  image: {
    minWidth: "10px",
    margin: theme.spacing(3),
  },
  dialogContainer: {
    minHeight: "80vh",
    // minWidth: "70vw",
    padding: theme.spacing(1),
  },
  inputContainer: {
    "& *": {
      marginBottom: theme.spacing(4),
    },
  },
  input: {
    marginBottom: theme.spacing(4),
  },
}));
