
exports.seed = function(knex, Promise) {

  return knex.raw('DELETE FROM "contact"; ALTER SEQUENCE contact_id_seq RESTART WITH 6;')

    .then(function() {
      let people = [{
        id: 1,
        first_name: 'Michael',
        last_name: 'Scott',
        email: 'mscott@dundermifflin.com',
        phone: '1234567890'
      }, {
        id: 2,
        first_name: 'Pam',
        last_name: 'Beasly',
        email: 'pbeasly@dundermifflin.com',
        phone: '2345678901'
      }, {
        id: 3,
        first_name: 'Jim',
        last_name: 'Halpert',
        email: 'jhalpert@dundermifflin.com',
        phone: '3456789012'
      }, {
        id: 4,
        first_name: 'Dwight',
        last_name: 'Schrute',
        email: 'dschrute@dundermifflin.com',
        phone: '4567890123'
      }, {
        id: 5,
        first_name: 'Kelly',
        last_name: 'Kapoor',
        email: 'kkapoor@dundermifflin.com',
        phone: '5678901234'
      }]
      return knex('contact').insert(people)
    })
};
