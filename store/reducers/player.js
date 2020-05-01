import {CREATE_PLAYER} from '../actions/playerActions';
import Player from '../../models/player';

const initialState={
    players:[]
};

const playersReducer=(state=initialState,action)=>{
   console.log(action.type);
   switch(action.type){
       case CREATE_PLAYER:
         const newPlayer= new Player(action.id,action.phone,action.password,action.name,
                                     action.surname,action.email,action.address,action.gender);
                                    
         return{
           ...state,
           players: state.players.concat(newPlayer)
         };

       default: 
        return state;
   }



};

export default playersReducer;