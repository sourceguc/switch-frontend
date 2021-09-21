import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
  iconAdd: {
    position: "absolute",
    fontSize: "18px",
    top: "0.3em",
    right: "5.75em"
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
    right: "2.25em"
  },
   iconBell: {
    position: "absolute",
    fontSize: "18px",
    top: "0.3em",
    right: "0.5em"
  },
  text: {
    fontFamily: "Source"
  },
  iconContainer: {
    display: "flex",
  },
  appBar: {
    boxShadow: "none",
  },
  ionIcon: {
    pointerEvents: "none",
  }
});

export default useStyles;