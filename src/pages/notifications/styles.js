import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles((theme) => ({
    title: {
        fontFamily: "Source",
        fontWeight: 400,
        FontSize: "34px",
        zIndex: 5,
      },
    sourcelogo: {
      alignContent: "center",
      position: "fixed",
      bottom: "30px",
    }
}));

export default useStyles;
