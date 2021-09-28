import React from "react";
import Dashboard from "./pages/dashboard";
import { ThemeProvider } from "@material-ui/core/styles";
import Theme from "./theme";
import useStyles from "./globalStyle";

const switchers = [
  {id: "https://avatars.githubusercontent.com/u/62481993?v=4",
  name: "Shehab Solyman",
  from: "T-24 G-01",
  to: "T-17 G-02",
  schedule: "https://image.shutterstock.com/image-vector/people-planning-concept-entrepreneurship-calendar-260nw-1523635688.jpg"},
  {id:"https://avatars.githubusercontent.com/u/51823470?v=4",
  name: "Aly Yasser",
  from: "T-14 G-02",
  to: "T-05 G-01",
  schedule: "https://image.shutterstock.com/image-vector/people-planning-concept-entrepreneurship-calendar-260nw-1523635688.jpg"},
  {id:"https://avatars.githubusercontent.com/u/68119650?v=4",
  name: "Andrew Hany",
  from: "T-31 G-03",
  to: "T-07 G-02",
  schedule: "https://image.shutterstock.com/image-vector/people-planning-concept-entrepreneurship-calendar-260nw-1523635688.jpg"},
]

function App() {
  const theme = Theme;
  const style = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <div className={style.root}>
        <Dashboard switchers={switchers} />
      </div>
    </ThemeProvider>
  );
}

export default App;
