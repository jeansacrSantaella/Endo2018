/*deportista*/
module.exports = {
    friendlyName:'Guardar',
    description: 'Guardar deportistas.',
    inputs:{
        deportista:{
          type:'json',
          required:true
        }
    },
    exits:{
    },
    fn:async function(inputs,exits){
        var deportista;
        //Nuevo deportista
        if(!inputs.deportista.id){
            deportista=await Deportista.create(inputs.deportista);
        }else{
        //existente
            deportista= await Deportista.update({id:inputs.deportista.id},inputs.deportista);
        }
        sails.log('Resultado Deportista',deportista);
        return exits.success(deportista);
    }  

};

