import React, { useState } from 'react'
import SwitchCard from "../../components/switchCard"
import useStyles from "./styles";
import NavBar from "../../components/navBar";
import PoweredBySource from "../../components/poweredBySource";
import { Grid, Typography, TextField, FormControl, RadioGroup, Radio, FormControlLabel } from "@material-ui/core";

function Dashboard({switchers}) {
    const [results, setResults] = useState(switchers)
    const [search, setSearch] = useState("")
    const [radioValue, setRadioValue] = useState("From")

    const styles= useStyles();

    const handleChange = (event) => {
      setSearch(event.target.value)
      if(event.target.value === ""){
        setResults(switchers)
      }
      else{
        var res = []
        if(radioValue==="From"){
          res = results.filter(user => user.from.includes(search));
        }
        else if(radioValue==="To"){
          res = results.filter(user => user.to.includes(search));
        }
        else if(radioValue==="Name"){
          res = results.filter(user => user.name.toLowerCase().includes(search.toLowerCase()));
        }
        setResults(res);
      }
    }

    return (
        <Grid
      container
      alignItems="center"
      justifyContent="center"
      direction="column">
      <NavBar />
      <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
        className={styles.stack}>
      <div style={{width: "100%"}}>
        <form className={styles.searchOutline} noValidate autoComplete="off">
            <TextField 
                id="outlined-basic" 
                label="Search" 
                variant="outlined" 
                fullWidth={true}
                value={search}
                onChange={handleChange}
            />
        </form>
        
      
      <FormControl component="fieldset" className={styles.buttons}>
        <RadioGroup row aria-label="position" name="position" defaultValue="From" value={radioValue} >
          <FormControlLabel value="From" control={<Radio color="primary" />} label="From" onClick={()=> setRadioValue("From")} />
          <FormControlLabel value="To" control={<Radio color="primary" />} label="To" onClick={()=> setRadioValue("To")} />
          <FormControlLabel value="Name" control={<Radio color="primary" />} label="Name" onClick={()=> setRadioValue("Name")} />
        </RadioGroup>
      </FormControl>
    </div>
        {switchers ? (
          results.length > 0 ? (
            results.map((switcher) => <SwitchCard switcher={switcher} />)
          ) : (
            <Typography className={styles.noNotifications}>
              No switch requests available
            </Typography>
          )
        ) : (
          <Typography className={styles.noNotifications}>
            This Should Not Be Happening,
            <br />
            Please Contact Support!
          </Typography>
        )}
        <div className={styles.sourcelogo}></div>
        <div style={{position: "fixed", bottom: "0.8em"}} >
            <PoweredBySource />
        </div>
      </Grid>
    </Grid>
    )
}

export default Dashboard
