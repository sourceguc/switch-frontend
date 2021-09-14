import React from "react";
import Button from "../../components/button/IconButton";
import useStyles from "./style";
import Grid from "@material-ui/core/Grid";
import PoweredBySource from "../../components/poweredBySource";
import Source from "../../assets/Images/illustration.svg";
import Arrow from "./Arrow";

function Login() {
  const styles = useStyles();

  return (
    <div className={styles.container}>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        className={styles.loginContainer}>
        <img src={Source} alt="switching people" />
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
      <div className={styles.background}>
        <Arrow style={styles.arrow1} color="#FFF129" />
        <Arrow style={styles.arrow2} />
        <Arrow style={styles.arrow3} color="#23CE6B" />
        <Arrow style={styles.arrow4} color="#ED33B9" />
        <Arrow style={styles.arrow5} color="#FFF129" />
        <Arrow style={styles.arrow6} />
        <Arrow style={styles.arrow7} color="#23CE6B" />
        <Arrow style={styles.arrow8} color="#ED33B9" />
      </div>
    </div>
  );
}

export default Login;
