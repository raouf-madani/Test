export const SET_OWNER_SERVICES = 'SET_OWNER_SERVICES';

export const setOwnerServices= owner_id=>{

    return async dispatch =>{

      try{
           const response= await fetch(`http://192.168.1.34:3000/ownerservices/${owner_id}`);
           if(!response.ok){
            throw new Error('Oups! Une erreur est survenue.');
            }
            console.log('hey');
           
           const resData= await response.json();
           console.log('begin');
           dispatch({type:SET_OWNER_SERVICES,ownerServicesData:resData});
           console.log('finish');
      }catch(err){
          console.log(err);
      }

    };

};