const express = require( 'express' )
const app = express()
const path = require( 'path' )
const bodyParser = require( 'body-parser' )
const request=require('request')
app.use( bodyParser.json() )
app.use( bodyParser.urlencoded( { extended: false } ) )
app.use( express.static( path.join( __dirname, 'dist' ) ) )
const api = require( './server/Routes/api' )
app.use( '/', api )











const port=3000
app.listen( port, () => console.log( `Running server on port ${ port }` ) )