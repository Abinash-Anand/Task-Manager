import { cardType } from "./generic-card-component";

export interface Task {
    id:string,
    title:string,
    description?:string,
    priority:'low' |'medium'| 'high',
    status:'pending' | 'completed',
    dueDate:string| null,
    createdAt:string,
    updatedAt:string,
    cardType:cardType
}
