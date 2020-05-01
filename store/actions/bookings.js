import { SET_OFFERS } from "./offers";

export const ADD_BOOKING = "ADD_BOOKING";
export const SET_BOOKINGS = "SET_BOOKINGS";

export const addBooking = (booking) => {

  
    return async dispatch => {
        const response =  await fetch('http://192.168.1.3:3000/bookings/addbooking',
        {
         method : "POST",
         headers: {
            'Content-Type': 'application/json'
          },
        body : JSON.stringify(booking)
        }
        
        );

     
    const resData = await response.json;



        dispatch( {type : ADD_BOOKING , booking : booking});
    };


};

export const fetchBookings = (playerID)=>{

    return async (dispatch) =>{
        try {
            
        const arr = await fetch('http://192.168.1.6:3000/bookings/getbookings/+213557115451');
        const resData = await arr.json ();
        console.log(resData);
   
   dispatch({type:SET_BOOKINGS,bookings:[]})
    } catch (error) {
            
    
    }
   

}


}