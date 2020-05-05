import {CREATE_OWNER,SET_OWNERS,UPDATE_OWNER_PASSWORD} from '../actions/ownerActions';
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

      case UPDATE_OWNER_PASSWORD:
         
        const ownerIndex = state.owners.findIndex(owner => owner.id === action.id);
        const updatedOwner = new Owner(
          action.id,
          state.owners[ownerIndex].phone,
          action.ownerData.password,
          state.owners[ownerIndex].fullname,
          state.owners[ownerIndex].email,
          state.owners[ownerIndex].address,
          state.owners[ownerIndex].gender
        );   

        const updatedOwners=[...state.owners];
        updatedOwners[ownerIndex]=updatedOwner;

        return{
          ...state,
          owners:updatedOwners
        };  

       default: 
        return state;
   }



};

export default ownersReducer;