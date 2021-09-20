import React from "react";
import useStyles from "./style";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { IconButton } from "@material-ui/core";

function NavBar() {
    const styles = useStyles();
    return (
        <AppBar color="secondary" className={styles.appBar}>
            <Toolbar>
                <Typography className={styles.text}>
                    SWITCH ME
                </Typography>

                <IconButton className={styles.iconAdd} color="primary" href="addSwitch">
                    <ion-icon name="add" ></ion-icon>
                </IconButton>

                <IconButton className={styles.iconFilter} color="primary" href="filter">
                    <ion-icon name="funnel" ></ion-icon>
                </IconButton>

                <IconButton className={styles.iconUser} color="primary" href="account">
                    <ion-icon name="person" ></ion-icon>
                </IconButton>

                <IconButton className={styles.iconBell} color="primary" href="notifications">
                    <ion-icon name="notifications" ></ion-icon>
                </IconButton>
            </Toolbar>
        </AppBar>
        )
}

export default NavBar
