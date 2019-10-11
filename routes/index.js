var express = require('express');
var router = express.Router();
var personne_controller = require('../public/controllers/personneController');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('form', { title: 'Formulaire', errors: false });
});

router.post('/', personne_controller.personne_create_post);

module.exports = router;
