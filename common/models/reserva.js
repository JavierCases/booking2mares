'use strict';

module.exports = function(Reserva) {

	Reserva.beforeRemote('create', function(context, user, next) {
    //context.args.data.fecha = Date.now();
    context.args.data.usuarioId = context.req.accessToken.userId;
    if(context.args.data.desde>context.args.data.hasta){
    	console.info("esto es un ERROOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOR");
    }
    next();
  });

};
