import {CREATE_PLAYER,SET_PLAYERS} from '../actions/playerActions';
import Player from '../../models/player';

const initialState={
    players:[]
};

const playersReducer=(state=initialState,action)=>{
 
   switch(action.type){
       case CREATE_PLAYER:
         const newPlayer= new Player(action.playerData.id,action.playerData.phone,action.playerData.password,
                                     action.playerData.name,action.playerData.surname,null,null,'player');
                                    
         return{
           ...state,
           players: state.players.concat(newPlayer)
         };

       case SET_PLAYERS:
         return{
          ...state,
          players:action.allPlayers
         }
       default: 
        return state;
   }



};

export default playersReducer;