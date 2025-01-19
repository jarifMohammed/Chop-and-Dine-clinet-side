import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import useAuth from './useAuth';
 const axiosUrl = axios.create({
    baseURL : 'http://localhost:5000'
})

const useAxios = () => {
   const navigate = useNavigate()
   const {logOut} = useAuth()
   axiosUrl.interceptors.request.use(function(config){
      const token = localStorage.getItem('access-token')
      // console.log(token);
      config.headers.Authorization =`Bearer ${token}`
      return config
   },function (error) {
      return Promise.reject(error)
   })

   // interceptor 401 and 403 statrus
   axiosUrl.interceptors.response.use(function(response){
      return response
   }, async (error) => {
      const status = error.response.status 
      // console.log(status);
      if(status === 401 || status === 403) {
         await logOut()
         navigate('/login')
      }
      return Promise.reject(error)
   })
   return axiosUrl
};

export default useAxios;