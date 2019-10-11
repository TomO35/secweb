const bddHelper = require('../javascripts/bddHelper');

const validator = require('express-validator');

exports.personne_create_post =  [
   
    // Validate that fields are not empty.
    validator.body('user_name', 'Un nom est requis').trim().isLength({ min: 1 }),
    validator.body('user_firstname', 'Un prénom est requis').trim().isLength({ min: 1 }),
    validator.body('user_birthdate', 'Une date de naissance est requise').trim().isLength({ min: 1 }),
    validator.body('user_mail', 'Un e-mail est requis').trim().isLength({ min: 1 }),
    validator.body('user_tel', 'Un numéro de téléphone est requis').trim().isLength({ min: 1 }),
    validator.body('user_adresse', 'Une adresse est requise').trim().isLength({ min: 1 }),
    validator.body('user_cp', 'Un code postal est requis').trim().isLength({ min: 1 }),
    validator.body('user_city', 'Une ville est requise').trim().isLength({ min: 1 }),
    
    // Sanitize (escape) the name field.
    validator.sanitizeBody('user_name').escape(),
    validator.sanitizeBody('user_firstname').escape(),
    validator.sanitizeBody('user_birthdate').escape(),
    validator.sanitizeBody('user_mail').escape(),
    validator.sanitizeBody('user_tel').escape(),
    validator.sanitizeBody('user_adresse').escape(),
    validator.sanitizeBody('user_cp').escape(),
    validator.sanitizeBody('user_city').escape(),
  
    // Process request after validation and sanitization.
    (req, res, next) => {
  
      // Extract the validation errors from a request.
      const errors = validator.validationResult(req);
      // Create a genre object with escaped and trimmed data.
      var personne = {   
          name: req.body.user_name,
          firstname: req.body.user_firstname,
          birthdate: req.body.user_birthdate,
          mail: req.body.user_mail,
          tel: req.body.user_tel,
          adresse: req.body.user_adresse,
          cp: req.body.user_cp,
          city: req.body.user_city
      };
  
  
      if (!errors.isEmpty()) {
        // There are errors. Render the form again with sanitized values/error messages.
        res.render('form', { title: 'Formulaire', personne: personne, errors: errors.array()});
        return;
      }
      else {
        bddHelper.ajouterpersonne(personne);
      }
    }
  ];
  