import { Avatar, Grid } from '@material-ui/core';
import { Check, Clear } from '@material-ui/icons';
import React from 'react'
import useStyles from "./style";
import Button from "@material-ui/core/Button";

function NotificationCard({request}) {
    
    const styles = useStyles();
    return (
            <Grid
                container
                direction="column"
                className={styles.container}
                >
                <Grid
                    container
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                    >
                    <Avatar
                        alt={request.name}
                        className={styles.avatar}
                        src={request.id}
                        />
                    <div className={styles.paragraph}>
                        NAME : {request.name.toUpperCase()}
                        <br />
                        FROM : {request.from.toUpperCase()}
                        <br />
                        TO : {request.to.toUpperCase()}
                    </div>
                    <div >
                        <Button className={styles.button}>
                            <Check color="primary" fontSize="large"  />
                        </Button>
                        <Button className={styles.button} >
                            <Clear color="primary" fontSize="large" />
                        </Button>
                    </div>
                </Grid>
            </Grid>
    )
}

export default NotificationCard
