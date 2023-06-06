import ControlButton from "./controls/ControlButton";
import ControlWrapper from "./controls/ControlWrapper";
import { materialRenderers } from "@jsonforms/material-renderers";
import ControlRadio from "./controls/ControlRadio";
import ControlInput from "./controls/ControlInput";
import ControlEmptyBox from "./controls/ControlEmptyBox";
import MaterailLayoutHorizontal from "./layouts/MaterailLayoutHorizontal";
import { materialHorizontalLayoutTester } from "./layouts/MaterailLayoutHorizontal";
import ControlSelect from "./controls/ControlSelect";
import ControlDate from "./controls/ControlDate";
import ControlDataTablePro from "./controls/ControlDataTablePro";
import ControlDataTable from "./controls/ControlDataTable";
import ControlLabel from "./controls/ControlLabel";
import ControlTab from "./controls/ControlTab";
import ControlNotify from "./controls/ControlNotify";
import ControlPassword from "./controls/ControlPassword";
import ControlDialog from "./controls/ControlDialog";

import TabLayoutControl, { TabLayoutTester } from "./layouts/TabLayoutControl";
import { TesterMaster } from "./Tester/TesterMaster";
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
  { tester: TesterMaster("Wrapper"), renderer: ControlWrapper },
  { tester: TesterMaster("Tab"), renderer: ControlTab },
  { tester: TesterMaster("TableMui"), renderer: ControlDataTable },
  { tester: TesterMaster("Table"), renderer: ControlDataTablePro },
  { tester: TesterMaster("Box"), renderer: ControlLabel },
  { tester: TesterMaster("InputField"), renderer: ControlInput },
  { tester: TesterMaster("PasswordInputField"), renderer: ControlPassword },
  { tester: TesterMaster("DownloadFile"), renderer: ControlDownloadFile },
  { tester: TesterMaster("UploadFile"), renderer: ControlUploadFile },
  { tester: TesterMaster("DailogBox"), renderer: ControlDialog },
  { tester: TesterMaster("DateInputField"), renderer: ControlDate },
  { tester: TesterMaster("SelectInputField"), renderer: ControlSelect },
  { tester: TesterMaster("Button"), renderer: ControlButton },
  { tester: TesterMaster("IconButton"), renderer: ControlIconButton },
  { tester: TesterMaster("EmptyBox"), renderer: ControlEmptyBox },
  { tester: TesterMaster("RadioInputField"), renderer: ControlRadio },
  { tester: TesterMaster("Notify"), renderer: ControlNotify },
  { tester: TesterMaster("MultipleSelect"), renderer: ControlAutoComplete },
];
export default renderers;
