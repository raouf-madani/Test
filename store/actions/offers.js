export const SET_OFFERS = "SET_OFFERS";


export const fetchOffers = ()=>{

return async dispatch =>{
    try {
    
    const arr = await fetch('http://192.168.1.12:3000/owner');
    
    let offers2 = [];
        const resData = await arr.json ();
     
        let services = [];
        resData.map(
          item =>{ 
            if(services.indexOf(item.service_id) <0) 
            services.push(item.service_id)
          });
        
        
        services.forEach(service => {
   
          let newData = resData.filter(item => item.service_id === service);
          let offer  = {
            id:service,
            horraires : {},
            stadiumsType : newData[0].type_match,
            matchTimeType :  newData[0].time_match,
            price :newData[0].tarif
          }
       
          newData.map(item=>{
        
            offer.horraires[item.date] =[  item.start.substring(0,5),item.end.substring(0,5) ];
              
        

          })
      
          offers2.push(offer);
        });
        
        dispatch({type : SET_OFFERS , offers : offers2});
    } catch (error) {
      console.log("There is an Error");
      }
    
  

};

}