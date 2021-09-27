import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  stepper: {
    backgroundColor: "#00000000 !important",
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  paperContainer: {
    padding: "3em",
    margin: "1em",
    gap: "2em",
    width: "50%",
  },
  textFieldGrid: {
    gap: "2em",
  },
  error: {
    color: "red",
    textAlign: "-webkit-center",
  },
  textField: {
    [theme.breakpoints.up("sm")]: {
      width: "50%",
    },
  },
}));

export default useStyles;
