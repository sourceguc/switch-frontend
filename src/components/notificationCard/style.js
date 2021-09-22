import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
    paragraph: {
        fontSize: "13px",
        textAlign: 'left',
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
}));

export default useStyles;
