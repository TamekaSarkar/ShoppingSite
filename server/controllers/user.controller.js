//it will save the user to mongodb
const bcrypt = require('bcrypt');
const User = require('../model/user.model')

async function insert(user){
    //make a mongoose db call to save the data to user
    user.hashedPassword = bcrypt.hashSync(user.password,10);
    delete user.password;

    console.log(`saving to database`,user);
    return await new User(user).save();
    
}
module.exports={
    insert
}