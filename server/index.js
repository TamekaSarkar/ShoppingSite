const express = require('express')
const port = process.env.PORT || 4250;
const path = require('path')
const app = express();



const destinationdir = path.join(__dirname,'../dist/shopping-site')
app.use(express.static(destinationdir));
console.log(`hosting from ${destinationdir}`);
app.get('*',(req,res)=>{
    res.sendFile(path.join(destinationdir,'index.html'));
})
console.log(`hosting from ${destinationdir}`);

app.listen(port,()=>{
    console.log(`server is running ${port}`);
})