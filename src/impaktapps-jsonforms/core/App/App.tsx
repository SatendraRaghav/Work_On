import { myTheme } from "../../styles/StyleFactory";
import DynamicPage from "./DynamicPage";
import Home from "./Home";
import {
  BrowserRouter as Router,
  Route,  Routes 
} from "react-router-dom";



const App = ({ objFunc, permissions,objStyle }: { objFunc: any; permissions?: string[],objStyle?:any}) => {
  const theme =  myTheme(objStyle)
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home objFunc={objFunc} theme={theme} />} />
        <Route
          path="/:id/*"
          element={<DynamicPage objFunc={objFunc} permissions={permissions}  theme={theme}  />}
        />
      </Routes>
    </Router>
  );
};
export default App;