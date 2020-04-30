import {AUTHENTICATE} from '../actions/authActions';

const initialState={
    token:null,
    userID:null
};

const authReducer =(state=initialState,action) =>{
  
    switch(action.type){
        case AUTHENTICATE:
            return{
                token:action.token,
                userID:action.userID
            };

         default :
          return state;

    }

};

export default authReducer;