import {CREATE_PLAYER,SET_PLAYERS,UPDATE_PLAYER_PASSWORD,UPDATE_PLAYER,DELETE_PLAYER} from '../actions/playerActions';
import Player from '../../models/player';

const initialState={
    players:[]
};

const playersReducer=(state=initialState,action)=>{
   console.log(state.players);
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

       case UPDATE_PLAYER:

        const playerID = state.players.findIndex(player => player.id === action.id);
        const updatedPlayerData= new Player(
          action.id,
          action.playerData.phone,
          state.players[playerID].password,
          action.playerData.name,
          action.playerData.surname,
          action.playerData.email,
          action.playerData.address,
          state.players[playerID].type
        );
        const updatedPlayersData=[...state.players];
        updatedPlayersData[playerID]= updatedPlayerData;
        return{
          ...state,
          players:updatedPlayersData
        };

        case DELETE_PLAYER:
          return{
            ...state,
            players:state.players.filter(player=>player.id != action.id)
          }

       case UPDATE_PLAYER_PASSWORD:
         
        const playerIndex = state.players.findIndex(player => player.id === action.id);
        const updatedPlayer = new Player(
          action.id,
          state.players[playerIndex].phone,
          action.playerData.password,
          state.players[playerIndex].name,
          state.players[playerIndex].surname,
          state.players[playerIndex].email,
          state.players[playerIndex].address,
          state.players[playerIndex].type
        );   

        const updatedPlayers=[...state.players];
        updatedPlayers[playerIndex]=updatedPlayer;
        return{
          ...state,
          players:updatedPlayers
        };

       default: 
        return state;
   }



};

export default playersReducer;