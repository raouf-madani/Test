import { ADD_BOOKING , SET_PLAYER_BOOKINGS, SET_OWNER_BOOKINGS} from "../actions/bookings";


const initialState = {
    playerBookings :[],
    ownerBookings : []
};


const bookingReducer=(state=initialState,action)=>{
   
switch(action.type){

    case ADD_BOOKING : 

    let bookings = [];
    bookings.push(action.booking);

    return{ ...state , playerBookings :[...state.confirmedBookings , ...bookings]} ;

     case SET_PLAYER_BOOKINGS : 
     return {...state , playerBookings : action.bookings};


     case SET_OWNER_BOOKINGS : 
     return {...state ,ownerBookings : action.bookings};
    default : 
   
    return state;

}

};

export default bookingReducer;