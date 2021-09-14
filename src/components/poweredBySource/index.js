import React from "react";
import useStyles from "./style";
import Source from "../../assets/Images/logo.png";

function PoweredBySource() {
  const styles = useStyles();

  return (
    <div className={styles.sourceContainer}>
      <img src={Source} alt="src" />
    </div>
  );
}

export default PoweredBySource;
