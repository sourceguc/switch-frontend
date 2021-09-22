import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
    paragraph: {
        fontSize: "13px",
        textAlign: 'left',
      },
    button: {
      borderColor: "#000000",
      backgroundColor: "#000000",
      marginRight: "4px",
      boxShadow: "#62BF84"
    },
    container: {
      backgroundColor: "#000",
    }
}));

export default useStyles;
