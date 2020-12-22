module.exports = { 
  type: 'postgres',
  host: 'localhost',
  port: '15432',
  username: 'postgres',
  password: 'pass123',
  database: 'iluvcoffee',
  entities: ['dist/**/*.entity.js'],
  migrations: ['dist/migrations/*.js'],
  cli: {
    migrationsDir: 'src/migrations',
  }
}