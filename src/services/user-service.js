const userRepository=require('../repository/user-repository');

const jwt=require('jsonwebtoken');
const {JWT_KEY}=require('../config/server-config');
const bcrypt=require('bcrypt');

const userrepository=new userRepository();
class userService{
    async createUser(data){
        try{
            const user=await userrepository.createUser(data);
            return user;
        }
        catch(err){
            console.log('Something happened in Service layer of user');
            throw{err};
        }
    }
    async deleteUser(data){
        try{
            const user=await userrepository.deleteUser(data);
            return user;
        }
        catch(err){
            console.log('Something happened in Service layer of user');
            throw{err};
        }
    }
    async getUser(data){
        try{
            if(!data){
                throw('Required information for fetching data is missing')
            }
            const user=await userrepository.getUser(data);
            if(!user){
                throw('No user found');
            }
            return user;
        }
        catch(err){
            console.log('Something happened in Service layer of user');
            throw{err};
        }
    }

    createToken(user){
        try{
            //Syntax---jwt.sign( {object} , private_key , {expiry_time})
            const tooken=jwt.sign(user,JWT_KEY,{expiresIn:'1h'});
            return tooken;
        }
        catch(err){
            console.log('Something went wrong in token creation');
            throw err;
        }
    }

    verifyToken(token){
        try{
            const response=jwt.verify(token,JWT_KEY);
            return response;
        }
        catch(err){
            console.log('something went wrong in token verification');
            throw err;
        }
    }

    async signIn(email,plainPassword){
        //Step-1---get the user by email
        const user=await userrepository.getUserByEmail(email);
        //Step-2---verify password
        const matchPassword=this.checkPassword(plainPassword,user.password);
        if(!matchPassword){
            console.log('Password do not match');
            throw{err:'Incorrect Password'};
        }
        //Step-3---Create token
        return this.createToken({email:user.email,id:user.id});

    }


    checkPassword(userInputPlainPassword,encryptedPassword){
        try{
            const response=bcrypt.compareSync(userInputPlainPassword,encryptedPassword);
            return response;
        }
        catch(err){
            console.log('something went wrong in password checking');
            throw err;
        }
    }

}

module.exports=userService;