import React, { useState } from "react";
import SwitchCard from "../../components/switchCard";
import useStyles from "./styles";
import NavBar from "../../components/navBar";
import PoweredBySource from "../../components/poweredBySource";
import { Grid, Typography, TextField } from "@material-ui/core";

function Dashboard({ switchers }) {
  const dbResults = switchers;
  const [results, setResults] = useState(dbResults);
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [name, setName] = useState("");

  const styles = useStyles();

  const handleChange = (str, trigger) => {
    switch (trigger) {
      case "from":
        setFrom(str);
        break;
      case "to":
        setTo(str);
        break;
      case "name":
        setName(str);
        break;
    }
    console.log("from: ", from, "\nto: ", to, "\nname:", name);
    function filterFrom(user) {
      return from ? user.from.toLowerCase().includes(from.toLowerCase()) : true;
    }
    function filterTo(user) {
      return to ? user.to.toLowerCase().includes(to.toLowerCase()) : true;
    }
    function filterName(user) {
      return name ? user.name.toLowerCase().includes(name.toLowerCase()) : true;
    }
    let res = results.filter(filterFrom);
    res = res.filter(filterTo);
    res = res.filter(filterName);
    if (from === "" && to === "" && name === "") {
      setResults(dbResults);
    } else {
      setResults(res);
    }
  };

  return (
    <Grid
      container
      alignItems="center"
      justifyContent="flex-start"
      direction="column"
    >
      <NavBar />
      <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="flex-start"
        className={styles.stack}
      >
        <div className={styles.searchgroup}>
          <form className={styles.searchOutline} noValidate autoComplete="off">
            <Grid container justifyContent="flex-start" spacing={2}>
              <Grid item xs={6}>
                <TextField
                  id="outlined-basic"
                  label="From"
                  variant="outlined"
                  fullWidth
                  value={from}
                  onChange={(e) => handleChange(e.target.value, "from")}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  id="outlined-basic"
                  label="To"
                  variant="outlined"
                  fullWidth
                  value={to}
                  onChange={(e) => handleChange(e.target.value, "to")}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  id="outlined-basic"
                  label="Name"
                  variant="outlined"
                  fullWidth
                  value={name}
                  onChange={(e) => handleChange(e.target.value, "name")}
                />
              </Grid>
            </Grid>
          </form>
        </div>
          
        {switchers ? (
          results.length > 0 ? (
            <Grid container justifyContent="flex-start" spacing={2}>
            {results.map((switcher) => (
              <Grid item xs={12}>
                <SwitchCard key={switcher.id} switcher={switcher} />
              </Grid>
            ))
            }
            </Grid>
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
        <div className={styles.poweredbysource}>
          <PoweredBySource />
        </div>
        
      </Grid>
    </Grid>
  );
}

export default Dashboard;
