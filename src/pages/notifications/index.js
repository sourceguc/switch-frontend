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
      justifyContent="center"
      direction="column"
    >
      <NavBar />
      <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="flex-start"
        className={styles.stack}
      >
        <Typography className={styles.title}>Notifications</Typography>
        <div className={styles.spacer}></div>
        {requests ? (
          requests.length > 0 ? (
            requests.map((request) => (
              <NotificationCard key={request.id} request={request} />
            ))
          ) : (
            <Typography className={styles.noNotifications}>
              No New Notifications
            </Typography>
          )
        ) : (
          <Typography className={styles.noNotifications}>
            This Should Not Be Happening,
            <br />
            Please Contact Support!
          </Typography>
        )}
        <div className={styles.sourcelogo}></div>
        <div className={styles.poweredbysource}>
          <PoweredBySource />
        </div>
      </Grid>
    </Grid>
  );
}

export default Notifications;
