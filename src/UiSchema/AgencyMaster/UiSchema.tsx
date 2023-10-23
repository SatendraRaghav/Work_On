export const  AgencyMasterUISchema = {
  "type": "HorizontalLayout",
  stylePage:{
    background:"#eef2f6",
    // background:"#051327",
    minHeight:"100vh",
    margin:"10px 20px",
    height:"auto",
    borderRadius:"20px"
   },
"elements": [
  {
    "type": "Control",
    "scope": "#/properties/Appbar",
    "layout": 12,
    "options": {
      "widget": "EmptyBox"
    },
    "value": {
      "content": {
      
      }
    }
  },
  {
    type: "Control",
    scope: "#/properties/Back_Button",
    layout: {
      xs: 6,
      sm: 4,
      md: 2,
      lg: 2,
    },
    options: {
      widget: "Button",
    },
    value: {
      content: {
        name: "\u2190",
        variant: "contained",
        color: "primary",
        type: "button",
        size: "large",
        funcName: "backHandler",
      },
      style:{
        background:"#091f3c",
        color:"white",
        width:"30px",
        height:"30px",
        paddingTop:"5px",
       fontWeight:"bold",
       fontSize:"30px",
        marginLeft:"5px"
      }
    },
  },
  {
    "type": "Control",
    "scope": "#/properties/EmptyBox",
    "options": {
      "widget": "EmptyBox"
    },
    "layout": {
      "xs": 7,
      "sm": 7,
      "md": 8,
      "lg": 8
    }
  },
    {
      "type": "Control",
      "scope": "#/properties/crn",
      "layout": 6,
      "options": {
        "widget": "InputField"
      },
      "value": {
        "content": {
          "label": "CRN Number",
          "type": "number",
          "required": true
        }
      }
    },
    {
      "type": "Control",
      "scope": "#/properties/agencyType",
      "layout": 6,
      "options": {
        "widget": "SelectInputField"
      },
      "value": {
        "content": {
          "label": "type",
          "options": [{label:"NATIONAL",value:"NATIONAL"},{label:"MULTICITY",value:"MULTICITY"},{label:"SINGLECITY",value:"SINGLECITY"}],
        
          "required": true
        }
      }
    },
    {
      "type": "Control",
      "scope": "#/properties/Role_Category",
      "layout": 6,
      "options": {
        "widget": "SelectInputField"
      },
      "value": {
        "content": {
          "label": "category",
          "options": [{label:"DSA",value:"DSA"},{label:"VENDOR",value:"VENDOR"}],
          "required": true
        }
      }
    },
    {
      "type": "Control",
      "scope": "#/properties/name",
      "layout": 6,
      "options": {
        "widget": "InputField"
      },
      "value": {
        "content": {
          "label": "Name of Agency",
          "type": "text",
          "required": true
        }
      }
    },
    {
      "type": "Control",
      "scope": "#/properties/identifier",
      "layout": 6,
      "options": {
        "widget": "SelectInputField"
      },
      "value": {
        "content": {
          "label": "Agency Indentifier",
          "options": [{label:"CORPORATE",value:"CORPORATE"},{label:"RETAIL",value:"RETAIL"}],
          "required": true
        }
      }
    },
    {
      "type": "Control",
      "scope": "#/properties/pan",
      "layout": 6,
      "options": {
        "widget": "InputField"
      },
      "value": {
        "content": {
          "label": "Pan Number",
          "type": "text",
          "required": true
        }
      }
    },
    {
      "type": "Control",
      "scope": "#/properties/mobile",
      "layout": 6,
      "options": {
        "widget": "InputField"
      },
      "value": {
        "content": {
          "label": "Agency Mobile No.",
          "type": "number",
          "required": true,
          "customValidate": {
            "length": 10
          }
        }
      }
    },
    {
      "type": "Control",
      "scope": "#/properties/phone",
      "layout": 6,
      "options": {
        "widget": "InputField"
      },
      "value": {
        "content": {
          "label": "Agency Phone Number",
          "type": "number",
          "customValidate": {
            "length": 10
          }
        }
      }
    },
    {
      "type": "Control",
      "scope": "#/properties/email",
      "layout": 6,
      "options": {
        "widget": "InputField"
      },
      "value": {
        "content": {
          "label": "Agency E-Mail ID",
          "type": "email",
          "required": true
        }
      }
    },
    {
      "type": "Control",
      "scope": "#/properties/aggrementEndDate",
      "options": {
        "widget": "DateInputField"
      },
      "layout": 6,
      "value": {
        "content": {
          "label": "Agreement Exp. Date",
          "type": "date",
          "required": true
        }
      }
    },
    {
      "type": "Control",
      "scope": "#/properties/aggrementStartDate",
      "options": {
        "widget": "DateInputField"
      },
      "layout": 6,
      "value": {
        "content": {
          "label": "Agreement Start Date",
          "type": "date",
          "required": true
        }
      }
    },
    {
      "type": "Control",
      "scope": "#/properties/firstAggrementDate",
      "options": {
        "widget": "DateInputField"
      },
      "layout": 6,
      "value": {
        "content": {
          "label": "First Agreement Date",
          "type": "date",
          "required": true
        }
      }
    },
    {
      "type": "Control",
      "scope": "#/properties/agencyMainContactPerson",
      "layout": 6,
      "options": {
        "widget": "InputField"
      },
      "value": {
        "content": {
          "label": "Agency Main Contact Person",
          "type": "text",
          "required": true
        }
      }
    },
    {
      "type": "Control",
      "scope": "#/properties/active",
      "layout": 6,
      "options": {
        "widget": "RadioInputField"
      },
      "value": {
        "content": {
          "label": "Active",
          "options": ["YES","NO"],
          "required": true
        }
      }
    },
    {
      "type": "Control",
      "scope": "#/properties/inactiveReason",
      "layout": 6,
      "options": {
        "widget": "SelectInputField"
      },
      "value": {
        "content": {
          "label": "Inactive_Reason",
          "options": [{label:"FRAUD",value:"FRAUD"},{label:"Agreement Expire",value:"Agreement Expire"},{label:"Others",value:"Others"}]
        }
      }
    },
    {
      "type": "Control",
      "scope": "#/properties/remarks",
      "layout": 6,
      "options": {
        "widget": "InputField"
      },
      "value": {
        "content": {
          "label": "Inactive Remark",
          "type": "text"
        }
      }
    },
    {
      "type": "Control",
      "scope": "#/properties/additionalAddress",
      "layout": 6,
      "options": {
        "widget": "InputField"
      },
      "value": {
        "content": {
          "label": "Additional Addresss",
          "type": "text"
        }
      }
    },
    {
      "type": "Control",
      "scope": "#/properties/additionalMobile",
      "layout": 6,
      "options": {
        "widget": "InputField"
      },
      "value": {
        "content": {
          "label": "Additional Mobile Number",
          "type": "number",
          "customValidate": {
            "length": 10
          }
        }
      }
    },
    {
      "type": "Control",
      "scope": "#/properties/additionalEmail",
      "layout": 6,
      "options": {
        "widget": "InputField"
      },
      "value": {
        "content": {
          "label": "Additional E-Mail Id",
          "type": "email"
        }
      }
    },
    {
      "type": "Control",
      "scope": "#/properties/bankAccountNo",
      "layout": 6,
      "options": {
        "widget": "InputField"
      },
      "value": {
        "content": {
          "label": "Bank Account Number",
          "type": "number",
          "required": true
        }
      }
    },
    {
      "type": "Control",
      "scope": "#/properties/bankIfscCode",
      "options": {
        "widget": "InputField"
      },
      "layout": 6,
      "value": {
        "content": {
          "label": "IFSC Code",
          "type": "number",
          "required": true
        }
      }
    },
    {
      "type": "Control",
      "scope": "#/properties/companyIncorpationDate",
      "layout": 6,
      "options": {
        "widget": "DateInputField"
      },
      "value": {
        "content": {
          "label": "Company Incorpation Date",
          "type": "date"
        }
      }
    },
    {
      "type": "Control",
      "scope": "#/properties/EmptyBox",
      "options": {
        "widget": "EmptyBox"
      },
      "layout": 6
    },
    {
      "type": "Group",
      "label": "Upload Your Documents",
      "elements": [
        {
          "type": "HorizontalLayout",
          "elements": [
            {
              "type": "Control",
              "scope": "#/properties/docAggrementCopy",
              "options": {
                "widget": "FileInputField"
              },
              "layout": {
                "xs": 12,
                "sm": 12,
                "md": 6,
                "lg": 6
              },
              "value": {
                "content": {
                  "label": "Agreement Copy",
                  "required": true
                }
              }
            },
            {
              "type": "Control",
              "scope": "#/properties/docAppointmentLetter",
              "layout": {
                "xs": 12,
                "sm": 12,
                "md": 6,
                "lg": 6
              },
              "options": {
                "widget": "FileInputField"
              },
              "value": {
                "content": {
                  "saveApi": "https://jsonplaceholder.typicode.com/users",
                  "label": "The Agreement or Appointment Letter"
                }
              }
            },
            {
              "type": "Control",
              "scope": "#/properties/docApplicationForm",
              "layout": {
                "xs": 12,
                "sm": 12,
                "md": 6,
                "lg": 6
              },
              "options": {
                "widget": "FileInputField"
              },
              "value": {
                "content": {
                  "label": "Application Form"
                }
              }
            },
            {
              "type": "Control",
              "scope": "#/properties/docDueDiligenceReport",
              "layout": {
                "xs": 12,
                "sm": 12,
                "md": 6,
                "lg": 6
              },
              "options": {
                "widget": "FileInputField"
              },
              "value": {
                "content": {
                  "label": "Due Diligence Report"
                }
              }
            },
            {
              "type": "Control",
              "scope": "#/properties/docBrokerageLetter",
              "layout": {
                "xs": 12,
                "sm": 12,
                "md": 6,
                "lg": 6
              },
              "options": {
                "widget": "FileInputField"
              },
              "value": {
                "content": {
                  "label": "Brokage Letter",
                  "required": true
                }
              }
            },
            {
              "type": "Control",
              "scope": "#/properties/docDisclosureLetter",
              "layout": {
                "xs": 12,
                "sm": 12,
                "md": 6,
                "lg": 6
              },
              "options": {
                "widget": "FileInputField"
              },
              "value": {
                "content": {
                  "label": "Disclosure Letter",
                  "required": true
                }
              }
            },
            {
              "type": "Control",
              "scope": "#/properties/docCallingSetupAgencyLetterHead",
              "layout": {
                "xs": 12,
                "sm": 12,
                "md": 6,
                "lg": 6
              },
              "options": {
                "widget": "FileInputField"
              },
              "value": {
                "content": {
                  "label": "DSA/DMA No Calling Set Up On DMA/DSA Letter Head",
                  "required": true
                }
              }
            },
            {
              "type": "Control",
              "scope": "#/properties/ docCallingSetupKotakLetterHead",
              "layout": {
                "xs": 12,
                "sm": 12,
                "md": 6,
                "lg": 6
              },
              "options": {
                "widget": "FileInputField"
              },
              "value": {
                "content": {
                  "label": "National Do Not Call Letter On Kotak Letter Head",
                  "required": true
                }
              }
            },
            {
              "type": "Control",
              "scope": "#/properties/docRmVisitReport",
              "options": {
                "widget": "FileInputField"
              },
              "layout": {
                "xs": 12,
                "sm": 12,
                "md": 6,
                "lg": 6
              },
              "value": {
                "content": {
                  "label": "RM Visit Report"
                }
              }
            },
            {
              "type": "Control",
              "scope": "#/properties/docPan",
              "layout": {
                "xs": 12,
                "sm": 12,
                "md": 6,
                "lg": 6
              },
              "options": {
                "widget": "FileInputField"
              },
              "value": {
                "content": {
                  "label": "Pan documents"
                }
              }
            },
            {
              "type": "Control",
              "scope": "#/properties/Cancel_Cheque_File",
              "layout": {
                "xs": 12,
                "sm": 12,
                "md": 6,
                "lg": 6
              },
              "options": {
                "widget": "FileInputField"
              },
              "value": {
                "content": {
                  "label": "Cancel Cheque"
                }
              }
            },
            {
              "type": "Control",
              "scope": "#/properties/docCibil",
              "layout": {
                "xs": 12,
                "sm": 12,
                "md": 6,
                "lg": 6
              },
              "options": {
                "widget": "FileInputField"
              },
              "value": {
                "content": {
                  "label": "CIBIL Report"
                }
              }
            },
            {
              "type": "Control",
              "scope": "#/properties/docOther",
              "layout": {
                "xs": 12,
                "sm": 12,
                "md": 6,
                "lg": 6
              },
              "options": {
                "widget": "FileInputField"
              },
              "value": {
                "content": {
                  "label": "Other Upload"
                }
              }
            },
            {
              "type": "Control",
              "scope": "#/properties/docPayoutStructure",
              "layout": {
                "xs": 12,
                "sm": 12,
                "md": 6,
                "lg": 6
              },
              "options": {
                "widget": "FileInputField"
              },
              "value": {
                "content": {
                  "label": "Payout Structure File"
                }
              }
            }
          ]
        }
      ]
    },,
    {
     "type": "Control",
     "scope": "#/properties/Appbar",
     "layout": 6,
     "options": {
       "widget": "EmptyBox"
     },
     "value": {
       "content": {
       
       }
     }
   },
    {
     type: "Control",
     scope: "#/properties/LoginPage",
     options: {
       widget: "Button",
     },
     layout: {
       xs: 12,
       sm: 12,
       md: 12,
       lg: 12,
     },
     value: {
       content: {
         name: " \u2713 Submit",
         variant: "contained",
         color: "info",
         type: "text",
         "funcName":"Submit_User",
         size: "large"
       },
       style: {
         background:"#091f3c",
         color:"white",
         width:"200px",
         marginRight:"50px",
         float:"right"
       },
     },
   }
 ]
}
