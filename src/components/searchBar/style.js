import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
    searchOutline: {
        '& > *': {
          margin: theme.spacing(1),
          width: '100%',
        },
      },
}));

export default useStyles;
