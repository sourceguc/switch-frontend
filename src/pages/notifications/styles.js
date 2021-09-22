import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles((theme) => ({
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
    },
    noNotifications: {
      fontFamily: "Source",
      fontWeight: 400,
      FontSize: "34px",
      width: "100%",
      backgroundColor: "#1E1E1E",
      padding: "1em",
      top: "2.5em",
      position: "fixed",
      zIndex: "5",
      marginTop: "3em",
      textAlign: "center"
    },
    sourcelogo: {
      position: "fixed",
      bottom: "0em",
      width: "100%",
      backgroundColor: "#1E1E1E",
      padding: "0.4em",
      paddingLeft: "8em"
    },
    stack: {
      marginTop: "3.6em"
    }
}));

export default useStyles;
