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
import ControlSpeedoMeter from "./controls/ControlSpeedoMeter";
import { SliderLayoutControl, SliderLayoutTester } from "./layouts/SliderControl";
import ControlCard from "./controls/ControlCard";
import ControlTimer from "./controls/ControlTimer";
import ControlRank from "./controls/ControlRank";
import ControlCompare from "./controls/ControlCompare";
import ControlAnimatedLabel from "./controls/ControlAnimatedLabel";
import { ArrayLayoutTester } from "./layouts/ArrayControl";
import ArrayControl  from "./layouts/Array";
import Editor from "./components/Editor/Editor";
import RunnerBoyProgressBar from "./components/RunnerBoyProgressBar";
import RollAndDice from "./components/RollAndDice";
import Slider from "./components/Slider";
export const renderers = [
  ...materialRenderers,
  { tester: ArrayLayoutTester, renderer: ArrayControl },
  {
    tester: materialHorizontalLayoutTester,
    renderer: MaterailLayoutHorizontal,
  },
  { tester: TabLayoutTester, renderer: TabLayoutControl },
  { tester: WrapperLayoutTester, renderer: WrapperLayoutControl},
  { tester: SliderLayoutTester, renderer: SliderLayoutControl},
  { tester: rankTester("Wrapper"), renderer: ControlWrapper },
  { tester: rankTester("Graph"), renderer: ControlGraph },
  { tester: rankTester("Time"), renderer: ControlTimer },
  { tester: rankTester("Card"), renderer: ControlCard },
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
  { tester: rankTester("SpeedoMeter"), renderer: ControlSpeedoMeter },
  { tester: rankTester("Rank"), renderer: ControlRank },
  { tester: rankTester("Compare"), renderer: ControlCompare },
  { tester: rankTester("Editor"), renderer: Editor },
  { tester: rankTester("RunningBoyProgressBar"), renderer: RunnerBoyProgressBar },
  { tester: rankTester("RollAndDice"), renderer: RollAndDice },
  { tester: rankTester("Slider"), renderer: Slider },
];
export default renderers;
