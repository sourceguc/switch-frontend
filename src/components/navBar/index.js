import React, { useState } from "react";
import useStyles from "./style";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Tooltip,
  Badge,
  Grid,
  Modal,
  Backdrop,
  Fade,
  Link
} from "@material-ui/core";
import Request from "../request";

function NavBar(props) {
  const styles = useStyles();
  const [modalView, setModalView] = useState(false);
  const handleOpen = () => setModalView(true);
  const handleClose = () => setModalView(false);
  return (
    <AppBar color="secondary" className={styles.appBar}>
      <Modal
        open={modalView}
        onClose={handleClose}
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={styles.modal}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={modalView}>
          <div className={styles.paper}>
            <Request />
          </div>
        </Fade>
      </Modal>

      <Toolbar>
        <Grid container direction="row" className={styles.gridTitle}>
          <Typography className={styles.text}>SWITCH ME</Typography>
        </Grid>

                <Toolbar>
                    <Grid
                        container 
                        direction="row" 
                        className={styles.gridTitle}>
                        <Link href="/" underline="none" className={styles.link}>
                            <Typography className={styles.text} >
                                SWITCH ME
                            </Typography>
                        </Link>
                    </Grid>
                    
                        <Grid 
                            container 
                            direction="row" 
                            justifyContent="flex-end" 
                            className={styles.gridIcons}>
                            <Grid item xs={2} md={1}>
                                <Tooltip title="Add Request" >
                                    <IconButton className={styles.icon} color="primary" onClick={handleOpen}>
                                        <ion-icon name="add" class={styles.ionIcon}></ion-icon>
                                    </IconButton>
                                </Tooltip>
                            </Grid>

                            <Grid item xs={2} md={1}>
                                <Tooltip title="Filter">
                                    <IconButton className={styles.icon} color="primary">
                                        <ion-icon name="funnel" class={styles.ionIcon}></ion-icon>
                                    </IconButton>
                                </Tooltip>
                            </Grid>

                            <Grid item xs={2} md={1}>
                                <Tooltip title="My Account">
                                    <IconButton className={styles.icon} color="primary" href="profile">
                                        <ion-icon name="person" class={styles.ionIcon}></ion-icon>
                                    </IconButton>
                                </Tooltip>
                            </Grid>

          <Grid item xs={2} md={1}>
            <Tooltip title="Notifications">
              <IconButton
                className={styles.icon}
                color="primary"
                href="notifications"
              >
                <Badge
                  badgeContent={
                    parseInt(props.notifications) ? props.notifications : 0
                  }
                  color="primary"
                  classes={{ badge: styles.badge }}
                >
                  <ion-icon
                    name="notifications"
                    class={styles.ionIcon}
                  ></ion-icon>
                </Badge>
              </IconButton>
            </Tooltip>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
