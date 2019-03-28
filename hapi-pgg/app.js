'use strict';
import db from '/home/vvdn/Desktop/hapi-pgg/core/db';
import server from '/home/vvdn/Desktop/hapi-pgg/routes/route';
var rts=require('./routes/route')
var routes=rts.routes
const Vision = require('vision');
const Handlebars = require('handlebars');
// const rootHandler = (request, h) => {

//     return h.view('index', {
//        // title: 'examples/handlebars/templates/basic | Hapi ' + request.server.version,
//         message: request.params.message
//     });
// };

const provision = async () => {

    await server.register(Vision);

    server.views({
        engines: { html: Handlebars },
        relativeTo: __dirname,
        path: './static'
    });
    server.route(routes);



const init = async () => {
 
    await db.migrate.latest()
    await server.start();
    console.log(`Server running at: ${server.info.uri}`);
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();

}
provision();