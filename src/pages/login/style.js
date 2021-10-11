import { makeStyles } from "@material-ui/core/styles";
const isFirefox = typeof InstallTrigger !== 'undefined';
const center = isFirefox ? '-moz-center' : '-webkit-center';
const useStyles = makeStyles((theme) => ({
  container: {
    [theme.breakpoints.up("md")]: {
      textAlign: center,
      height: "85%",
      marginTop: "3.5em",
    },
  },
  loginContainer: {
    zIndex: 5,
    gap: "4.5em",
    marginTop: "2em",
    [theme.breakpoints.up("md")]: {
      width: "56em !important",
      height: "56em",
      borderWidth: "3px",
      borderStyle: "solid",
      borderImage:
        "linear-gradient(to bottom, #62BF84, rgba(0, 0, 0, 0)) 1 100%",
    },
  },
  buttonContainer: {
    gap: "1em",
    Zindex: 5,
  },
  title: {
    fontFamily: "Source",
    fontWeight: 400,
    FontSize: "34px",
    zIndex: 5,
  },
  textContainer: {
    textAlign: "center",
    zIndex: 5,
  },
  paragraph: {
    fontSize: "12px",
    marginTop: "-1em",
  },
  background: {
    position: "relative",
    zIndex: 1,
    height: 0,
  },
  arrow1: {
    position: "absolute",
    bottom: "7em",
    left: "7em",
  },
  arrow2: {
    position: "absolute",
    bottom: "7em",
    left: "5em",
    opacity: 0,
    transform: "rotate(80deg)",
  },
  arrow3: {
    position: "absolute",
    bottom: "17em",
    right: "7.5em",
    transform: "rotate(98deg)",
  },
  arrow4: {
    position: "absolute",
    bottom: "18em",
    left: "6em",
    transform: "rotate(345deg)",
  },
  arrow5: {
    position: "absolute",
    bottom: "17.5em",
    left: "-2em",
    transform: "rotate(45deg)",
  },
  arrow6: {
    position: "absolute",
    bottom: "7em",
    right: "7em",
    transform: "rotate(100deg)",
  },
  arrow7: {
    position: "absolute",
    bottom: "25em",
    left: "7em",
    transform: "rotate(270deg)",
  },
  arrow8: {
    position: "absolute",
    bottom: "25em",
    right: "7em",
    transform: "rotate(198deg)",
  },
  circle: {
    width: "31em",
    height: "31em",
    borderRadius: "20em",
    border: "1em",
    backgroundColor: "rgb(0 0 0)",
    position: "absolute",
    bottom: "27em",
    left: "-15em",
    zIndex: -1,
    [theme.breakpoints.up("md")]: {
      opacity: 0,
    },
  },
}));

export default useStyles;
