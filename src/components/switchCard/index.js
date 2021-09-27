import React, { useState }  from 'react';
import { Avatar, Grid, IconButton, Toolbar, Tooltip, Typography } from '@material-ui/core';
import useStyles from "./style";
import Button from "@material-ui/core/Button";
import { Modal } from '@material-ui/core';
import { Collapse } from '@material-ui/core';
import { KeyboardArrowDown, KeyboardArrowUp } from '@material-ui/icons';
import { Fade } from '@material-ui/core';
import { Backdrop } from '@material-ui/core';

function SwitchCard() {

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
                    alt="SHEHAB SOLYMAN"
                    className={styles.avatar}
                    />
                <div className={styles.paragraph}>
                    NAME : SHEHAB SOLYMAN
                    <br />
                    FROM : TTT TTTT
                    <br />
                    TO : TTT TTTT
                </div>
                <Button size="large" variant="contained" color="primary" className={styles.request} >Request</Button>
                <Button onClick={() => setExpanded(!expanded)} >
                        {!expanded? 
                            <KeyboardArrowDown color="primary" fontSize="large" />
                        : 
                            <KeyboardArrowUp color="primary" fontSize="large" />
                        }
                </Button>
            </Grid>
            <Toolbar>
                <Typography className={styles.subtitle} >Schedule: </Typography>
                </Toolbar>
            <img src="https://image.shutterstock.com/image-vector/people-planning-concept-entrepreneurship-calendar-260nw-1523635688.jpg" className={styles.schedule} onClick={handleOpen} />
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
                        <img src="https://image.shutterstock.com/image-vector/people-planning-concept-entrepreneurship-calendar-260nw-1523635688.jpg" width="100%" />
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
    )
}

export default SwitchCard
