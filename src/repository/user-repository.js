const {User}=require('../models/index');

class userRepository{
    async createUser(data){
        try{
            const user=await User.create(data);
            return user;
        }
        catch(err){
            console.log('Something happened in repository layer of user');
            throw{err};
        }
    }
}

module.exports=userRepository;