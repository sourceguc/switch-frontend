import { Avatar, Divider, Grid } from '@material-ui/core';
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
                <Divider />
                <br />
                <Grid
                    container
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                    >
                    <Avatar
                        alt={request.name}
                        style={{ width: 80, height: 80 }}
                        src={request.id}
                        />
                    <div className={styles.paragraph}>
                        NAME : {request.name.toUpperCase()}
                        <br />
                        FROM : {request.from.toUpperCase()}
                        <br />
                        TO : {request.to.toUpperCase()}
                    </div>
                    <div>
                        <Button>
                            <Check color="primary" fontSize="large" />
                        </Button>
                        <Button >
                            <Clear color="primary" fontSize="large" />
                        </Button>
                    </div>
                </Grid>
                <br />
                <Divider />
            </Grid>
    )
}

export default NotificationCard
