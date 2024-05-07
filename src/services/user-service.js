const userRepository=require('../repository/user-repository');

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
}

module.exports=userService;