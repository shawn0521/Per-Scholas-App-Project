const mongoose = require('mongoose')

mongoose.connect(process.env.DATABASE_URL)

const db = mongoose.connection;

// db.on('connected', function () {
//     console.log(`Connected to ${db.name} at ${db.host}:${db.port}`);
// })
const config = {
    mongoConnectionURL: "mongodb://cyruslk:<MY_PASS_HERE>@franklinford-shard-00-00-3dveb.mongodb.net:27017,franklinford-shard-00-01-3dveb.mongodb.net:27017,franklinford-shard-00-02-3dveb.mongodb.net:27017/test?ssl=true&replicaSet=FranklinFord-shard-0&authSource=admin&retryWrites=true&w=majority",
    mongoDatabaseName: "FranklinFord",
  }