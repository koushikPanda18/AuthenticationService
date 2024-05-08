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
    async deleteUser(userid){
        try{
            const user=await User.destroy({
                where:{
                    id:userid
                }
            });
            return user;
        }
        catch(err){
            console.log('Something happened in repository layer of user');
            throw{err};
        }
    }
    async getUser(userid){
        try{
            const user=await User.findByPk(userid);
            //console.log(user)
            return user;
        }
        catch(err){
            console.log('Something happened in repository layer of user');
            throw{err};
        }
    }
}

module.exports=userRepository;