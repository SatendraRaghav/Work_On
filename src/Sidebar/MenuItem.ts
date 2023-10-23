export class MenuItem {
    id:number;
    name:string;
    url:string;
    children:[]
    constructor(id:number,name:string,url:string,children:[]){
        this.id = id;
        this.name = name;
        this.url = url;
        this.children = children
    }
}