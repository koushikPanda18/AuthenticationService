
const dotenv=require('dotenv');
dotenv.config();
const bcrypt=require('bcrypt');
module.exports={
    PORT:process.env.PORT,
    SALT:bcrypt.genSaltSync(5),
    //SALT is a random data thai is mixed with the password for encryption
    JWT_KEY:process.env.JWT_KEY
}