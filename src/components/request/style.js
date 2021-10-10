import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  border: {
    position: "relative",
    margin: "1.5em",
    border: "solid white",
    borderRadius: "0.5em",
    padding: "1em",
    width: "20%",
    background: "#1E1E1E",
    [theme.breakpoints.up("xs")]: {
      width: "80%",
    },
    [theme.breakpoints.up("md")]: {
      width: "40%",
    },
    [theme.breakpoints.up("lg")]: {
      width: "25%",
    },
  },
  text: {
    color: "white",
    fontFamily: "Roboto",
    position: "absolute",
    backgroundColor: "#1E1E1E",
    top: "-0.7em",
    left: "1em",
    textAlign: "center",
    borderRadius: "0.5em",
    [theme.breakpoints.up("xs")]: {
      width: "40%",
    },
    [theme.breakpoints.up("md")]: {
      width: "37%",
    },
    [theme.breakpoints.up("xl")]: {
      width: "20%",
    },
  },
  button: {
    backgroundColor: "#62BF84",
    "&:hover": {
      backgroundColor: "#62BF84",
    },
    color: "white",
    position: "absolute",
    bottom: "-1em",
    right: "1em",
    height: "15%",
    [theme.breakpoints.up("xs")]: {
      width: "20%",
    },
    [theme.breakpoints.up("md")]: {
      width: "25%",
    },
    [theme.breakpoints.up("xl")]: {
      width: "15%",
      right: "1.5em",
    },
  },
}));

export default useStyles;
