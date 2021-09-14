import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  container: {
    position: "absolute",
  },
  loginContainer: {
    gap: "5em",
    marginTop: "2em",
  },
  buttonContainer: {
    gap: "1em",
  },
  title: {
    fontFamily: "Source",
    fontWeight: 400,
    FontSize: "34px",
  },
  textContainer: {
    textAlign: "center",
  },
  paragraph: {
    fontSize: "12px",
    marginTop: "-1em",
  },
});

export default useStyles;
