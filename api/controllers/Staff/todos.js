//
// ─── STAFF TODOS ────────────────────────────────────────────────────────────────
//

    
module.exports = {
    friendlyName: 'Todos',
    description: 'Todos staff.',
    inputs: {
  
    },
    exits: {
  
    },
    fn: async function (inputs, exits) {
      return exits.success(await Staff.find());
    }

};

