import { ADD_BOOKING } from "../actions/bookings";


const initialState = {
    confirmedBookings :[],
    expiredBookings : [],
    canceledBookings :[]
};


const bookingReducer=(state=initialState,action)=>{
   
switch(action.type){

    case ADD_BOOKING : 
{
    let bookings = [];
    bookings.push(action.booking);

    return{ ...state , confirmedBookings :[...state.confirmedBookings , ...bookings]} ;
}
    default : 
   
    return state;

}

};

export default bookingReducer;