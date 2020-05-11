export const AUTHENTICATE = "AUTHENTICATE";
export const LOGOUT ="LOGOUT";


export const authenticate = (token,userID,expiryTime)=>{

    return{
        type:AUTHENTICATE,
        token:token,
        userID:userID
    };

};

export const logout=()=>{
    return{
        type:LOGOUT
    };
};

