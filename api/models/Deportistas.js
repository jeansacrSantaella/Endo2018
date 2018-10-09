/**
 * Deportista.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    curp:{
      type:'string',
      required:true
    },
    nss:{
      type:'string',
      required:true
   },
    numeroControl:{
      type:'string',
      required:true
    },
    nombre:{
      type:'string',
      required:true
    },
    alergias:{
      type:'string',
      required:false
    },
    numeroEmergencia:{
      type:'string',
      required:true
    },
    tecProcedencia:{
      type:'string',
      required:true
    },
    genero:{
      type:'string',
      required:true
    },
    disciplina:{
      type:'string',
      required:true
    },
    foto:{
      type:'boolean',
      defaultsTo:false
    },
    direccionFoto:{
      type:'json',
      required:false
    },
    activo:{
      type:'boolean',
      required:false,
      defaultsTo:true
    },



    //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
    //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
    //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝


    //  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗
    //  ║╣ ║║║╠╩╗║╣  ║║╚═╗
    //  ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝


    //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
    //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
    //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝

  },

};

