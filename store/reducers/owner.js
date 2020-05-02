import {CREATE_OWNER,SET_OWNERS} from '../actions/ownerActions';
import Owner from '../../models/owner';

const initialState={
    owners:[]
};

const ownersReducer=(state=initialState,action)=>{

   switch(action.type){
       case CREATE_OWNER:
         const newOwner= new Owner(action.ownerData.id,action.ownerData.phone,action.ownerData.password,
                                   action.ownerData.fullname,null,null,'owner');

         return{
           ...state,
           owners: state.owners.concat(newOwner)
         };

      case SET_OWNERS:
      return{
        ...state,
        owners:action.allOwners
      }

       default: 
        return state;
   }



};

export default ownersReducer;