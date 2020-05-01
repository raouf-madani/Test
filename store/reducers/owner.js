import {CREATE_OWNER} from '../actions/ownerActions';
import Owner from '../../models/owner';

const initialState={
    owners:[]
};

const ownersReducer=(state=initialState,action)=>{

   switch(action.type){
       case CREATE_OWNER:
         const newOwner= new Owner(action.id,action.phone,action.password,action.fullname,
                                  action.email,action.address,action.type);

         return{
           ...state,
           owners: state.owners.concat(newOwner)
         };

       default: 
        return state;
   }



};

export default ownersReducer;