

import { ROLE,UPDATE_USER_ROLE,CURRENT_STEP,UPDATE_WORKER_TAGS } from "./DispatchTypeConstants";

export interface stateTypes{
    currentStep:number;
    role:boolean;
    userInfo:{
        role:string,
        workerTags:string[]
    };
}


export interface actionTypes{
    type:string;
    payload?:any;
}

export const STATE: stateTypes = {
    currentStep:0,
    role:false,
    userInfo:{
        role:"",
        workerTags:[]
    }
}



export const reducer = (state:stateTypes,action:actionTypes):stateTypes =>{
    switch(action.type){
        case ROLE:
            return{...state,role:action.payload}

        case CURRENT_STEP:
            return {...state,currentStep:action.payload}

        
        case UPDATE_USER_ROLE:
            return {
                ...state,
                userInfo:{
                    ...state.userInfo,
                    role:action.payload
                }
            }

        case UPDATE_WORKER_TAGS:
            return{
                ...state,
                userInfo:{
                    ...state.userInfo,
                    workerTags:action.payload
                }
            }

         
        default:
            return state;
    }
}