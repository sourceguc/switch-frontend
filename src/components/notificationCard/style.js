import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
    paragraph: {
        fontSize: "12px",
        textAlign: 'left',
        [theme.breakpoints.up("md")]: {
          fontSize: "20px"
        }
      },
    button: {
      borderColor: "#000000",
      backgroundColor: "#000000",
      boxShadow: "#62BF84"
    },
    container: {
      backgroundColor: "#000",
      padding: "0.4em"
    },
    avatar: {
      width: "80px",
      height: "80px",
      [theme.breakpoints.up("md")]: {
        width: "140px",
        height: "140px",
      }
    }
}));

export default useStyles;
