const express = require('express');
const path = require('path');
const config = require('../config/config');
const bodyParser = require('body-parser');
const logger = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
const routes = require('../routes');

//ini app

const app = express();
//logger
if(config.env==='development'){
    app.use(logger('dev'));
}

const distDir = path.join(__dirname ,'../../dist');
app.use(express.static(distDir));

//parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))
//secure app
app.use(helmet());
//allow cors
app.use(cors());

app.use('/api/',routes);
//serve index.htm;

app.get("*",(req,res)=>
 res.sendFile(path.join(__dirname,'index.html'))
);

module.exports= app;