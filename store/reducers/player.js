import {CREATE_PLAYER,SET_PLAYERS,UPDATE_PLAYER_PASSWORD,UPDATE_PLAYER,DELETE_PLAYER,SET_PLAYER} from '../actions/playerActions';
import Player from '../../models/player';

const initialState={
    players:[],
    player:[]
};

const playersReducer=(state=initialState,action)=>{
   
   switch(action.type){
       case CREATE_PLAYER:
         const newPlayer= new Player(action.playerData.id,action.playerData.phone,action.playerData.password,
                                     action.playerData.name,action.playerData.surname,null,null,'Player');                      
         return{
           ...state,
           players: state.players.concat(newPlayer)
         };

       case SET_PLAYERS:
         return{
          ...state,
          players:action.allPlayers
         }

      case SET_PLAYER:
      return{
        ...state,
        player:action.playerData
      }  

       case UPDATE_PLAYER:

        const playerindex = state.player.findIndex(player => player.id === action.id);
        const updatedPlayerData= new Player(
          action.id,
          state.player[playerindex].phone,
          state.player[playerindex].password,
          action.playerData.name,
          action.playerData.surname,
          action.playerData.email,
          action.playerData.address,
          state.player[playerindex].type
        );
        const updatedPlayersData=[...state.player];
        updatedPlayersData[playerindex]= updatedPlayerData;
        return{
          ...state,
          player:updatedPlayersData
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