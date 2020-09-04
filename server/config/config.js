require('dotenv').config();
const envvars = process.env;
module.exports={
    port:envvars.PORT,
    env:envvars.NODE_ENV
}