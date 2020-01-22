/**
 * GESTION DES DEPENDENCE
 */
const express = require('express');
const path = require("path");


/**
 * CONFIGURATION DE EXPRESS ET EJS
 */
const app = express()
app.set('views',path.join(__dirname,'views'));
app.use('/ressources', express.static(__dirname + '/ressources'))
app.set('view engine', 'ejs');


/**
 * INCLUSION DES CONTROLLERS
 */
const controller = require("./controller/lanceurCtrl");

/**
 * ROUTAGE
 */

//  RECUPERATION DE LA HOMEPAGE
app.get('/', controller.index);


/**
 * LANCEMENT DU SERVEUR
 */
app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
});