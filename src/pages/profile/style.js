import { makeStyles } from "@material-ui/core/styles";
const isFirefox = typeof InstallTrigger !== "undefined";
const center = isFirefox ? "-moz-center" : "-webkit-center";
export const useStyles = makeStyles((theme) => ({
  grid: {
    marginTop: "4em",
    [theme.breakpoints.up("md")]: {},
    [theme.breakpoints.up("md")]: {
      borderWidth: "3px",
      borderStyle: "solid",
      borderImage:
        "linear-gradient(to bottom, #62BF84, rgba(0, 0, 0, 0)) 1 100%",
      width: "99%",
      marginLeft: "0.3em",
    },
  },
  profile: {
    fontFamily: "Source !important",
    [theme.breakpoints.up("md")]: {
      fontSize: "2em !important",
      marginTop: "1em",
    },
  },
  textGrid: {
    alignSelf: "start",
    marginLeft: "1.5em",
    [theme.breakpoints.down("md")]: {
      marginLeft: "1.5em",
    },
    [theme.breakpoints.only("xs")]: {
      marginLeft: "1em",
    },
  },
  avatar: {
    width: theme.spacing(16),
    height: theme.spacing(16),
    [theme.breakpoints.down("md")]: {
      width: theme.spacing(12),
      height: theme.spacing(12),
    },
  },
  name: {
    fontFamily: "Roboto",
    background: "black",
    width: "8em",
    textAlign: "center",
    marginTop: "-0.4em",
    borderColor: "#62BF84",
    border: "solid 1px",
  },
  info: {
    marginTop: "1.75em",
    [theme.breakpoints.between("xs", "sm")]: {
      alignSelf: "start",
      marginLeft: "1.5em",
      marginTop: "1.25em",
    },
    [theme.breakpoints.only("xs")]: {
      marginLeft: "1em",
    },
    display: "flex",
    alignItems: "center",
    fontSize: "12px",
  },
  scheduleInfo: {
    alignSelf: "start",
    marginLeft: "1.5em",
    marginTop: "1.25em",
    [theme.breakpoints.down("md")]: {
      marginLeft: "1.5em",
    },
    [theme.breakpoints.only("xs")]: {
      marginLeft: "1em",
    },
    [theme.breakpoints.only("md")]: {
      marginLeft: "21em",
    },
  },
  schedule: {
    marginTop: "1em",
    position: "relative",
  },
  scheduleModal: {
    width: "95%",
    position: "absolute",
    top: "14em",
    [theme.breakpoints.only("xs")]: {
      left: "0.5em",
    },
    [theme.breakpoints.only("sm")]: {
      left: "0.9em",
    },
    [theme.breakpoints.only("md")]: {
      left: "1.6em",
    },
    [theme.breakpoints.only("lg")]: {
      width: "70%",
      left: "12em",
    },
    [theme.breakpoints.only("xl")]: {
      width: "70%",
      left: "18em",
    },
  },
  other: {
    marginTop: "3em",
  },
  buttons: {
    margin: "1em",
  },
  button: {
    margin: "2em",
  },
  textField: {
    marginLeft: "1em !important",
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
}));

export default useStyles;
