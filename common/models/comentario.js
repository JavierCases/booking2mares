'use strict';

module.exports = function(Comentario) {

Comentario.beforeRemote('create', function(context, user, next) {
    //context.args.data.fecha = Date.now();
    context.args.data.usuarioId = context.req.accessToken.userId;
    if(context.args.data.comentario!== null){
		context.args.data.valoracion = context.args.data.valoracion + 1;
    }
    next();
  });

};
