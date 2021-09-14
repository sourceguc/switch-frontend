import React from "react";
import Button from "../../components/button/IconButton";
import useStyles from "./style";
import Grid from "@material-ui/core/Grid";
import PoweredBySource from "../../components/poweredBySource";

function Login() {
  const styles = useStyles();

  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      className={styles.loginContainer}>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        className={styles.textContainer}>
        <h1 className={styles.title}>Switch me</h1>
        <div className={styles.paragraph}>
          No more headaches, using switch me
          <br />
          you get mindless easy switching!
        </div>
      </Grid>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        className={styles.buttonContainer}>
        <Button
          icon={<ion-icon name="logo-facebook" />}
          text={"LOGIN WITH FACEBOOK"}
        />
        <Button
          icon={<ion-icon name="logo-google" />}
          text={"LOGIN WITH GOOGLE"}
        />
      </Grid>
      <PoweredBySource />
    </Grid>
  );
}

export default Login;
