import React from "react";
import useStyles from "./styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import PoweredBySource from "../../components/poweredBySource";

function getSteps() {
  return ["Aditional Information", "Desired Switch"];
}

export default function HorizontalLabelPositionBelowStepper() {
  const styles = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();
  //Additional Info
  const [email, setEmail] = React.useState("");
  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };
  const [password, setPassword] = React.useState("");
  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };
  const [major, setMajor] = React.useState("");
  const handleChangeMajor = (event) => {
    setMajor(event.target.value);
  };
  //Desired Switch
  const [group, setGroup] = React.useState("");
  const handleChangeGroup = (event) => {
    setGroup(event.target.value);
  };
  const [tutorial, setTutorial] = React.useState("");
  const handleChangeTutorial = (event) => {
    setTutorial(event.target.value);
  };

  function getStepContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return (
          <Paper elevation={3} className={styles.paperContainer}>
            <Grid
              container
              alignItems="center"
              justiyContent="center"
              direction="column">
              <TextField
                id="email"
                label="GUC Email"
                defaultValue={email}
                helperText="Enter you GUC Email"
                variant="outlined"
                onChange={handleChangeEmail}
                className={styles.textField}
              />
              <TextField
                id="password"
                label="GUC Password"
                defaultValue={password}
                type={"password"}
                helperText="Enter you GUC Password"
                variant="outlined"
                onChange={handleChangePassword}
                className={styles.textField}
              />
              <TextField
                id="Major"
                label="Major"
                defaultValue={major}
                helperText="Enter you Major"
                variant="outlined"
                onChange={handleChangeMajor}
                className={styles.textField}
              />
              <TextField
                id="Major"
                label="Major"
                defaultValue={major}
                helperText="Enter you Major"
                variant="outlined"
                onChange={handleChangeMajor}
              />
            </Grid>
          </Paper>
        );
      case 1:
        return (
          <Paper elevation={3} className={styles.paperContainer}>
            <Grid
              container
              alignItems="center"
              justiyContent="center"
              direction="column">
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
                helperText="Enter Desired Tutorial"
                variant="outlined"
                onChange={handleChangeTutorial}
              />
            </Grid>
          </Paper>
        );
      default:
        return "This Shouldn't happen, please contact support!";
    }
  }

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleFinish = () => {
    setActiveStep(0);
  };

  return (
    <div className={styles.root}>
      <Stepper
        activeStep={activeStep}
        className={styles.stepper}
        alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <Grid
        container
        alignItems="center"
        justiyContent="center"
        direction="column"
        style={{ gap: "1em" }}>
        {getStepContent(activeStep)}
        <div>
          <Button
            disabled={activeStep === 0}
            onClick={handleBack}
            className={styles.backButton}>
            Back
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={
              activeStep === steps.length - 1 ? handleFinish : handleNext
            }>
            {activeStep === steps.length - 1 ? "Finish" : "Next"}
          </Button>
        </div>
        <PoweredBySource />
      </Grid>
    </div>
  );
}
