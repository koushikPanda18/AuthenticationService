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
}

module.exports=userService;