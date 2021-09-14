import React from "react";
import Login from "./pages/login";
import { ThemeProvider } from "@material-ui/core/styles";
import Theme from "./theme";
import useStyles from "./globalStyle";

function App() {
  const theme = Theme;
  const style = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <div className={style.root}>
        <Login />
      </div>
    </ThemeProvider>
  );
}

export default App;
