import React from 'react'
import useStyles from "./style";
import {TextField, styled, Button } from '@material-ui/core'

function Request() {
    const styles = useStyles();
    const CustomField = styled(TextField)({
        '& .MuiInputBase-root': {
            color: 'white !important',
        },
        '& label.Mui-focused': {
             color: 'white !important',
        },
        '& .MuiOutlinedInput-root': {
            '&.Mui-focused fieldset': {
                borderColor: '#62BF84',
            },
            '& fieldset': {
                borderColor: 'white',
            },
            '&:hover fieldset': {
                borderColor: '#62BF84',
            },
        },
    });

    return (
        <div style={{}}>
        <div className={styles.border}>
        <CustomField 
            label="From"
            id="from"
            margin="normal"
            variant="outlined"
            style = {{width: '100%'}}
            InputLabelProps={{
                style: { color: 'white' },
            }}/>

        <br/>
        
        <CustomField
            label="To"
            id="to"
            margin="normal"
            variant="outlined"
            style = {{width: '100%', marginBottom: '2em'}}
            InputLabelProps={{
                style: { color: 'white' },
            }}/>

            <div className={styles.text} style={{}}>Create Request</div>

            <Button variant="contained" color="primary" className={styles.button}>Create</Button>
        </div>
        </div>
    )
}

export default Request
