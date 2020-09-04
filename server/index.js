const app = require('./config/express');
const config = require('./config/config');

//listen to port
app.listen(config.port,()=>{
    console.log(`server started on ${config.port} (${config.env})`);
})