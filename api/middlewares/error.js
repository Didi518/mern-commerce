const ErrorHandler = require('../utils/errorHandler');

module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.message = err.message || 'Erreur interne au serveur';
  // erreur mongoose object id
  if (err.name === 'CastError') {
    const message = `Ressource introuvable. ${err.path} invalide`;
    err = new ErrorHandler(message, 400);
  }
  // erreur mongoose validation
  if (err.name === 'ValidationError') {
    const message = Object.values(err.errors).map((value) => value.message);
    err = new ErrorHandler(message, 400);
  }
  // erreur clé dupliquée
  if (err.code === 11000) {
    const message = `${Object.keys(err.keyValue)} déjà existant`;
    err = new ErrorHandler(message, 400);
  }
  // erreur jwt token
  if (err.name === 'JsonWebTokenError') {
    const message = 'JSON Web Token invalide. Essaye encore!';
    err = new ErrorHandler(message, 400);
  }
  // erreur token jwt expiré
  if (err.name === 'tokenExpired') {
    const message = 'JSON Web Token expiré. Essaye encore!';
    err = new ErrorHandler(message, 400);
  }
  res.status(err.statusCode).json({
    success: false,
    message: err.message || 'Erreur interne au serveur',
  });
};
