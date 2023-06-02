export const UserMasterSchema = {
    type: "object",
    properties: {
        name: {
            type: "string",
            minLength: 3,
        },
        firstName: {
            type: "string",
            pattern:"^[\\p{L} .'-]+$",
            minLength:1
        },

        crn: {
            type: "string",
            minLength: 3,
        },
        pan: {
            type: "string",
            pattern: "[A-Za-z]{5}[0-9]{4}[A-Za-z]{1}",
        },
        email: {
            type: "string",
            pattern: "^[\\w\\-\\.]+@([\\w\\-]+\\.)+[\\w\\-]{2,4}$",
        },
        mobilePhoneNo: {
            type: "string",
            pattern: "^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$",
        },
        empCode: {
            type: "string",
            minLength:1
        },
        active: {
            type: "string",
        },
       
    },
    required: ["name", "firstName", "crn", "pan", "email", "mobilePhoneNo", "empCode", "active", "role", "position"],
    if: {
        properties: {
            active: {
                const: "NO"
            }
        }
    },
    then: {
        properties: {
            reasonForInactiveMarking : {
                type: "string",
                minLength:1,
            }
        },
            required: ["reasonForInactiveMarking",],

    }
}