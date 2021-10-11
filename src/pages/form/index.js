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
  const [error, setError] = React.useState(false);
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
  const [major, setMajor] = React.useState("Computer Science");
  const handleChangeMajor = (event) => {
    setMajor(event.target.value);
  };
  const majors = [
    {
      value: "Computer Science",
      label: "Computer Science",
    },
    {
      value: "Digital Media Engineering Technology",
      label: "Digital Media Engineering Technology",
    },
    {
      value: "Networks",
      label: "Networks",
    },
    {
      value: "Communication",
      label: "Communication",
    },
    {
      value: "Electronics",
      label: "Electronics",
    },
    {
      value: "Material Engineeering",
      label: "Material Engineeering",
    },
    {
      value: "Design and Production Engineering",
      label: "Design and Production Engineering",
    },
    {
      value: "Mechatronics",
      label: "Mechatronics",
    },
    {
      value: "Civil Engineering",
      label: "Civil Engineering",
    },
    {
      value: "Architecture Engineering",
      label: "Architecture Engineering",
    },
    {
      value: "Pharmacy and Biotechnologies",
      label: "Pharmacy and Biotechnologies",
    },
    {
      value: "Biotechnology",
      label: "Biotechnology",
    },
    {
      value: "General Management",
      label: "General Management",
    },
    {
      value: "Business Informatics",
      label: "Business Informatics",
    },
    {
      value: "Technology-based Management",
      label: "Technology-based Management",
    },
    {
      value: "Graphics Design",
      label: "Graphics Design",
    },
    {
      value: "Media Design",
      label: "Media Design",
    },
    {
      value: "Product Design",
      label: "Product Design",
    },
    {
      value: "Law",
      label: "Law",
    },
  ];
  const [phone, setPhone] = React.useState("");
  const handleChangePhone = (event) => {
    setPhone(event.target.value);
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
              direction="column"
              required
              className={styles.textFieldGrid}>
              <h3 style={{ fontWeight: 100 }}>
                Please Enter The Infromation Needed To Facilitate the Switching
                process!
              </h3>
              <TextField
                id="email"
                label="GUC Email"
                value={email}
                helperText="Enter you GUC Email"
                required
                onChange={handleChangeEmail}
                className={styles.textField}
                error={error && email === ""}
              />
              <TextField
                id="password"
                label="GUC Password"
                value={password}
                type={"password"}
                helperText="Enter you GUC Password"
                onChange={handleChangePassword}
                className={styles.textField}
                required
                error={error && password === ""}
              />
              <TextField
                id="major"
                select
                label="Major"
                value={major}
                onChange={handleChangeMajor}
                required
                SelectProps={{
                  native: true,
                }}
                helperText="Select you Major"
                className={styles.textField}>
                {majors.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </TextField>
              <TextField
                id="phone"
                label="Mobile Number"
                value={phone}
                helperText="Enter a valid Whatsapp number"
                required
                onChange={handleChangePhone}
                className={styles.textField}
                error={error && phone === ""}
              />
            </Grid>
            {error && (
              <p className={styles.error}>Please fill all required forms!</p>
            )}
          </Paper>
        );
      case 1:
        return (
          <Paper elevation={3} className={styles.paperContainer}>
            <Grid
              container
              alignItems="center"
              justiyContent="center"
              direction="column"
              className={styles.textFieldGrid}>
              <h3 style={{ fontWeight: 100, textAlign: "center" }}>
                The following Info Is Not Required, But Would Help Us Find You
                <br />
                The Best Matches As Soon As Possible!
              </h3>
              <TextField
                id="group"
                label="Group"
                value={group}
                helperText="Enter Desired Group"
                onChange={handleChangeGroup}
                className={styles.textField}
              />
              <TextField
                id="tutorial"
                label="Tutorial"
                value={tutorial}
                helperText="Enter Desired Tutorial"
                onChange={handleChangeTutorial}
                className={styles.textField}
              />
            </Grid>
          </Paper>
        );
      default:
        return "This Shouldn't happen, please contact support!";
    }
  }

  const handleNext = () => {
    if (
      (activeStep === 0) &
      (phone === "" || email === "" || password === "" || major === "")
    ) {
      setError(true);
    } else {
      setError(false);
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
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
