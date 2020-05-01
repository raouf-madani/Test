export const CREATE_OWNER = "CREATE_OWNER";


export const createOwner=(id,phone,password,fullname)=>{
  
    return async dispatch =>{

        try{
            const response= await fetch(`http://192.168.1.37:3000/owner/${id}/${phone}/${password}/${fullname}`);
            if(!response.ok){
                throw new Error('Oups! Une erreur est survenue.');
            }

            dispatch({type:CREATE_OWNER,id,phone,password,fullname,email:null,address:null,type:'owner'});

        }catch(err){
            console.log(err);
        } 

    }
      

};