import React from 'react'
import useStyles from './styles'
import NotificationCard from '../../components/notificationCard';
import PoweredBySource from "../../components/poweredBySource";
import NavBar from "../../components/navBar";
import { Stack } from '@mui/material';
import { Grid, Typography } from '@material-ui/core';

function Notifications({ requests}) {
    const styles = useStyles();
    return (
        <Grid
            direction="column"
            justifyContent="space-between"
            alignItems="center"
            className={styles.container}
            >
            <NavBar />
            <Typography className={styles.title}>
                Notifications
            </Typography>
            <br />
            <br />
            <Stack
                container
                direction="column"
                justifyContent="top"
                alignItems="center"
                className={styles.stack}
                >
                {requests.length>0 ? requests.map((request) => (
                    <>
                    <NotificationCard request={request} />
                    <br />
                    </>
                ))
                : <Typography className={styles.noNotifications} >No new notifications</Typography>
                }
                <br/>
            </Stack>
            <div className={styles.sourcelogo} >
                <PoweredBySource />
            </div>
        </Grid>
    )
}

export default Notifications
