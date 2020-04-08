
import axios from 'axios';

const API_BASE_URL = 'https://json-server-user-details.herokuapp.com/';


class UserService {

    fetchUserDetails(){
        return axios.get(API_BASE_URL + 'members');
    }

 
    
}

export default  new UserService();