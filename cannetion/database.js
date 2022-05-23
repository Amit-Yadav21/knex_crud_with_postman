const knex = require('knex')({     // require knex here .
    client: 'mysql',  // name of database 
    connection: {
      host: 'localhost',  // where to use 
      user: "root",       // path 
      password: "Amit@123",   // database password 
      database: "knex_crud"   // name of table in database on terminal 
    }
  })
// user_data is a table  name .
knex.schema.createTable('user_data', t => {
    t.increments().primary();   // column name (id) 
    t.string('name')            // column name (name) 
    t.string('email').unique()  // column name (email)
    t.string('password')        // column name (possword)
})
.then(()=>{
  // table created after show massage.
    console.log("table created successfully")
})
.catch(err=>{
    console.log(err.message)
})

module.exports = knex