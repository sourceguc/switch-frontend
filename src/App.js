import React from "react";
import Dashboard from "./pages/dashboard";
import { ThemeProvider } from "@material-ui/core/styles";
import Theme from "./theme";
import useStyles from "./globalStyle";
import Schedule from "./assets/Images/Schedule.png";

const switchers = [
  {
    id: "https://avatars.githubusercontent.com/u/62481993?v=4",
    name: "Shehab Solyman",
    from: "T-24 G-01",
    to: "T-17 G-02",
    schedule: Schedule,
  },
  {
    id: "https://avatars.githubusercontent.com/u/51823470?v=4",
    name: "Aly Yasser",
    from: "T-14 G-02",
    to: "T-05 G-01",
    schedule: Schedule,
  },
  {
    id: "https://avatars.githubusercontent.com/u/68119650?v=4",
    name: "Andrew Hany",
    from: "T-31 G-03",
    to: "T-07 G-02",
    schedule: Schedule,
  },
];

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
