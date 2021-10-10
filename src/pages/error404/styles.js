import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    noNotifications: {
      fontFamily: "Source",
      fontWeight: 400,
      FontSize: "34px",
      width: "100%",
      backgroundColor: "secondary",
      padding: "1em",
      top: "7em",
      position: "fixed",
      zIndex: "5",
      marginTop: "3em",
      textAlign: "center",
      [theme.breakpoints.up("md")]: {
        fontSize: "2em"
      }
    },
    sourcelogo: {
      position: "fixed",
      bottom: "0em",
      width: "100%",
      backgroundColor: "#1E1E1E",
      padding: "0.4em",
      paddingTop: "3em",
    },
    poweredbysource: {
      position: "fixed",
      bottom: "0.8em"
    },
    stack: {
      marginTop: "3.6em",
      [theme.breakpoints.up("md")]: {
        width: "56em !important",
        borderWidth: "3px",
        borderStyle: "solid",
        borderImage:
          "linear-gradient(to bottom, #62BF84, rgba(0, 0, 0, 0)) 1 100%",
      },
    },
}));

export default useStyles;
