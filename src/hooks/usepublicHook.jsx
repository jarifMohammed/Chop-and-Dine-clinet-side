import axios from "axios";

const axiosPublic =axios.create({
    baseURL: 'http://localhost:5000'
})
const usepublicHook = () => {
    return axiosPublic
    
    
};

export default usepublicHook;