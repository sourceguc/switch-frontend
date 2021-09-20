import React from "react";
import { Field } from "react-final-form";
import { OnChange } from "react-final-form-listeners";
import { TextField, Select } from "final-form-material-ui";
import { Typography, Paper, Grid, MenuItem } from "@material-ui/core";

const validate = (values) => {
  const errors = {};
  if (!values.notes) {
    errors.notes = "Required";
  }
  if (!values.country) {
    errors.country = "Required";
  }
  if (!values.city) {
    errors.city = "Required";
  }
  return errors;
};

const Message = () => {
  return (
    <Typography align="center" gutterBottom>
      Just Some additional Information to facilitate the switch!
    </Typography>
  );
};

function From({ form, handleSubmit, values }) {
  return (
    <form onSubmit={handleSubmit} noValidate>
      <OnChange name="country">
        {(value) => {
          form.reset({
            ...values,
            city: null,
            country: value,
          });
        }}
      </OnChange>

      <Paper style={{ padding: 16 }}>
        <Grid container alignItems="flex-start" spacing={8}>
          <Grid item xs={12}>
            <Field
              fullWidth
              name="GUC-Email"
              component={TextField}
              label="GUC Email"
            />
          </Grid>
          <Grid item xs={12}>
            <Field
              fullWidth
              name="Password"
              component={TextField}
              type="password"
              label="password"
            />
          </Grid>
          <Grid item xs={12}>
            <Field fullWidth name="Major" component={TextField} label="Major" />
          </Grid>
        </Grid>
      </Paper>
    </form>
  );
}

export { From, Message, validate };
