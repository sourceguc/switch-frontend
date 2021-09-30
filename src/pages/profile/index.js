import React from 'react'
import useStyles from "./style";
import NavBar from "../../components/navBar"
import { Typography, Grid, Avatar, Button, TextField } from "@material-ui/core"
import Connections from "../../components/button/IconButton"
import PoweredBySource from "../../components/poweredBySource"
import Image from "../../assets/Images/Avatar.png"
import Schedule from "../../assets/Images/Schedule.png"
function Profile() {
    const styles = useStyles()
    //these user details are to be fetched using a GET Request
    const user = {
    name: "Andrew Hany",
    phone: "01114115911",
    major: "Media Engineering and Technology"
  }
    return (
        <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        className={styles.grid}>

        <NavBar/>
        
        <Grid item className={styles.textGrid}>
            <Typography className={styles.profile}>Profile</Typography>
        </Grid>

        <Grid item>
            <Avatar src={Image} alt="" class={styles.avatar}></Avatar>
        </Grid>

       <Grid item className={styles.name}>
           <Typography>{user.name}</Typography>
       </Grid>

       <Grid item className={styles.info}>
           <Typography>Major: {user.major}</Typography>
       </Grid>  

        <Grid item className={styles.info}>
           <Typography>New Password:</Typography>
           <TextField variant="outlined" size="small" className={styles.textField}></TextField>
       </Grid>  

        <Grid item className={styles.info}>
           <Typography>Confirm Password:</Typography>
           <TextField variant="outlined" size="small" className={styles.textField}></TextField>
       </Grid>  

        <Grid item className={styles.info}>
           <Typography>Phone Number:</Typography>
           <TextField variant="outlined" size="small" defaultValue={user.phone} className={styles.textField}></TextField>
       </Grid>

        <Grid item className={styles.info}>
           <Typography>Schedule:</Typography>
       </Grid>

        <Grid item>
           <img className={styles.schedule} src={Schedule} alt="Your schedule"/>
       </Grid>

       <Grid item className={styles.other}>
           <Typography>Other Connections:</Typography>
       </Grid>
        <Grid item className={styles.buttons}>
            <Connections
            icon={<ion-icon name="logo-facebook" />}
            text={"LOGIN WITH FACEBOOK"}
            />
        </Grid>

        <Grid item>
            <Connections
            icon={<ion-icon name="logo-google" />}
            text={"LOGIN WITH GOOGLE"}
            />
          </Grid>

        <Grid item>
            <Button variant="contained" color="primary" className={styles.button} >Update</Button>
        </Grid>  
        <div style={{marginBottom: '2em'}}>
            <PoweredBySource/>
        </div>
        
        </Grid>
    )
}

export default Profile
