const mongoose = require('mongoose');
const util = require('util');
const debug = require('debug')('express-mongoose-es6-rest-api:index');
const config = require('../config/config');
const { error } = require('console');
const mongouri = config.mongo.uri;

mongoose.connect(mongouri,{keepAlive:1, useNewUrlParser:true});

const db = mongoose.connection;

db.once('open',()=>{
    console.log(`connected to databse ${mongouri}`);
});
db.on('error',()=>{
    throw new Error(`unble to connect ${mongouri}`)
})
if(config.mongo.isdebug){
    mongoose.set('debug',(collectionName,method,query,doc)=>{
        debug(`${collectionName}.${method}`,util.inspect(query,false,20),doc);
    });
}

module.exports =db;
