import React from 'react'
import useStyles from "./styles";
import NavBar from "../../components/navBar";
import PoweredBySource from "../../components/poweredBySource";
import { Grid, Typography } from "@material-ui/core";

function Error404() {

    const styles= useStyles();


    return (
        <Grid
          container
          alignItems="center"
          justifyContent="flex-start"
          direction="column">
          <NavBar />
          <Grid
            container
            direction="column"
            alignItems="center"
            justifyContent="flex-start"
            className={styles.stack}>
          
            <Typography className={styles.noNotifications}>
                  404, page not found.
            </Typography>
            <div className={styles.sourcelogo}></div>
            <div className={styles.poweredbysource}  >
                <PoweredBySource />
            </div>
          </Grid>
    </Grid>
    )
}

export default Error404
