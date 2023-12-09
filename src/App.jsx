import { React, Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import { ColorModeContext, useMode } from "./helper-files/themes.jsx";
import { CssBaseline, ThemeProvider } from "@mui/material";
import {
  Topbar,
  Sidebar,
  Dashboard,
  Team,
  Invoices,
  Contacts,
  Calendar,
  Barchart,
  Form,
  Linechart,
  Piechart,
  Faqs,
  Geographychart,
} from "./helper-files/componentExports.jsx";
import { pathinfo } from "./helper-files/simpleConstants.jsx";
import "./App.styles.scss";

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Fragment>
          <div className="app">
            <Sidebar />
            <main className="content">
              <Topbar />
              <Routes>
                <Route path={pathinfo.path[0]} element={<Dashboard />} />
                <Route path={pathinfo.path[1]} element={<Team />} />
                <Route path={pathinfo.path[2]} element={<Contacts />} />
                <Route path={pathinfo.path[3]} element={<Invoices />} />
                <Route path={pathinfo.path[4]} element={<Form />} />
                <Route path={pathinfo.path[5]} element={<Calendar />} />
                <Route path={pathinfo.path[6]} element={<Faqs />} />
                <Route path={pathinfo.path[7]} element={<Barchart />} />
                <Route path={pathinfo.path[8]} element={<Piechart />} />
                <Route path={pathinfo.path[9]} element={<Linechart />} />
                <Route path={pathinfo.path[10]} element={<Geographychart />} />
              </Routes>
            </main>
          </div>
        </Fragment>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;

/*

*/
