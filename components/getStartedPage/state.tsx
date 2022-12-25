

import { ROLE,USERINFO,CURRENTSTEP } from "./DispatchTypeConstants";

export interface stateTypes{
    currentStep:number;
    role:boolean;
    userInfo:{
        role:string
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
        role:""
    }
}



export const reducer = (state:stateTypes,action:actionTypes):stateTypes =>{
    switch(action.type){
        case ROLE:
            return{...state,role:action.payload}

        case CURRENTSTEP:
            return {...state,currentStep:action.payload}

        
        case USERINFO:
            return {
                ...state,
                userInfo:action.payload
            }

         
        default:
            return state;
    }
}