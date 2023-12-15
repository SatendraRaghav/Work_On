export const uploadFile =  {
    "type": "Control",
    "scope": "#/properties/attachment",
    "config": {
      "main": {
        "label": "AttachmentFile",
        "onClick": "onClick",
        // "uploadAttachmentFile",
        // "clickEventHandler",
        "required": true,
        "errorMessage": "Attachment File is not uploaded"
      },
      "style": {
        "backgroundColor": "none"
      },
      "layout": {
        "lg": 5.5,
        "md": 5.5,
        "sm": 11,
        "xs": 11
      }
    },
    "options": {
      "widget": "UploadFile"
    }
  };
export const downloadFile =   {
    "type": "Control",
    "scope": "#/properties/downloadAttachment",
    "config": {
      "main": {
        "onClick": "onClick",
        "required": false
      },
      "style": {
        "backgroundColor": "none"
      },
      "layout": {
        "lg": 5.5,
        "md": 5.5,
        "sm": 11,
        "xs": 11
      }
    },
    "options": {
      "widget": "DownloadFile"
    }
  };