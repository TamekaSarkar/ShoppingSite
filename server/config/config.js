require('dotenv').config();
const envvars = process.env;
module.exports={
    port:envvars.PORT,
    env:envvars.NODE_ENV,
    mongo:{
        uri:envvars.MONGODB_URI,
        port: envvars.MONGO_PORT,
        isdebug: envvars.MONGOOSE_DEBUG
    },
    jwtSecret : envvars.JWT_SECRET
  };