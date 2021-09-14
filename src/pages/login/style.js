import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  loginContainer: {
    zIndex: 5,
    gap: "4em",
    marginTop: "2em",
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
    width: "100%",
    zIndex: 1,
    height: 0,
  },
  arrow1: {
    position: "relative",
    bottom: "4em",
    left: "0em",
  },
  arrow2: {
    position: "relative",
    bottom: "7em",
    left: "5em",
    opacity: 0,
    transform: "rotate(80deg)",
  },
  arrow3: {
    position: "relative",
    bottom: "12em",
    left: "11.5em",
    transform: "rotate(270deg)",
  },
  arrow4: {
    position: "relative",
    bottom: "1em",
    left: "6em",
    transform: "rotate(198deg)",
  },
  arrow5: {
    position: "relative",
    bottom: "30em",
    left: "0em",
  },
  arrow6: {
    position: "relative",
    bottom: "25em",
    left: "1em",
    transform: "rotate(100deg)",
  },
  arrow7: {
    position: "relative",
    bottom: "20em",
    left: "1em",
    transform: "rotate(270deg)",
  },
  arrow8: {
    position: "relative",
    bottom: "29em",
    left: "1em",
    transform: "rotate(198deg)",
  },
});

export default useStyles;
