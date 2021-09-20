import React from "react";
import Login from "./pages/form";
import { ThemeProvider } from "@material-ui/core/styles";
import Theme from "./theme";
import useStyles from "./globalStyle";
import NavBar from "./components/navBar";

function App() {
  const theme = Theme;
  const style = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <div className={style.root}>
        <NavBar />
      </div>
    </ThemeProvider>
  );
}

export default App;
