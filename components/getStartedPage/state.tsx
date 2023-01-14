

import { NEXTSTEP,UPDATE_USER_ROLE,CURRENT_STEP,ADD_GENERATED_WORKER_TAGS,ADD_SELECTED_WORKER_TAGS,REMOVE_SELECTED_WORKER_TAGS,REMOVE_GENERATED_WORKER_TAG, UPDATE_SIGNUP_DATA,FIELDS_CHECK} from "./DispatchTypeConstants";

export interface stateTypes{
    currentStep:number;
    nextStep:boolean;
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

    fields:{
        firstName:{
            errorStatus:boolean;
            errorMessage:string;

        };

        lastName:{
            errorStatus:boolean,
            errorMessage:string;
        };

        emailAddress:{
            errorStatus:boolean;
            errorMessage:string;
        };


        password:{
            errorStatus:boolean;
            errorMessage:string;
        };

        repeatPassword:{
            errorStatus:boolean;
            errorMessage:string;
        }
    }
}


export interface actionTypes{
    type:string;
    payload?:any;
}

export const STATE: stateTypes = {
    currentStep:0,
    nextStep:false,
    userInfo:{
        role:"",
        generatedWorkerTags:[],
        selectedWorkerTags:[],
        firstName:"",
        lastName:"",
        emailAddress:"",
        password:"",
        repeatPassword:"",
        
    },


    fields:{
        firstName:{
            errorStatus:false,
            errorMessage:"",

        },

        lastName:{
            errorStatus:false,
            errorMessage:"",
        },

        emailAddress:{
            errorStatus:false,
            errorMessage:"",
        },


        password:{
            errorStatus:false,
            errorMessage:"",
        },

        repeatPassword:{
            errorStatus:false,
            errorMessage:"",
        },
    }



}



export const reducer = (state:stateTypes,action:actionTypes):stateTypes =>{
    switch(action.type){
        case NEXTSTEP:
            return{...state,nextStep:action.payload}

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

        case FIELDS_CHECK:
            //this is the field name in the nested object
            const [key] = Object.keys(action.payload);
            
            return{
                ...state,
                fields:{
                    ...state.fields,
                    [key]:action.payload[key]
                    
                    
                }
            }

        

         
        default:
            return state;
    }
}