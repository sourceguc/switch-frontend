import React, { useState }  from 'react';
import { Avatar, Grid, IconButton, Toolbar, Tooltip, Typography } from '@material-ui/core';
import useStyles from "./style";
import Button from "@material-ui/core/Button";
import { Modal } from '@material-ui/core';
import { Collapse } from '@material-ui/core';
import { KeyboardArrowDown, KeyboardArrowUp } from '@material-ui/icons';
import { Fade } from '@material-ui/core';
import { Backdrop } from '@material-ui/core';

function SwitchCard({ switcher }) {

    const styles = useStyles();
    const [expanded, setExpanded] = useState(false);
    const [scheduleView, setScheduleView] = useState(false);

    const handleOpen = () => {
        setScheduleView(true);
      };
    
      const handleClose = () => {
        setScheduleView(false);
      };


    return (
        <Grid key={switcher.id}>
        <Grid
            container
            direction="column"
            className={styles.container}
            >
            
        <Collapse in={expanded} collapsedSize={60} className={styles.collapse}>
            <Grid
                container
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                >
                <Avatar
                    alt={switcher.name}
                    className={styles.avatar}
                    src={switcher.id}
                    />
                <div className={styles.paragraph}>
                    NAME : {switcher.name.toUpperCase()}
                    <br />
                    FROM : {switcher.from.toUpperCase()}
                    <br />
                    TO : {switcher.to.toUpperCase()}
                </div>
                <Grid
                    direction="row"
                    alignContent="flex-end"
                >
                <Button size="small" variant="contained" color="primary" className={styles.request} >Request</Button>
                <Button onClick={() => setExpanded(!expanded)} >
                        {!expanded? 
                            <KeyboardArrowDown color="primary" fontSize="medium" />
                        : 
                            <KeyboardArrowUp color="primary" fontSize="medium" />
                        }
                </Button>
                </Grid>
            </Grid>
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
