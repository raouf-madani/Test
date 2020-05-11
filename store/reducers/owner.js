import {CREATE_OWNER,SET_OWNERS,UPDATE_OWNER_PASSWORD,UPDATE_OWNER,DELETE_OWNER,SET_OWNER_PROPERTY} from '../actions/ownerActions';
import Owner from '../../models/owner';

const initialState={
    owners:[],
    ownerProperties:[]
};

const ownersReducer=(state=initialState,action)=>{

   switch(action.type){
       case CREATE_OWNER:
         const newOwner= new Owner(action.ownerData.id,action.ownerData.phone,action.ownerData.password,
                                   action.ownerData.fullname,null,action.ownerData.address,'Owner');
         return{
           ...state,
           owners: state.owners.concat(newOwner)
         };

      case SET_OWNERS:
      return{
        ...state,
        owners:action.allOwners
      };

      case UPDATE_OWNER:
         
        const ownerindex= state.ownerProperties.findIndex(owner => owner.owner_id === action.id);
        
        const updatedOwnerData= new Owner(
          action.id,
          state.ownerProperties[ownerindex].phone,
          state.ownerProperties[ownerindex].password,
          action.ownerData.fullname,
          action.ownerData.email,
          action.ownerData.address,
          state.ownerProperties[ownerindex].type
        );
        const updatedOwnersData=[...state.ownerProperties];
        updatedOwnersData[ownerindex]= updatedOwnerData;
        return{
          ...state,
          ownerProperties:updatedOwnersData
        };

      case DELETE_OWNER:
        return{
          ...state,
          owners:state.owners.filter(owner=>owner.id != action.id)
        };  

      case UPDATE_OWNER_PASSWORD:
         
        const ownerIndex = state.owners.findIndex(owner => owner.id === action.id);
        const updatedOwner = new Owner(
          action.id,
          state.owners[ownerIndex].phone,
          action.ownerData.password,
          state.owners[ownerIndex].fullname,
          state.owners[ownerIndex].email,
          state.owners[ownerIndex].address,
          state.owners[ownerIndex].type
        );   

        const updatedOwners=[...state.owners];
        updatedOwners[ownerIndex]=updatedOwner;
        return{
          ...state,
          owners:updatedOwners
        };
        
        case SET_OWNER_PROPERTY:
          return{
            ...state,
            ownerProperties:action.ownerProperty
          };

       default: 
        return state;
   }



};

export default ownersReducer;