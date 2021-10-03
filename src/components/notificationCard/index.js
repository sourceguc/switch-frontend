import { Avatar, Grid, Toolbar } from '@material-ui/core';
import { Check, Clear } from '@material-ui/icons';
import React from 'react'
import useStyles from "./style";
import Button from "@material-ui/core/Button";

function NotificationCard({request}) {
    
    const styles = useStyles();
    return (
        <Grid className={styles.main}>
            <Grid
                container
                direction="column"
                className={styles.container}
                >
                <Toolbar style={{ padding: "0em"}}>
                    <Grid
                        container
                        direction="row"
                        justifyContent="flex-start"
                        alignItems="center">
                    <Avatar
                        alt={request.name}
                        className={styles.avatar}
                        src={request.id}
                        />
                    <Grid item className={styles.paragraph}>
                        <div>NAME : {request.name.toUpperCase()}</div>
                        <div>FROM : {request.from.toUpperCase()}</div>
                        <div>TO : {request.to.toUpperCase()}</div>
                    </Grid>
                    </Grid>
                    <Grid item>
                        <Button className={styles.button}>
                            <Check color="primary" fontSize="large"  />
                        </Button>
                    </Grid>
                    
                    <Grid item>
                        <Button className={styles.button} >
                            <Clear color="primary" fontSize="large" />
                        </Button>
                    </Grid>
                </Toolbar>
            </Grid>
            <br />
            </Grid>
    )
}

export default NotificationCard
