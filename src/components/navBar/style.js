import { makeStyles } from "@material-ui/core/styles";
const isFirefox = typeof InstallTrigger !== "undefined";
const center = isFirefox ? "-moz-center" : "-webkit-center";
export const useStyles = makeStyles((theme) => ({
  icon: {
    fontSize: "1.1em",
    [theme.breakpoints.up("md")]: {
      fontSize: "2em",
    },
  },
  gridIcons: {
    width: "40%",
    gap: "0.5em",
    marginRight: "1em",
    [theme.breakpoints.up("md")]: {
      gap: "1.5em",
    },
  },
  gridTitle: {
    width: "60%",
    flex: "1",
  },
  text: {
    fontFamily: "Source !important",
    [theme.breakpoints.up("md")]: {
      fontSize: "2em !important",
    },
  },
  appBar: {
    boxShadow: "none !important",
    display: "flex",
  },
  ionIcon: {
    pointerEvents: "none",
  },
  badge: {
    color: "white",
    margin: "0em",
    fontSize: "0.5em",
    minWidth: "1.2em",
    width: "1.3em",
    height: "1.3em",
  },
  modal: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  paper: {
    outline: "0",
    textAlign: center,
  },
  link: {
    color: "white"
  }
}));

export default useStyles;
