export const CREATE_OWNER = "CREATE_OWNER";
export const SET_OWNERS= "SET_OWNERS";
export const UPDATE_OWNER_PASSWORD ="UPDATE_OWNER_PASSWORD";

export const createOwner=(id,phone,password,fullname)=>{
  
    return async dispatch =>{
        const ownerData={id:id,phone:phone,password:password,fullname:fullname};

        try{
            const response= await fetch('http://192.168.1.36:3000/owner/addOwner',{
                method : "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body : JSON.stringify(ownerData)
            } 
            );
            if(!response.ok){
                throw new Error('Oups! Une erreur est survenue haha.');
            }

            dispatch({type:CREATE_OWNER,ownerData});

        }catch(err){
            console.log(err);
        } 

    }
      

};

export const setOwners= ()=>{

    return async dispatch =>{

      try{
           const response= await fetch('http://192.168.1.36:3000/owner');
           if(!response.ok){
            throw new Error('Oups! Une erreur est survenue.');
            }

           const resData= await response.json();
           
           dispatch({type:SET_OWNERS,allOwners:resData});
           
      }catch(err){
          console.log(err);
      }

    };

};

export const updateOwnerPassword= (id,password) => {

    return async dispatch => {

         try{
           const response = await fetch(`http://192.168.1.36:3000/owner/updatePassword/${id}`,{
              method:'PATCH',
              headers: {
                'Content-Type': 'application/json'
            },
            body : JSON.stringify({password})
           });
           if(!response.ok){
               throw new Error('Oups! Une erreur est survenue in ur fetch.');
           }
           console.log('actionDebut');
           dispatch({type:UPDATE_OWNER_PASSWORD,id,ownerData:{password}});
           console.log('actionFinish');
         }catch(err){
             console.log(err);
         }
    };

};