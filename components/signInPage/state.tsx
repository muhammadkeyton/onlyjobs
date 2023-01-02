import { UPDATE_SIGNIN_DATA } from "./dispatchTypeConstants";
export interface stateTypes{
    emailAddress:string;
    password:string;
}


export interface actionTypes{
    type:string;
    payload:any;
}


export const STATE:stateTypes= {
    emailAddress:"",
    password:"",
}

export const reducer = (state:stateTypes,action:actionTypes):stateTypes =>{
    switch(action.type){
        case UPDATE_SIGNIN_DATA:
            return{
                ...state,
                [action.payload.name]:action.payload.value,
                
            }
        
        default:
            return state;    
    }
}