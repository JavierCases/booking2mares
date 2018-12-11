'use strict';

module.exports = function(app) {
  if (process.env.AUTOMIGRATE) {
    app.dataSources.mysqlDS.automigrate(null, function(er) {
      if (er) throw er;
      app.models.Usuario.create([{
      nombre: 'Franciaso Javier',
      apellidos: 'Cases Lázaroooo',
      email:'javier@gmail.com',
      password:'alumno'
    },
    {
      nombre: 'prueba',
      apellidos: 'prueba',
      email:'prueba@gmail.com',
      password:'alumno'
    }], function(err, Usuario) {
      if (err) throw err;
      console.log('Modelos creados con esta informacion: \n', Usuario);
    });
      console.log('Loopback tables created in ', app.dataSources.mysqlDS.adapter.name);
      app.loadFixtures()
        .then(function() {
          console.log('Done!');
        })
        .catch(function(err) {
          console.log('Errors:', err);
        });
    });
  }
};
