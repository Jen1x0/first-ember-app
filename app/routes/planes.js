import Ember from 'ember';

export default Ember.Route.extend({
  model: function () {
    return {
      callsign: 'Roger',
      passengers: [
        {
          name:'Bob',
          gender: 'male'
        },
        {
          name:'Steve',
          gender:'female'
        }
      ],
      aircraft: {
        name: 'boeing',
        maxSpeed: 600
      }
    };
  }
});
