import easy from '../helpers/AxiosHelper';

 const UserService = ()=> {

    const createUser = (user)=> {
        return easy.post("signUp",user);
    }

    const createSession =(user)=> {
        return easy.post("signIn",{data:user});
    }
    return Object.freeze ({
        createUser,
        createSession
    });
 }

 export default UserService;