const { Pool } = require('pg')

const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: 'root',
    dababase: 'name of database',
    allowExitOnIdle: true

})

module.exports = {pool}