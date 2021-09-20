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
    padding: "2em",
    margin: "1em",
  },
  textField: {
    marginBottom: "3em !important",
  },
}));

export default useStyles;
