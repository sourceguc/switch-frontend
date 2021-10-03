import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    title: {
      fontFamily: "Source",
      fontWeight: 400,
      FontSize: "34px",
      width: "93%",
      backgroundColor: "#1E1E1E",
      padding: "1em",
      top: "2.5em",
      position: "fixed",
      zIndex: "5",
      [theme.breakpoints.up("md")]: {
        textAlign: "-webkit-center",
        top: "1em",
        width: "10em !important auto",
        fontSize: "2em",
        
      },
    },
    noNotifications: {
      fontFamily: "Source",
      fontWeight: 400,
      FontSize: "34px",
      width: "100%",
      backgroundColor: "secondary",
      padding: "1em",
      top: "2.5em",
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
    container: {
      [theme.breakpoints.up("md")]: {
        textAlign: "-webkit-center",
        height: "85%",
        marginTop: "3.5em",
      },
    },
    spacer: {
      height: "2.4em",
      [theme.breakpoints.up("md")]: {
        height: "5.7em",
      },
    },
    poweredbysource: {
      position: "fixed",
      bottom: "0.8em"
    }
}));

export default useStyles;
