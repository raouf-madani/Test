export const AUTHENTICATE = "AUTHENTICATE";


export const authenticate = (token,userID)=>{

    return{
        type:AUTHENTICATE,
        token:token,
        userID:userID
    };

};