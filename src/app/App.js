import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled, { injectGlobal, ThemeProvider } from "styled-components";
import theme from "../global/theme";
import { constants } from "../global/utils/constants";
import DetailsList from "../pages/DetailsList";
import Conversion from "../pages/Conversion";

injectGlobal`
  html {
    background-color: #e6e6e6;
  };
  
  div[role="tooltip"] {
    margin: 0 !important;
  }

  div[data-placement="top"] {
    top: 34px !important;
  }
`;

const ApplicationWindow = styled.div(theme.app);

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <ApplicationWindow>
        <Router>
          <Switch>
            <Route
              key={`${Math.random()}ROUTE_`}
              exact
              path={constants.CONVERSION_LIST_URL}
              render={props => <DetailsList {...props} />}
            />
            <Route
              key={`${Math.random()}ROUTE_`}
              exact
              path={constants.CONVERSION_URL + "/:id"}
              render={props => <Conversion {...props} />}
            />
          </Switch>
        </Router>
      </ApplicationWindow>
    </ThemeProvider>
  );
};

export default App;
