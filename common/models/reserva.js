'use strict';

module.exports = function(Reserva) {
/**
 * muestra habitaciones ocupadas en el dia de hoy en el que se hace la  peticion
 * @param {Function(Error, array)} callback
 */

Reserva.hoy = function(callback) {
  //var ocupadas = "hola";
  // TODO
var hoy = Date.now();
   var habitacion = Reserva.app.models.Habitacion;
  	Reserva.find({where:{desde:hoy}, 
  		include:{relation:habitacion}}, function(err, ocupadas){
  		console.log();
  		callback(null, ocupadas);
  	});
  
};


	Reserva.beforeRemote('create', function(context, user, next) {
    //context.args.data.fecha = Date.now();
    context.args.data.usuarioId = context.req.accessToken.userId;
    if(context.args.data.desde>context.args.data.hasta){
    	 //next(new Error('Error de desde y hasta, las fechas estan mal'));
    	console.info("esto es un ERROOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOR de desde y hasta");
    	console.log('error de desde y hasta');
    	//context.error.details.info = 'intercepted by a hook';
    }
    next();
  });

};
