import React from "react";
import Button from "@material-ui/core/Button";
import useStyles from "./style";

function IconButton(props) {
  const styles = useStyles();
  return (
    <Button
      variant="outlined"
      color="primary"
      startIcon={props.icon}
      className={styles.iconButton}
    >
      {props.text}
    </Button>
  );
}

export default IconButton;
