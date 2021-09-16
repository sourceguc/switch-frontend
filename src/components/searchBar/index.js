import React from "react";
import useStyles from "./style";
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';

function SearchBar() {
  const styles = useStyles();

  return (
    <div >
        <form className={styles.searchOutline} noValidate autoComplete="off">
            <TextField 
                id="outlined-basic" 
                label="Search" 
                variant="outlined" 
            />
        </form>
        
      
      <FormControl component="fieldset">
        <RadioGroup row aria-label="position" name="position" defaultValue="From"  >
          <FormControlLabel value="From" control={<Radio color="primary" />} label="From" />
          <FormControlLabel value="To" control={<Radio color="primary" />} label="To" />
          <FormControlLabel value="Name" control={<Radio color="primary" />} label="Name" />
        </RadioGroup>
      </FormControl>
    </div>
  );
}

export default SearchBar;