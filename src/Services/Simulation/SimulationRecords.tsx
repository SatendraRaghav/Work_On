import { JsonFormsStateContext } from "@jsonforms/react";
import axios from "axios";

import _ from "lodash";
import { myService } from "../../service/service";
import { SimulationSchema } from "../../UiSchema/Simulation/Schema";
import { SimulationUiSchema } from "../../UiSchema/Simulation/UISchema";

export const SimulationRecords = (
  store:any,
  dynamicData:any
) => {
  const service = myService(dynamicData?.setLoading,  store.navigate);
  return {
    setPage: async function () {
      var formdata = await this.getFormdata();
      var uiSchema = await this.getUiSchema();
      var schema = await this.getSchema();
      store.setUiSchema(uiSchema);
      store.setFormdata(formdata);
      store.setSchema(schema);
    },
    getFormdata: async function () {
      return this.loadTable()
    .then((res:any)=>{
     return{
        ...store.data,
        SimulationList:res
      };
    });
    },
    getUiSchema: async function () {
      let uiSchema = SimulationUiSchema;
      console.log(uiSchema)
      let data: any = null;
      await service
        .get("/program/getAll")
        .then((response) => {
          data = response.data.payload.map((elem: any) => {
            return { label: elem.name, value: elem.id };
          });
           
           uiSchema.elements[1].elements[0].config.main.options =
           data;
        
          })
        .catch((error) => {
          console.log(error);
          return [];
        });
      return uiSchema;
    },
    getSchema: () => {
      return SimulationSchema;
    },
    onChange: async () => {
      let uiSchema = SimulationUiSchema;
      if(  store.newData?.programType){
      const result: any = await service
        .get(
          `/programCycle/getByProgramId?id=${
           store.newData?.programType
          } `
        )
        .then((response: any) => {
          const result1 = response.data.payload.map((elem: any) => {
            const cycle = { label: elem.name, value: elem.id };
            return cycle;
          });
          
          uiSchema.elements[1].elements[1].config.main.options =
            result1;
          store.setUiSchema(JSON.parse(JSON.stringify(uiSchema)));
        })
        .catch((error) => {
          return [];
        });
      }
    },
  
    loadTable: async function ()  {
      const result = await service
      .post("/simulation/getAll",{payload:{}}, {
        headers: {
          "Content-Type": "application/json",
          "X-Requested-With": "XMLHttpRequest",
        },
      })
      .then((response: any) => {
        const result = response.data.payload
        result?.sort(function compare(a: any, b: any) {
          return b.id - a.id;
        });
         
          const res = result.map((elem: any) => {
            const timestamp1 = elem.createdOn;
            const timestamp2 = elem.modifiedOn;
            const createdDate = new Date(timestamp1);
              const modifiedDate = timestamp2?new Date(timestamp2):null;
              const createdDateString = createdDate.toLocaleString();
              const modifiedDateString = modifiedDate?modifiedDate.toLocaleString():"";
            return{id:elem.id,name:elem.name,status:elem.status,startedOn:createdDateString,completedOn:modifiedDateString};
          });
          return res;
      })
      // .then((response)=>{
        
      //   SimulationUiSchema.elements[2].elements[0].config.main.allRowsData =response;
      //     store.setUiSchema(SimulationUiSchema);
      //   })
        .catch((error) => {
          console.log(error);
          return [{}];
        });
        return result;
    },
    searchData: async function ()  {
      if (
        store.ctx.core.data.startDate === undefined ||
        store.ctx.core.data.startDate === null ||
        store.ctx.core.data.endDate === undefined ||
        store.ctx.core.data.endDate === null      ||
        store.ctx.core.data.program === undefined ||
        store.ctx.core.data.program === null
      ) {
       const formdata1=await this.getFormdata().then((res:any)=>{
        return res;
       });
        store.setFormdata(formdata1);
      }
      else {
        const body = JSON.stringify({
          payload: {
            entityName: "simulationRequest",
            startDate: store.ctx.core.data.startDate,
            endDate: store.ctx.core.data.endDate,
            programId: store.ctx.core.data.program
          },
        });
        const result = await service
          .post("/simulation/getAll", body, {
            headers: {
              "Content-Type": "application/json",
              "X-Requested-With": "XMLHttpRequest",
            },
          })
          .then((response: any) => {
            const result = response.data.payload
            
            const res = result?.map((elem: any) => {
                const timestamp1 = result.createdOn;
            const timestamp2 = result.modifiedOn;
            const createdDate = new Date(timestamp1);
              const modifiedDate = timestamp2?new Date(timestamp2):null;
              const createdDateString = createdDate.toLocaleString();
              const modifiedDateString = modifiedDate?modifiedDate.toLocaleString():"";
              return{id:elem.id,name:elem.name,status:elem.status,startedOn:createdDateString,completedOn:modifiedDateString};
              });
              store.setFormdata({...store.ctx.core.data,SimulationList:res});
        })
          .catch((error) => {
            console.log(error);
            return [{}];
          });
      }
    },
    createSimulation: async () => {
      store.navigate("/SimulationForm")
             },

    editRecords: async () => {
      store.navigate(`/SimulationForm?id=${dynamicData?.rowData.id}`);
    }         
  };
};
