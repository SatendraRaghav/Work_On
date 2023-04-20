import ControlButton from './Custom/CustomComponents/Control/ControlButton';
import myButtonTester from './Custom/CustomComponents/ControlTester/TesterButton';
import ControlAppbar from './Custom/CustomComponents/Control/ControlAppbar';
import myAppbarTester from './Custom/CustomComponents/ControlTester/TesterAppbar';
import  myInputTester  from './Custom/CustomComponents/ControlTester/TesterInput';
import myUserbarTester from './Custom/CustomComponents/ControlTester/TesterUserbar';
import myBargraphTester from './Custom/CustomComponents/ControlTester/TesterGraph';
import ControlBargraph from './Custom/CustomComponents/Control/ControlGraph';
import ControlUserbar from './Custom/CustomComponents/Control/ControlUserbar';
import myProgressBarTester from './Custom/CustomComponents/ControlTester/TesterProgressbar';
import ControlProgressbar from './Custom/CustomComponents/Control/ControlProgressbar';
import myCardTester from './Custom/CustomComponents/ControlTester/TesterCard';
import Controlcard from './Custom/CustomComponents/Control/Controlcard';
import myWrapperTester from './Custom/CustomComponents/ControlTester/TesterWrapper';
import ControlWrapper from './Custom/CustomComponents/Control/ControlWrapper';
import ControlRecordCell from './Custom/CustomComponents/Control/ControlRecordCell';
import myRecordCellTester from './Custom/CustomComponents/ControlTester/TesterRecordCell';
import ControlThought from './Custom/CustomComponents/Control/ConrolThought';
import myTesterThought from './Custom/CustomComponents/ControlTester/TesterThought';
import {
    materialRenderers,
  } from '@jsonforms/material-renderers';
  import ControlPath from './Custom/CustomComponents/Control/ControlPath';
  import myPathTester from './Custom/CustomComponents/ControlTester/TesterPath';
  import myEmptyBoxTester from './Custom/CustomComponents/ControlTester/TesterEmptyBox';
import myRadioTester from './Custom/CustomComponents/ControlTester/TesterRadio';
import ControlRadio from './Custom/CustomComponents/Control/ControlRadio';
import ControlInput from './Custom/CustomComponents/Control/ControlInput';
import ControlEmptyBox from './Custom/CustomComponents/Control/ControlEmptyBox';
import MaterailLayoutHorizontal from './Custom/CustomLayout/MaterailLayoutHorizontal';
import { materialHorizontalLayoutTester } from './Custom/CustomLayout/MaterailLayoutHorizontal';
import ControlSelect from './Custom/CustomComponents/Control/ControlSelect';
import ControlFile from './Custom/CustomComponents/Control/ControlFile';
import ControlDate from './Custom/CustomComponents/Control/ControlDate';
import ControlDataTable from './Custom/CustomComponents/Control/ControlDataTable';
import ControlBox from './Custom/CustomComponents/Control/ControlBox';
import  myBoxTester from './Custom/CustomComponents/ControlTester/TesterBox';
import myFileTester  from './Custom/CustomComponents/ControlTester/TesterFile';
import myDateTester  from './Custom/CustomComponents/ControlTester/TesterDate';
import  mySelectTester  from './Custom/CustomComponents/ControlTester/TesterSelect';
import { myArrayTester } from './Custom/CustomComponents/ControlTester/TesterArrayTable';
import Table from './Custom/CustomComponents/Control/ControlArrayTable';
import myTableTester  from './Custom/CustomComponents/ControlTester/TesterDataTable';
import  myTabTester  from './Custom/CustomComponents/ControlTester/TesterTab';
import ControlTab from './Custom/CustomComponents/Control/ControlTab';
import TesterTimer from './Custom/CustomComponents/ControlTester/TesterTimer';
import ControlTimer from './Custom/CustomComponents/Control/ControlTimer';
import TesterPrices from './Custom/CustomComponents/ControlTester/Testerprices';
import ControlPrices from './Custom/CustomComponents/Control/ControlPrices';
import TesterCompare from './Custom/CustomComponents/ControlTester/TesterCompare';
import ControlCompare from './Custom/CustomComponents/Control/ControlCompare';
import TesterPrevious from './Custom/CustomComponents/ControlTester/TesterPrevious';
import PreviosControl from './Custom/CustomComponents/Control/PreviosControl';
import TesterRecommend from './Custom/CustomComponents/ControlTester/TesterRecommend';
import ControlRecommend from './Custom/CustomComponents/Control/ControlRecommend';
import TesterRank2 from './Custom/CustomComponents/ControlTester/TesterRank';
import ControlRank from './Custom/CustomComponents/Control/ControlRank';
import ControlNotify from './Custom/CustomComponents/Control/ControlNotify';
import myNotifyTester from './Custom/CustomComponents/ControlTester/TesterNotify';
export const renders = [
    ...materialRenderers,
    {tester:materialHorizontalLayoutTester,renderer:MaterailLayoutHorizontal},
    {tester:myTabTester,renderer:ControlTab},
    {tester:myTableTester,renderer:ControlDataTable},
    {tester:myTabTester,renderer:ControlTab},
    {tester:myBoxTester,renderer:ControlBox},
    { tester:myInputTester,renderer:ControlInput },
    { tester:myFileTester,renderer:ControlFile },
    { tester:myDateTester,renderer:ControlDate },
    { tester:mySelectTester,renderer:ControlSelect },
    { tester:myAppbarTester,renderer:ControlAppbar },
    {tester:myCardTester,renderer:Controlcard},
    {tester:myArrayTester,renderer:Table},
    {tester:myButtonTester,renderer:ControlButton},
    {tester:myEmptyBoxTester,renderer:ControlEmptyBox},
    {tester:myRadioTester,renderer:ControlRadio},
    {tester:myUserbarTester,renderer:ControlUserbar},
    {tester:myProgressBarTester,renderer:ControlProgressbar},
    {tester:myBargraphTester,renderer:ControlBargraph},
    {tester:myWrapperTester,renderer:ControlWrapper},
    {tester:myRecordCellTester,renderer:ControlRecordCell},
    {tester:myPathTester,renderer:ControlPath},
    {tester:myTesterThought,renderer:ControlThought},
    {tester:TesterTimer,renderer:ControlTimer},
    {tester:TesterPrices,renderer:ControlPrices},
    {tester:TesterCompare,renderer:ControlCompare},
    {tester:TesterPrevious,renderer:PreviosControl},
    {tester:TesterRank2,renderer:ControlRank},
    {tester:TesterRecommend,renderer:ControlRecommend},
    {tester:myNotifyTester,renderer:ControlNotify}
  ];