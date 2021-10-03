import React, { useState } from 'react'
import SwitchCard from "../../components/switchCard"
import useStyles from "./styles";
import NavBar from "../../components/navBar";
import PoweredBySource from "../../components/poweredBySource";
import { Grid, Typography, TextField, FormControl, RadioGroup, Radio, FormControlLabel } from "@material-ui/core";

function Dashboard({ switchers }) {
    const [results, setResults] = useState(switchers)
    const [search, setSearch] = useState("")
    const [radioValue, setRadioValue] = useState("From")

    const styles= useStyles();

    const handleRadioChange = (str) => {
      setRadioValue(str);
      handleChange(search);
    }

    const handleChange = (str) => {
      setSearch(str)
      console.log("evnt:", str)
      if(str === ""){
        setResults(switchers)
      }
      else{
        var res = []
        if(radioValue==="From"){
          res = results.filter((user) => {
            return user.from.toLowerCase().includes(str.toLowerCase());
          });
        }
        else if(radioValue==="To"){
          res = results.filter(user => user.to.includes(str.toLowerCase()));
        }
        else if(radioValue==="Name"){
          res = results.filter(user => user.name.toLowerCase().includes(str.toLowerCase()));
        }
        setResults(res);
      }
    }

    return (
        <Grid
          container
          alignItems="center"
          justifyContent="flex-start"
          direction="column">
          <NavBar />
          <Grid
            container
            direction="column"
            alignItems="center"
            justifyContent="flex-start"
            className={styles.stack}>
          <div className={styles.searchgroup}>
            <form className={styles.searchOutline} noValidate autoComplete="off">
                <TextField 
                    id="outlined-basic" 
                    label="Search" 
                    variant="outlined" 
                    fullWidth
                    value={search}
                    onChange={(e) => handleChange(e.target.value)}
                />
            </form>
            
          
          <FormControl component="fieldset" className={styles.buttons}>
            <RadioGroup row aria-label="position" name="position" defaultValue="From" value={radioValue} >
              <FormControlLabel value="From" control={<Radio color="primary" />} label="From" onClick={()=> handleRadioChange("From")} />
              <FormControlLabel value="To" control={<Radio color="primary" />} label="To" onClick={()=> handleRadioChange("To")} />
              <FormControlLabel value="Name" control={<Radio color="primary" />} label="Name" onClick={()=> handleRadioChange("Name")} />
            </RadioGroup>
          </FormControl>
        </div>
            {switchers ? (
              results.length > 0 ? (
                results.map((switcher) => <SwitchCard key={switcher.id} switcher={switcher} />)
              ) : (
                <Typography className={styles.noNotifications}>
                  No Switch Requests Available
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
            <div className={styles.poweredbysource}  >
                <PoweredBySource />
            </div>
          </Grid>
    </Grid>
    )
}

export default Dashboard
