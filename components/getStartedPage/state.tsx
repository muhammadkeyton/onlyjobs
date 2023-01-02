


import { ROLE,UPDATE_USER_ROLE,CURRENT_STEP,ADD_GENERATED_WORKER_TAGS,ADD_SELECTED_WORKER_TAGS,REMOVE_SELECTED_WORKER_TAGS,REMOVE_GENERATED_WORKER_TAG, UPDATE_SIGNUP_DATA } from "./DispatchTypeConstants";

export interface stateTypes{
    currentStep:number;
    role:boolean;
    userInfo:{
        role:string;
        generatedWorkerTags:string[];
        selectedWorkerTags:string[];
        firstName:string;
        lastName:string;
        emailAddress:string;
        password:string;
        repeatPassword:string;
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
        generatedWorkerTags:[],
        selectedWorkerTags:[],
        firstName:"",
        lastName:"",
        emailAddress:"",
        password:"",
        repeatPassword:"",
        
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

        case ADD_GENERATED_WORKER_TAGS:
            return{
                ...state,
                userInfo:{
                    ...state.userInfo,
                    generatedWorkerTags:action.payload
                }
            }
        
        case REMOVE_GENERATED_WORKER_TAG:
            return{
                ...state,
                userInfo:{
                    ...state.userInfo,
                    generatedWorkerTags:state.userInfo.generatedWorkerTags.filter((tag)=> tag !== action.payload)
                }
            }

        case ADD_SELECTED_WORKER_TAGS:
            return{
                ...state,
                userInfo:{
                    ...state.userInfo,
                    selectedWorkerTags:[...state.userInfo.selectedWorkerTags,action.payload]
                }
            }

        case REMOVE_SELECTED_WORKER_TAGS:
            return{
                ...state,
                userInfo:{
                    ...state.userInfo,
                    selectedWorkerTags:state.userInfo.selectedWorkerTags.filter((tag) => tag !== action.payload)
                }
            }

        case  UPDATE_SIGNUP_DATA:
            return {
                ...state,
                userInfo:{
                    ...state.userInfo,
                    [action.payload.name] : action.payload.value
                }
            }

         
        default:
            return state;
    }
}