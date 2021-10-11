import React, { useState }  from 'react';
import { Avatar, Grid, IconButton, Toolbar, Tooltip, Typography, Modal, Button, Collapse, Fade, Backdrop, useMediaQuery } from '@material-ui/core';
import useStyles from "./style";
import { KeyboardArrowDown, KeyboardArrowUp } from '@material-ui/icons';

function SwitchCard({ switcher }) {

    const styles = useStyles();
    const upMd = useMediaQuery(theme => theme.breakpoints.up("md"));

    const buttonProps = { size: upMd ? "large" : "small" };
    const collapseProps = { collapsedSize: upMd ? 140 : 60 };
    const arrowProps = { fontSize: upMd ? "large" : "medium"}
    
    const [expanded, setExpanded] = useState(false);
    const [scheduleView, setScheduleView] = useState(false);

    const handleOpen = () => {
        setScheduleView(true);
      };
    
      const handleClose = () => {
        setScheduleView(false);
      };


    return (
        <Grid key={switcher.id} className={styles.main}>
        <Grid
            container
            direction="column"
            className={styles.container}
            >
            
        <Collapse in={expanded} {...collapseProps} className={styles.collapse}>
            <Toolbar className={styles.toolbar}>
            <Grid
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
                >
                <Avatar
                    alt={switcher.name}
                    className={styles.avatar}
                    src={switcher.id}
                    />
                <Grid item className={styles.paragraph}>
                    <div>NAME : {switcher.name.toUpperCase()}</div>
                    <div>FROM : {switcher.from.toUpperCase()}</div>
                    <div>TO : {switcher.to.toUpperCase()}</div>
                </Grid>
                
            </Grid>
                <Grid item>
                <Button {...buttonProps} variant="contained" color="primary" className={styles.request} >Request</Button>
                </Grid>
                <Grid item>
                <Button onClick={() => setExpanded(!expanded)} >
                        {!expanded? 
                            <KeyboardArrowDown color="primary" {...arrowProps} />
                        : 
                            <KeyboardArrowUp color="primary" {...arrowProps} />
                        }
                </Button>
                </Grid>
            </Toolbar>
            <Toolbar>
                <Typography className={styles.subtitle} >Schedule: </Typography>
                </Toolbar>
            <img alt="" src={switcher.schedule} className={styles.schedule} onClick={handleOpen} />
            <br />
            <Modal
            open={scheduleView}
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
                <Fade in={scheduleView}>
                    <div className={styles.paper}>
                        <img alt="" src={switcher.schedule} width="100%" />
                    </div>
                </Fade>
            </Modal>
            <Toolbar>
                <Typography className={styles.subtitle} >Contact: </Typography>
                <Tooltip title="Get Facebook" >
                    <IconButton color="primary" href="facebook">
                        <ion-icon name="logo-facebook" class={styles.ionIcon}></ion-icon>
                    </IconButton>
                </Tooltip>
                <Tooltip title="Call Number" >
                    <IconButton color="primary" href="call">
                        <ion-icon name="call" class={styles.ionIcon}></ion-icon>
                    </IconButton>
                </Tooltip>
                <Tooltip title="Get Email" >
                    <IconButton color="primary" href="email">
                        <ion-icon name="mail" class={styles.ionIcon}></ion-icon>
                    </IconButton>
                </Tooltip>
            </Toolbar>
            
        </Collapse>
        </Grid>
            
        <br />
        </Grid>
    )
}

export default SwitchCard
