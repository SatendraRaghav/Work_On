import {   useTheme } from "../../styles/StyleFactory";
import Home from "./Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { impaktappsJsonformsPropsType, serviceHolderType } from "../../renderers/interface/inputfieldProps";
import { CssBaseline, ThemeProvider } from "@mui/material";

const App = ({
  serviceHolder,
  permissions,
  styleTheme,
  validationMode,
}: impaktappsJsonformsPropsType) => {
  const theme =   useTheme(styleTheme);
  return (
    <ThemeProvider theme={ theme.myTheme}>
    <CssBaseline />
    <Router>
      <Routes>
        <Route path="/:id/*" element={<Home serviceHolder={serviceHolder} theme={theme} permissions={permissions} validationMode={validationMode} pageName="id"/>}/>
      </Routes>
    </Router>
    </ThemeProvider>
  );
};
export default App;
