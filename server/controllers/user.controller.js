//it will save the user to mongodb
users = [];

async function insert(user){
    //make a mongoose db call to save the data to user

     users.push(user);
    return user;
}
module.exports={
    insert
}