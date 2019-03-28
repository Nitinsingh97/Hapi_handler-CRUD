const config={
    database :{
    client: 'pg',
    connection: {
      host : 'localhost',
      port : 5432,
      user : 'postgres',
      password : 'postgres',
      database : 'mytodo'
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: '/home/vvdn/Desktop/hapi-pgg/core/migrations'
    },
    seeds: {
      directory: '/home/vvdn/Desktop/hapi-pgg/core/seeds'
    }


},
 Hapi:{
  
        port: 8888,
        host: '127.0.0.1'
     
 }
}
export default config;