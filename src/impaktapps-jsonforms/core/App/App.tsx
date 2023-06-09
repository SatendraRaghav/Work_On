import { ValidationMode } from "@jsonforms/core";
import { DataProvider } from "../../../Reducer";
import { myTheme } from "../../styles/StyleFactory";
import Home from "./Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { impaktappsJsonformsPropsType, serviceHolderType } from "../../renderers/interface/inputfieldProps";

const App = ({
  serviceHolder,
  permissions,
  objStyle,
  validation
}: impaktappsJsonformsPropsType) => {
  const theme = myTheme(objStyle);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home serviceHolder={serviceHolder} theme={theme} permissions={permissions} validation={validation} pageName={"start"}/>} />
        <Route path="/:id/*" element={<Home serviceHolder={serviceHolder} theme={theme} permissions={permissions} validation={validation} pageName="id"/>}/>
      </Routes>
    </Router>
  );
};
export default App;
