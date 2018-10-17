/**
 * GuardarhController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    friendlyName:'Guardar',
    description: 'Guardar Habitación .',
    inputs:{
        habitación:{
          type:'json',
          required:true
        }
    },
    exits:{
    },
    fn:async function(inputs,exits){
        var habitacion;
        if(!inputs.habitacion.id){
            Habitacion=await Habitacion.create(inputs.habitacion);
        }else{
            Habitacion=await Habitacion.update({id:inputs.habitacion.id},inputs.habitacion);
        }
        sails.log('Resultado Deportista',habitacion);
        return exits.success(habitacion);
    }  

};

