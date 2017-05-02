var express  = require( 'express' ),
    path     = require( 'path' ),
    bp       = require('body-parser'),
    root     = __dirname,
    port     = process.env.PORT || 8192,
    app      = express();

// error two
app.use( express.static( path.join( __dirname, 'client' )));
app.use( express.static( path.join( __dirname, 'bower_components' )));
app.use( express.static( path.join( __dirname, 'node_modules' )));
app.use( bp.json() );
require('./server/config/mongoose.js')
require("./server/config/routes.js")(app);
var server = app.listen( port, function() {
  console.log( `server running on port ${ port }` );
});
require('./sockets.js')(server);
