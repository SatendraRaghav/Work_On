import { ValidationMode } from "@jsonforms/core";
import { DataProvider } from "../../renderers/context/Context";
import {   useTheme } from "../../styles/StyleFactory";
import Home from "./Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { impaktappsJsonformsPropsType, serviceHolderType } from "../../renderers/interface/inputfieldProps";

const App = ({
  serviceHolder,
  permissions,
  styleTheme,
  validationMode,
}: impaktappsJsonformsPropsType) => {
  const theme =   useTheme(styleTheme);
  return (
    <Router>
      <Routes>
        <Route path="/:id/*" element={<Home serviceHolder={serviceHolder} theme={theme} permissions={permissions} validationMode={validationMode} pageName="id"/>}/>
      </Routes>
    </Router>
  );
};
export default App;
