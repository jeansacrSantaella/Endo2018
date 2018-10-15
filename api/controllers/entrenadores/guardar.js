/**
 * GuardarController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

  
module.exports = {
    friendlyName: 'Guardar',
    description: 'Guardar entrenador.',
    inputs: {
      alumno:{
        type: 'json',
        required: true
      }
    },
    exits: {
  
    },
    fn: async function (inputs, exits) {
      var alumno;
      //nuevo
      if(!inputs.alumno.id){
        inputs.alumno.usuario = this.req.session.usuario.id;
        alumno = await Alumnos.create(inputs.alumno);
      }else{
        //existente
        alumno = await Alumnos.update({id:inputs.alumno.id},inputs.alumno);
      }
      sails.log('Resultado de guardar:', alumno);
      return exits.success(alumno);
    }
  };
  