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
async function getUserByEmailIdAndPassword(email,password){
    let user = await User.findOne({email});

    if(isUserValid(user,password,user.hashedPassword )){

        user = user.toObject();
        delete user.hashedPassword;
        return user;
    }else{
        return null;
    }
}

function isUserValid(user,password,hashedPassword){
    return user && bcrypt.compareSync(password,hashedPassword);
}
module.exports={
    insert,
    getUserByEmailIdAndPassword,
    isUserValid
}