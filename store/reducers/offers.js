
import {SET_OFFERS} from "../actions/offers";

const initialState={
    offers : []
}


const offersReducer = (state = initialState,action)=>{
switch(action.type){
   case SET_OFFERS :
       
       return {
        offers : action.offers 
       }

   default : return state ;

}


    

}

export default offersReducer;