
export default class Permission {
 fieldName:string;
 pageName:string;
 priorityScore:number
 action:string
 constructor(permissionString){
    if(permissionString !== null ){
        const permissions = permissionString.split(":");
        this.pageName=permissions[0];
        this.fieldName = permissions[1];
        this.action = permissions[2];
        
          let priorityScore = 0;
          if(this.fieldName !== '*'){
          priorityScore += 2;
          }
          if(this.pageName !== '*'){
          priorityScore += 1;
          }
          this.priorityScore = priorityScore;
          
    }
}
}