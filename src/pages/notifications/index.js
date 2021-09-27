import React from "react";
import useStyles from "./styles";
import NavBar from "../../components/navBar";
import NotificationCard from "../../components/notificationCard";
import PoweredBySource from "../../components/poweredBySource";
import { Grid, Typography } from "@material-ui/core";

function Notifications({ requests }) {
  const styles = useStyles();
  return (
    <Grid
      container
      alignItems="center"
      justiyContent="center"
      direction="column">
      <NavBar />
      <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
        className={styles.stack}>
        <Typography className={styles.title}>Notifications:</Typography>
        {requests ? (
          requests.length > 0 ? (
            requests.map((request) => <NotificationCard request={request} />)
          ) : (
            <Typography className={styles.noNotifications}>
              No new notifications
            </Typography>
          )
        ) : (
          <Typography className={styles.noNotifications}>
            This Should Not Be Happening,
            <br />
            Please Contact Support!
          </Typography>
        )}
      </Grid>
      <PoweredBySource />
    </Grid>
  );
}

export default Notifications;
