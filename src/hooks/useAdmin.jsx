import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxios from "./useAxios";


const useAdmin = () => {
   const {user} = useAuth()
   const axios = useAxios()
   const { data: isAdmin} = useQuery({
    queryKey: [user?.email, 'isAdmin'],
    queryFn: async () => {
        const res = await axios.get(`/users/admin/${user.email}`)
        console.log(res.data);
        return res.data?.admin
    }
   })
   return [isAdmin]
};

export default useAdmin;