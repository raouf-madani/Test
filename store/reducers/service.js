import {SET_OWNER_SERVICES} from '../actions/serviceActions';
import Service from '../../models/service';

const initialState={
    services:[],
    ownerServices:[]
};

const servicesReducer=(state=initialState,action)=>{
  console.log(action.type);
   switch(action.type){
        case SET_OWNER_SERVICES:
            return{
            ...state,
            ownerServices:action.ownerServicesData
            }
            
        default: 
        return state;

      }
};

export default servicesReducer;