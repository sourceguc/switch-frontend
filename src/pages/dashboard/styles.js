import { makeStyles } from "@material-ui/core";

const isFirefox = typeof InstallTrigger !== 'undefined';
const center = isFirefox ? '-moz-center' : '-webkit-center';
const useStyles = makeStyles((theme) => ({
    title: {
      fontFamily: "Source",
      fontWeight: 400,
      FontSize: "34px",
      width: "100%",
      backgroundColor: "#1E1E1E",
      padding: "1em",
      top: "2.5em",
      position: "fixed",
      zIndex: "5",
      [theme.breakpoints.up("md")]: {
        textAlign: center,
        top: "1em",
        width: "10em !important auto",
        fontSize: "2em",
        
      },
    },
    searchgroup: {
      width: "100%"
    },
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
    container: {
      [theme.breakpoints.up("md")]: {
        textAlign: center,
        height: "85%",
        marginTop: "3.5em",
      },
    },
    searchOutline: {
      '& > *': {
        margin: theme.spacing(1),
        width: '100%',
      },
      width: "95%",
      },
    buttons: {
      paddingLeft: "1em"
      }

}));

export default useStyles;
