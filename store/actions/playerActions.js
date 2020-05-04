export const CREATE_PLAYER = "CREATE_PLAYER";
export const SET_PLAYERS= "SET_PLAYERS";
export const UPDATE_PLAYER_PASSWORD ="UPDATE_PLAYER_PASSWORD";

export const createPlayer=(id,phone,password,name,surname)=>{
  
    return async dispatch =>{

        const playerData={id:id,phone:phone,password:password,name:name,surname:surname};

        try{
            const response= await fetch('http://192.168.1.36:3000/player/addPlayer',{
                method : "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body : JSON.stringify(playerData)
            });
            if(!response.ok){
                throw new Error('Oups! Une erreur est survenue.');
            }
           

            dispatch({type:CREATE_PLAYER,playerData});
            

        }catch(err){
            console.log(err);
        } 

    }
      

};

export const setPlayers= ()=>{

    return async dispatch =>{

      try{
           const response= await fetch('http://192.168.1.36:3000/player');
           if(!response.ok){
            throw new Error('Oups! Une erreur est survenue.');
            }

           const resData= await response.json();
           
           dispatch({type:SET_PLAYERS,allPlayers:resData});
           
      }catch(err){
          console.log(err);
      }

    };



};

export const updatePlayerPassword= (id,password) => {

    return async dispatch => {

         try{
           const response = await fetch(`http://192.168.1.36:3000/player/updatePassword/${id}`,{
              method:'PATCH',
              headers: {
                'Content-Type': 'application/json'
            },
            body : JSON.stringify({password})
           });
           if(!response.ok){
               throw new Error('Oups! Une erreur est survenue in ur fetch.');
           }
           
           dispatch({type:UPDATE_PLAYER_PASSWORD,id,playerData:{password}});
           
         }catch(err){
             console.log(err);
         }
    };

};