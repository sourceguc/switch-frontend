import React from "react";
import useStyles from "./styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import { Form } from "react-final-form";

import * as Additional from "./AdditionalInfo";
import Desired from "./DesiredTutorial";

const postData = async (values) => {};

function getSteps() {
  return ["Aditional Information", "Desired Switch"];
}

function getStepContent(stepIndex) {
  switch (stepIndex) {
    case 0:
      return (
        <div>
          <Additional.Message />
          <Form
            onSubmit={postData}
            validate={Additional.validate}
            render={({ form, postData, values }) => (
              <Additional.From
                form={form}
                handleSubmit={postData}
                values={values}
              />
            )}
          />
        </div>
      );
    case 1:
      return <Desired />;
    default:
      return "Unknown stepIndex";
  }
}

export default function HorizontalLabelPositionBelowStepper() {
  const styles = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

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
      <div>
        <div>
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
        </div>
      </div>
    </div>
  );
}
