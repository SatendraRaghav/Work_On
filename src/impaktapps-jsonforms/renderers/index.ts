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
import ControlDataTable from "./controls/ControlDataTable";
import ControlLabel from "./controls/ControlLabel";
import ControlTab from "./controls/ControlTab";
import ControlNotify from "./controls/ControlNotify";
import ControlPassword from "./controls/ControlPassword";

import TabLayoutControl, { TabLayoutTester } from "./layouts/TabControl";
import  testerMaster from "./Tester/testerMaster"
import ControlIconButton from "./controls/ControlIconButton";
import ControlAutoComplete from "./controls/ControlAutoComplete";
import ControlDownloadFile from "./controls/ControlDownloadFile";
import ControlUploadFile from "./controls/ControlUploadFile";
import { WrapperLayoutControl, WrapperLayoutTester } from "./layouts/WrapperControl";
export const renderers = [
  ...materialRenderers,
  {
    tester: materialHorizontalLayoutTester,
    renderer: MaterailLayoutHorizontal,
  },
  { tester: TabLayoutTester, renderer: TabLayoutControl },
  { tester: WrapperLayoutTester, renderer: WrapperLayoutControl},
  { tester: testerMaster("Wrapper"), renderer: ControlWrapper },
  { tester: testerMaster("Tab"), renderer: ControlTab },
  { tester: testerMaster("TableMui"), renderer: ControlDataTable },
  { tester: testerMaster("Table"), renderer: ControlDataTablePro },
  { tester: testerMaster("Box"), renderer: ControlLabel },
  { tester: testerMaster("InputField"), renderer: ControlInput },
  { tester: testerMaster("PasswordInputField"), renderer: ControlPassword },
  { tester: testerMaster("DownloadFile"), renderer: ControlDownloadFile },
  { tester: testerMaster("UploadFile"), renderer: ControlUploadFile },
  { tester: testerMaster("DateInputField"), renderer: ControlDate },
  { tester: testerMaster("SelectInputField"), renderer: ControlSelect },
  { tester: testerMaster("Button"), renderer: ControlButton },
  { tester: testerMaster("IconButton"), renderer: ControlIconButton },
  { tester: testerMaster("EmptyBox"), renderer: ControlEmptyBox },
  { tester: testerMaster("RadioInputField"), renderer: ControlRadio },
  { tester: testerMaster("Notify"), renderer: ControlNotify },
  { tester: testerMaster("MultipleSelect"), renderer: ControlAutoComplete },
];
export default renderers;
