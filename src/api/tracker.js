import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';

const instance =  axios.create({
    baseURL: 'https://1c82-152-203-94-205.ngrok-free.app'
});

instance.interceptors.request.use(
    // the config obj has some info about the req we are going to make similar to the axios req above
    async (config) => { //get called automatically every time we make a request
        const token = await AsyncStorage.getItem('token')
        if (token) {
            config.headers.Authorization = `Bearer ${token}`
        }
        return config
    },
    (err) => { // gets called automatically every time we encounter an error making the request
        return Promise.reject(err) //take the err obj we get when the req fails and we are going to return a Promise that is by default rejected and we rejected it with taht err
    }
)

export default instance;