module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
     default: {
       connector: 'mongoose',
       settings: {
         host: env('DATABASE_HOST', 'db-postgresql-nyc3-57037-do-user-15972844-0.c.db.ondigitalocean.com'),
         port: env.int('DATABASE_PORT', 25060),
         database: env('DATABASE_NAME', 'defaultdb'),
         username: env('DATABASE_USERNAME', 'doadmin'),
         password: env('DATABASE_PASSWORD', 'AVNS_JXmo4yxFdkYcfq9SUgT'),
       },
       options: {
         authenticationDatabase: env('AUTHENTICATION_DATABASE', null),
         ssl: env.bool('DATABASE_SSL', true),
       },
     },
  },
 });
 