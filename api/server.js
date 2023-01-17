const app = require('./app');
const connectDatabase = require('./config/database');

let environment = 'developpement';
if (environment === 'production') {
  require('dotenv').config({ path: '.env' });
} else {
  require('dotenv').config({ path: 'config/config.env' });
}
console.log(environment);

process.on('uncaughtException', (err) => {
  console.log(`ERREUR: ${err.stack}`);
  console.log('Fermeture dûe à une exception inconnue');
  process.exit(1);
});

connectDatabase();

const server = app.listen(process.env.PORT, () => {
  console.log(
    `Serveur connecté au port: ${process.env.PORT} en mode: ${process.env.NODE_ENV}`
  );
});

process.on('unhandledRejection', (err) => {
  console.log(`ERREUR: ${err.message}`);
  console.log('Fermture dûe à une promesse rejetée');
  server.close(() => {
    process.exit(1);
  });
});
