import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
  iconAdd: {
    position: "absolute",
    fontSize: "18px",
    top: "0.3em",
    right: "5.5em"
  },
   iconFilter: {
    position: "absolute",
    fontSize: "18px",
    top: "0.3em",
    right: "4em",
  },
   iconUser: {
    position: "absolute",
    fontSize: "18px",
    top: "0.3em",
    right: "2.5em"
  },
   iconBell: {
    position: "absolute",
    fontSize: "18px",
    top: "0.3em",
    right: "1em"
  },
  text: {
    fontFamily: "Source"
  },
  iconContainer: {
    display: "flex",
  },
  appBar: {
    boxShadow: "none",
  }
});

export default useStyles;