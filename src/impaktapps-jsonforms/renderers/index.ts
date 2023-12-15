import ControlButton from "./controls/ControlButton";
import ControlWrapper from "./controls/ControlWrapper";
import { materialRenderers } from "@jsonforms/material-renderers";
import ControlRadio from "./controls/ControlRadio";
import ControlInput from "./controls/ControlInput";
import ControlEmptyBox from "./controls/ControlEmptyBox";
import MaterailLayoutHorizontal from "./layouts/HorizontalControl";
import { materialHorizontalLayoutTester } from "./layouts/HorizontalControl";
import ControlDate from "./controls/ControlDate";
import ControlLabel from "./controls/ControlLabel";
import ControlTab from "./controls/ControlTab";
import ControlNotify from "./controls/ControlNotify";
import ControlPassword from "./controls/ControlPassword";

import TabLayoutControl, { TabLayoutTester } from "./layouts/TabControl";
import  rankTester from "./rankTester/rankTester"
import ControlIconButton from "./controls/ControlIconButton";
import  { MultiSelectControl, SelectControl } from "./controls/ControlAutoComplete";
import ControlDownloadFile from "./controls/ControlDownloadFile";
import ControlUploadFile from "./controls/ControlUploadFile";
import { WrapperLayoutControl, WrapperLayoutTester } from "./layouts/WrapperControl";
import ControlGraph from "./controls/ControlGraph";
import ControlProgressBar from "./controls/ControlProgressBar";
import ControlSpeedoMeter from "./controls/ControlSpeedoMeter";
import { SliderLayoutControl, SliderLayoutTester } from "./layouts/SliderControl";
import ControlTimer from "./controls/ControlTimer";
import TextArea from "./components/TextArea";
import Image from "./components/Image";
import RollAndDice from "./components/RollAndDice";
import RunningBoyProgressBar from "./components/RunningBoyProgressBar";
import Slider from "./components/Slider";
import RankCard from "./components/RankCard";
import Checkbox from "./components/Checkbox";
import Table from "./components/Table";
import ControlInputSlider from "./controls/ControlInputSlider";
export const renderers:any = [
  ...materialRenderers,
  {
    tester: materialHorizontalLayoutTester,
    renderer: MaterailLayoutHorizontal,
  },
  { tester: TabLayoutTester, renderer: TabLayoutControl },
  { tester: WrapperLayoutTester, renderer: WrapperLayoutControl},
  { tester: SliderLayoutTester, renderer: SliderLayoutControl},
  { tester: rankTester("Timer"), renderer: ControlTimer },
  { tester: rankTester("Wrapper"), renderer: ControlWrapper },
  { tester: rankTester("Graph"), renderer: ControlGraph },
  { tester: rankTester("Tab"), renderer: ControlTab },
  { tester: rankTester("Table"), renderer: Table }, 
  { tester: rankTester("Box"), renderer: ControlLabel },
  { tester: rankTester("InputField"), renderer: ControlInput },
  { tester: rankTester("PasswordInputField"), renderer: ControlPassword },
  { tester: rankTester("DownloadFile"), renderer: ControlDownloadFile },
  { tester: rankTester("UploadFile"), renderer: ControlUploadFile },
  { tester: rankTester("DateInputField"), renderer: ControlDate },
  { tester: rankTester("SelectInputField"), renderer: SelectControl },
  { tester: rankTester("Button"), renderer: ControlButton },
  { tester: rankTester("IconButton"), renderer: ControlIconButton },
  { tester: rankTester("EmptyBox"), renderer: ControlEmptyBox },
  { tester: rankTester("RadioInputField"), renderer: ControlRadio },
  { tester: rankTester("Notify"), renderer: ControlNotify },
  { tester: rankTester("MultipleSelect"), renderer: MultiSelectControl },
  { tester: rankTester("ProgressBar"), renderer: ControlProgressBar },
  { tester: rankTester("SpeedoMeter"), renderer: ControlSpeedoMeter },
  { tester: rankTester("TextArea"), renderer: TextArea },
  { tester: rankTester("Image"), renderer: Image },
  { tester: rankTester("Slider"), renderer: Slider },
  { tester: rankTester("RunnerBoyProgressBar"), renderer: RunningBoyProgressBar },
  { tester: rankTester("RollAndDice"), renderer:RollAndDice  },
  { tester: rankTester("RankCard"), renderer:RankCard  },
  { tester: rankTester("CheckBox"), renderer:Checkbox  },
  { tester: rankTester("InputSlider"), renderer:ControlInputSlider  }
];
export default renderers;
