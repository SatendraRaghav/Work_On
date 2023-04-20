import { Box } from '@mui/material'
import React, { useContext } from 'react'
//@ts-ignore
// import {Graph} from '@act21_products/grapho';
// import appleStock from '@visx/mock-data/lib/mocks/appleStock';
import { DataContext } from '../../../Context';
// import { letterFrequency } from "@visx/mock-data";
const Product1 = [
  {x:"0",y:"0"},
  { x: "5", y: 150 },
  { x: "10", y: 350 },
  { x: "15", y: 430 },
  { x: "20", y: 620 }
];
const Product2 = [
  {x:"January",y:1065},
  { x: "February", y: 700 },
  { x: "March", y: 1000 },
  { x: "April", y: 450 },
  { x: "This month", y: 3600 }
];
const Product3 = [
  {x:"0",y:"0"},
  { x: "5", y: 200 },
  { x: "10", y: 700 },
  { x: "15", y: 1000 },
  { x: "20", y: 500 }
];

const CustomBargraph = ({Data}:any) => {
  const { dispatch, state } = useContext(DataContext);
  // const demoValue = Data.content.graphValue.type==="Linegraph"?{...Data.content.graphValue,data:[Product1]}:{...Data.content.graphValue,data:state.graphData}
  // const value = Data.content.graphValue.condition?({...Data.content.graphValue,data:state.graphData||[{}]}):
  // (Data.content.graphValue.type==="AreaChartWithBrush"||Data.content.graphValue.type==="AreaGraph"?{...Data.content.graphValue,data:Data.content.graphValue.type==="AreaChartWithBrush"?appleStock.slice(0,499):appleStock.slice(0,497)}:Data.content.graphValue.type==="Linegraph"?{...Data.content.graphValue,data:[Product1,Product3]}:{...Data.content.graphValue,data:[...Product2]})
  return (
    <Box>
      <div>Graph</div>
      {/* <Graph value={JSON.stringify(value)}/> */}
    </Box>
  )
}

export default CustomBargraph