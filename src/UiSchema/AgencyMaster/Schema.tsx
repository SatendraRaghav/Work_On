export const  AgencyMasterSchema = {
    type: "object",
    properties: {
        pan: {
            type: "string",
            pattern: "[A-Za-z]{5}[0-9]{4}[A-Za-z]{1}",

          },
          email: {
            type: "string",
            pattern: "^[\\w\\-\\.]+@([\\w\\-]+\\.)+[\\w\\-]{2,4}$",
          },
        active:{
            type:"string"
        },
        type:{
            oneOf:[{title:"DSA",const:"DSA"},{title:"VENDOR",const:"VENDOR"}]
        },
        Back_Button:{
            disabled:false
        },
        downloadAggrementCopy:{
            disabled:false
        },
        downloadAppointmentLetter:{
            disabled:false
        }
        ,
        downloadApplicationForm:{
            disabled:false
        }
        ,
        downloadDueDiligenceReport:{
            disabled:false
        }
        ,
        downloadBrokerageLetter:{
            disabled:false
        }
        ,
        downloadDisclosureLetter:{
            disabled:false
        }
        ,
        downloadCallingSetupAgencyLetterHead:{
            disabled:false
        }
        ,
        downloadCallingSetupKotakLetterHead:{
            disabled:false
        }
        ,
        downloadRmVisitReport:{
            disabled:false
        }
        ,
        downloadPan:{
            disabled:false
        }
        ,
        downloadCancel_Cheque_File:{
            disabled:false
        }
        ,
        downloadCibil:{
            disabled:false
        }
        ,
        downloadOther:{
            disabled:false
        }
    },
    required:["userName","type","name","mobile","email","aggrementStartDate","aggrementEndDate","role","active"],
}