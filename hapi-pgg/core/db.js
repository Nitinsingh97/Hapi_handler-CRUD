import knex from 'knex'
import config from '../config'
var db=knex(config.database)
export default db;