import React from "react";
import useStyles from "./style";
import { AppBar, Toolbar, Typography, IconButton, Tooltip } from "@material-ui/core";

function NavBar() {
    const styles = useStyles();
    return (
        <AppBar color="secondary" className={styles.appBar}>
            <Toolbar>
                <Typography className={styles.text}>
                    SWITCH ME
                </Typography>

                <Tooltip title="Add Request">
                    <IconButton className={styles.iconAdd} color="primary" href="addSwitch">
                        <ion-icon name="add" class={styles.ionIcon}></ion-icon>
                    </IconButton>
                </Tooltip>

                <Tooltip title="Filter">
                    <IconButton className={styles.iconFilter} color="primary" href="filter">
                        <ion-icon name="funnel" class={styles.ionIcon}></ion-icon>
                    </IconButton>
                </Tooltip>

                <Tooltip title="My Account">
                    <IconButton className={styles.iconUser} color="primary" href="account">
                        <ion-icon name="person" class={styles.ionIcon}></ion-icon>
                    </IconButton>
                </Tooltip>

                <Tooltip title="Notifications">
                    <IconButton className={styles.iconBell} color="primary" href="notifications">
                        <ion-icon name="notifications" class={styles.ionIcon}></ion-icon>
                    </IconButton>
                </Tooltip>
            </Toolbar>
        </AppBar>
        )
}

export default NavBar
