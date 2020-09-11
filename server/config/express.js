const express = require('express');
const path = require('path');
const config = require('../config/config');
const bodyParser = require('body-parser');
const logger = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
const routes = require('../routes');
const passport = require('../middleware/passport');
const HttpError = require('http-errors')

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

// authenticate
app.use(passport.initialize());

app.use('/api/',routes);
//serve index.htm;

app.get("*",(req,res)=>
 res.sendFile(path.join(__dirname,'index.html'))
);

app.use((req,res,next)=>{
    const error = new HttpError(404);
    return next(error);
})
//error handler

app.use((err,req,res,next)=>{
    res.status(err.status || 500).json({
        message: err.message
    });
    next(err);
})

module.exports= app;