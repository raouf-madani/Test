export const CREATE_PLAYER = "CREATE_PLAYER";


export const createPlayer=(id,phone,password,name,surname)=>{
  
    return async dispatch =>{

        try{
            const response= await fetch(`http://192.168.1.37:3000/player/${id}/${phone}/${password}/${name}/${surname}`);
            if(!response.ok){
                throw new Error('Oups! Une erreur est survenue.');
            }
            console.log('sqsqdkmqqsd');
            dispatch({type:CREATE_PLAYER,id,phone,password,name,surname,email:null,address:null,gender:'player'});

        }catch(err){
            console.log(err);
        } 

    }
      

};