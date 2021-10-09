import { makeStyles } from "@material-ui/core/styles";
const isFirefox = typeof InstallTrigger !== "undefined";
const left = isFirefox ? "-moz-left" : "-webkit-left";
export const useStyles = makeStyles((theme) => ({
  main: {
    width: "100%",
  },
  toolbar: {
    padding: "0em",
  },
  paragraph: {
    paddingLeft: "2em",
    fontSize: "12px",
    textAlign: left,
    [theme.breakpoints.up("md")]: {
      fontSize: "20px",
    },
  },
  button: {
    borderColor: "#000000",
    backgroundColor: "#000000",
    boxShadow: "#62BF84",
  },
  container: {
    backgroundColor: "#000",
    padding: "0.4em",
    borderTop: "1px solid #62BF84",
    borderBottom: "1px solid #62BF84",
  },
  avatar: {
    width: "80px",
    height: "80px",
    [theme.breakpoints.up("md")]: {
      width: "140px",
      height: "140px",
    },
  },
}));

export default useStyles;
