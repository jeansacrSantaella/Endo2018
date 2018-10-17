

module.exports = {
    friendlyName:'Todos auxiliares',
    description: 'Todos los diferentes a entrenador por tec.',
    inputs:{
        tecProcedencia:{
            type:'string',
            required:true
          }
    },
    exits:{

    },
    fn: async function (inputs,exits){
        var aux;
        
        aux=await Auxiliares.find({tecOrigen:inputs.tecProcedencia} && {activo:false});
            sails.log('trata de recuperar por tec',aux);
        return exits.success(await Auxiliares.find({tecOrigen:inputs.tecProcedencia} && {activo:false}));
    }
};

