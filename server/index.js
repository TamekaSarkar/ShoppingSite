const app = require('./config/express');
const config = require('./config/config');
//initializa mongo

require('./config/mongoose');
//listen to port
app.listen(config.port,()=>{
    console.log(`server started on ${config.port} (${config.env})`);
})