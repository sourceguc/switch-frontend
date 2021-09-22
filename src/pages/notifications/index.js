import React from 'react'
import useStyles from './styles'
import NotificationCard from '../../components/notificationCard';
import PoweredBySource from "../../components/poweredBySource";
import NavBar from "../../components/navBar";
import { Stack } from '@mui/material';
import { Typography } from '@material-ui/core';

function Notifications({requests}) {
    const styles = useStyles();
    return (
        <div>
            <NavBar />
            <br />
            <br />
                <Typography className={styles.title}>
                    Notifications
                </Typography>
            <Stack
                container
                direction="column"
                justifyContent="space-between"
                alignItems="center"
                className={styles.stack}
                >
                    {requests.length>0 ? requests.map((request) => (
                        <>
                        <NotificationCard request={request} />
                        <br />
                        </>
                    ))
                    : <Typography className={styles.noNotifications} >No new notifications.</Typography>
                    }
                <br/>
            </Stack>
            
            <div className={styles.sourcelogo} >
                        <PoweredBySource />
                    </div>
                <br />
        </div>
    )
}

export default Notifications
