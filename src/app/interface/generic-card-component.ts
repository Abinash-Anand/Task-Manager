import { Task } from "./task"

export type cardType = ''|'taskOverview' | 'taskList'

export interface GenericCardComponent {
    cardType:cardType,
    cardHeading:string,
    cardDescription:string,
    cardActions?:{
        buttonLabel:string,
        buttonDisabled:boolean,
    }
    cardMetrics?:number,
    cardBottomText?:string
    cardTasks?: Task[]
}
