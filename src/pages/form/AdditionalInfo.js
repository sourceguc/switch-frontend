import React from "react";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import useStyles from "./styles";

function DesiredTutorial() {
  const styles = useStyles();
  const [group, setGroup] = React.useState("G-01");
  const handleChangeGroup = (event) => {
    setGroup(event.target.value);
  };
  const [tutorial, setTutorial] = React.useState("T-21");
  const handleChangeTutorial = (event) => {
    setTutorial(event.target.value);
  };
  return (
    <div>
      <Paper elevation={3} className={styles.paperContainer}>
        <TextField
          id="group"
          label="Group"
          defaultValue={group}
          helperText="Enter Desired Group"
          variant="outlined"
          onChange={handleChangeGroup}
          className={styles.textField}
        />
        <TextField
          id="tutorial"
          label="Tutorial"
          defaultValue={tutorial}
          helperText="Enter Desired Tutorial1"
          variant="outlined"
          onChange={handleChangeTutorial}
        />
      </Paper>
    </div>
  );
}

export default DesiredTutorial;
