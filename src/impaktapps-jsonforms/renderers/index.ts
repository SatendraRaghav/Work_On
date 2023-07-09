import ControlButton from "./controls/ControlButton";
import ControlWrapper from "./controls/ControlWrapper";
import { materialRenderers } from "@jsonforms/material-renderers";
import ControlRadio from "./controls/ControlRadio";
import ControlInput from "./controls/ControlInput";
import ControlEmptyBox from "./controls/ControlEmptyBox";
import MaterailLayoutHorizontal from "./layouts/HorizontalControl";
import { materialHorizontalLayoutTester } from "./layouts/HorizontalControl";
import ControlSelect from "./controls/ControlSelect";
import ControlDate from "./controls/ControlDate";
import ControlDataTablePro from "./controls/ControlDataTablePro";
import ControlLabel from "./controls/ControlLabel";
import ControlTab from "./controls/ControlTab";
import ControlNotify from "./controls/ControlNotify";
import ControlPassword from "./controls/ControlPassword";

import TabLayoutControl, { TabLayoutTester } from "./layouts/TabControl";
import  rankTester from "./rankTester/rankTester"
import ControlIconButton from "./controls/ControlIconButton";
import ControlAutoComplete from "./controls/ControlAutoComplete";
import ControlDownloadFile from "./controls/ControlDownloadFile";
import ControlUploadFile from "./controls/ControlUploadFile";
import { WrapperLayoutControl, WrapperLayoutTester } from "./layouts/WrapperControl";
import ControlGraph from "./controls/ControlGraph";
import ControlProgressBar from "./controls/ControlProgressBar";
export const renderers = [
  ...materialRenderers,
  {
    tester: materialHorizontalLayoutTester,
    renderer: MaterailLayoutHorizontal,
  },
  { tester: TabLayoutTester, renderer: TabLayoutControl },
  { tester: WrapperLayoutTester, renderer: WrapperLayoutControl},
  { tester: rankTester("Wrapper"), renderer: ControlWrapper },
  { tester: rankTester("Graph"), renderer: ControlGraph },
  { tester: rankTester("Tab"), renderer: ControlTab },
  { tester: rankTester("Table"), renderer: ControlDataTablePro },
  { tester: rankTester("Box"), renderer: ControlLabel },
  { tester: rankTester("InputField"), renderer: ControlInput },
  { tester: rankTester("PasswordInputField"), renderer: ControlPassword },
  { tester: rankTester("DownloadFile"), renderer: ControlDownloadFile },
  { tester: rankTester("UploadFile"), renderer: ControlUploadFile },
  { tester: rankTester("DateInputField"), renderer: ControlDate },
  { tester: rankTester("SelectInputField"), renderer: ControlSelect },
  { tester: rankTester("Button"), renderer: ControlButton },
  { tester: rankTester("IconButton"), renderer: ControlIconButton },
  { tester: rankTester("EmptyBox"), renderer: ControlEmptyBox },
  { tester: rankTester("RadioInputField"), renderer: ControlRadio },
  { tester: rankTester("Notify"), renderer: ControlNotify },
  { tester: rankTester("MultipleSelect"), renderer: ControlAutoComplete },
  { tester: rankTester("ProgressBar"), renderer: ControlProgressBar },

];
export default renderers;
