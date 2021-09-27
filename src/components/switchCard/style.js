import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
    paragraph: {
        fontSize: "11px",
        textAlign: '-webkit-left',
        [theme.breakpoints.up("md")]: {
          fontSize: "20px"
        }
      },
    subtitle: {
        fontSize: "15px",
        textAlign: '-webkit-left',
      },
      button: {
        borderColor: "#000000",
        backgroundColor: "#000000",
        boxShadow: "#62BF84",
      },
      request: {
        color: "#FFFFFF"
      },
    container: {
      backgroundColor: "#000",
      padding: "0.4em",
      border: '1px solid #62BF84',
    },
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
    paper: {
        backgroundColor: "#1E1E1E",
        border: '2px solid #62BF84',
        width: "100%",
        boxShadow: theme.shadows[5],
        [theme.breakpoints.up("md")]: {
            width: "60%",
          }
      },
    schedule: {
        width: "300px",
        [theme.breakpoints.up("md")]: {
            width: "450px",
        }
    },
    avatar: {
      width: "60px",
      height: "60px",
      [theme.breakpoints.up("md")]: {
        width: "140px",
        height: "140px",
      }
    },
}));

export default useStyles;
