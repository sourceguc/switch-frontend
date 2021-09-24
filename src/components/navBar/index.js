import React from "react";
import useStyles from "./style";
import { AppBar, Toolbar, Typography, IconButton, Tooltip, Badge, Grid } from "@material-ui/core";

function NavBar(props) {
    const styles = useStyles();
    return (
        <AppBar color="secondary" className={styles.appBar}>
            <Toolbar>
                <Grid
                    container 
                    direction="row" 
                    className={styles.gridTitle}>
                    <Typography className={styles.text}>
                        SWITCH ME
                    </Typography>
                </Grid>
                
                    <Grid 
                        container 
                        direction="row" 
                        justifyContent="flex-end" 
                        className={styles.gridIcons}>
                        <Grid item xs={2} md={1}>
                            <Tooltip title="Add Request" >
                                <IconButton className={styles.icon} color="primary" href="addSwitch">
                                    <ion-icon name="add" class={styles.ionIcon}></ion-icon>
                                </IconButton>
                            </Tooltip>
                        </Grid>

                        <Grid item xs={2} md={1}>
                            <Tooltip title="Filter">
                                <IconButton className={styles.icon} color="primary" href="filter">
                                    <ion-icon name="funnel" class={styles.ionIcon}></ion-icon>
                                </IconButton>
                            </Tooltip>
                        </Grid>

                        <Grid item xs={2} md={1}>
                            <Tooltip title="My Account">
                                <IconButton className={styles.icon} color="primary" href="account">
                                    <ion-icon name="person" class={styles.ionIcon}></ion-icon>
                                </IconButton>
                            </Tooltip>
                        </Grid>

                        <Grid item xs={2} md={1}>
                            <Tooltip title="Notifications">
                                <IconButton className={styles.icon} color="primary" href="notifications">
                                    <Badge badgeContent={parseInt(props.notifications) ? props.notifications : 0} color='primary' classes={{badge: styles.badge}}>
                                        <ion-icon name="notifications" class={styles.ionIcon}></ion-icon>
                                    </Badge>
                                </IconButton>
                            </Tooltip>
                        </Grid>    
                    </Grid>
            </Toolbar>
        </AppBar>
        )
}

export default NavBar
