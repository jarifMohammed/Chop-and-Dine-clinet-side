import { useQuery } from "@tanstack/react-query";
import usepublicHook from "./usepublicHook";

const useMenu = () => {
  const axiosPublic = usepublicHook();

  const { data: menu = [], isLoading, refetch } = useQuery({
    queryKey: ['menu'],
    queryFn: async () => {
      const res = await axiosPublic.get('/menu');
      return res.data;
    }
  });

  return [menu, isLoading, refetch]; // Returning the menu data, loading state, and refetch function
};

export default useMenu;
