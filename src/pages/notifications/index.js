import React from 'react'
import useStyles from './styles'
import NotificationCard from '../../components/notificationCard';
import PoweredBySource from "../../components/poweredBySource";
import { Stack } from '@mui/material';

const requests = [
    {id: "https://avatars.githubusercontent.com/u/62481993?v=4",
    name: "Shehab Solyman",
    from: "T-24 G-01",
    to: "T-17 G-02"},
    {id:"https://avatars.githubusercontent.com/u/51823470?v=4",
    name: "Aly Yasser",
    from: "T-14 G-02",
    to: "T-05 G-01"},
    {id:"https://avatars.githubusercontent.com/u/68119650?v=4",
    name: "Andrew Hany",
    from: "T-31 G-03",
    to: "T-07 G-02"},
    {id:"https://avatars.githubusercontent.com/u/51823470?v=4",
    name: "Aly Yasser",
    from: "T-14 G-02",
    to: "T-05 G-01"},
    {id:"https://avatars.githubusercontent.com/u/68119650?v=4",
    name: "Andrew Hany",
    from: "T-31 G-03",
    to: "T-07 G-02"},
    {id:"https://avatars.githubusercontent.com/u/51823470?v=4",
    name: "Aly Yasser",
    from: "T-14 G-02",
    to: "T-05 G-01"},
    {id:"https://avatars.githubusercontent.com/u/68119650?v=4",
    name: "Andrew Hany",
    from: "T-31 G-03",
    to: "T-07 G-02"},
]

function Notifications() {
    const styles = useStyles();
    return (
        <div>
            <h2 className={styles.title}>Switch me</h2>
            <br />
            <h2 className={styles.title}>Notifications</h2>
            <br />
            <Stack
                container
                direction="column"
                justifyContent="space-between"
                alignItems="center"
                >
                    {requests.length>0 ? requests.map((request) => (
                        <>
                        <NotificationCard request={request} />
                        <br />
                        </>
                    ))
                    : <h3 className={styles.title}>No new notifications.</h3>
                    }
                <br/>
                    <div className={styles.sourcelogo} >
                        <PoweredBySource />
                    </div>
                <br />
            </Stack>
        </div>
    )
}

export default Notifications
