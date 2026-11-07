import { Task } from "./task"
export type cardType = ''|'taskOverview' | 'taskList'
export type PriorityType = 'low'| 'medium' | 'high'
export type actionButtonType = 'reOpen' | 'markAsCompleted' | 'delete'
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
