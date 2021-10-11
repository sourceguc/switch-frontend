import React from "react";
import useStyles from "./style";
import Source from "../../assets/Images/logo.png";

function PoweredBySource() {
  const styles = useStyles();

  return (
    <div className={styles.sourceContainer}>
      <img src={Source} alt="src" className={styles.logo} />
      <div>Powered By Source</div>
    </div>
  );
}

export default PoweredBySource;
