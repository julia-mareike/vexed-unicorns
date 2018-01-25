
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, name: 'Adam Kuhn'},
        {id: 2, name: 'Belma Gaukrodger'},
        {id: 3, name: 'Catherine Fromont'},
        {id: 4, name: 'Don Smith'},
        {id: 5, name: 'Elyse Wyatt'},
        {id: 6, name: 'Emily Parkes'},
        {id: 7, name: 'Ethan Smith'},
        {id: 8, name: 'Judy Ting'},
        {id: 9, name: 'Julia Niall'},
        {id: 10, name: 'Madeleine Brighouse'},
        {id: 11, name: 'Naeri Fernandez'},
        {id: 12, name: 'Peter Sim'},
        {id: 13, name: 'Kimmi Rindel'},
        {id: 14, name: 'Steve Liu'},
        {id: 15, name: 'Stina Muller'},
        {id: 16, name: 'Tian du Toit'},
        {id: 17, name: 'Timothy Tolley'},
        {id: 18, name: 'Tyler Griffin'}
      ])
    })
}
