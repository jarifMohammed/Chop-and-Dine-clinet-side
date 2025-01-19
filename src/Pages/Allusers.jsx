import { useQuery } from "@tanstack/react-query";
import useAxios from "../hooks/useAxios";
import { FaUserEdit, FaTrash } from 'react-icons/fa'; // Importing icons

const Allusers = () => {
    const axios = useAxios();
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axios.get('/users');
            return res.data;
        }
    });

    const handleRole = (user) => {
        axios.patch(`/users/admin/${user._id}`)  // Updating user role to 'admin'
        .then(res => {
            console.log(res);
            refetch(); // Refetch the users list after role change
        }).catch(error => {
            console.error("Error updating role:", error);
        });
    };

    const handleDelete = (user) => {
        const confirmDelete = window.confirm('Are you sure you want to delete this user?');
        if (confirmDelete) {
            axios.delete(`/users/${user._id}`)  // Deleting the user
            .then(res => {
                if (res.data.deletedCount > 0) {
                    alert('User deleted successfully');
                    refetch(); // Refetch the users list after deletion
                }
            }).catch(error => {
                console.error("Error deleting user:", error);
            });
        }
    };

    return (
        <div>
            <h2>Users List</h2>
            <table className="min-w-full border-collapse border border-gray-200">
                <thead>
                    <tr>
                        <th className="border px-4 py-2">ID</th>
                        <th className="border px-4 py-2">Name</th>
                        <th className="border px-4 py-2">Email</th>
                        <th className="border px-4 py-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.length === 0 ? (
                        <tr>
                            <td colSpan="4" className="text-center py-4">No users found</td>
                        </tr>
                    ) : (
                        users.map((user, index) => (
                            <tr key={user._id}>
                                <td className="border px-4 py-2">{index + 1}</td>
                                <td className="border px-4 py-2">{user.name}</td>
                                <td className="border px-4 py-2">{user.email}</td>
                                <td className="border gap-6 px-4 py-2 flex space-x-2">
                                    {user.role === 'admin' ? (
                                        <span className="text-green-500">Admin</span>
                                    ) : (
                                        <button 
                                            className="text-orange-500 hover:text-yellow-700"
                                            onClick={() => handleRole(user)}
                                        >
                                            <FaUserEdit />
                                        </button>
                                    )}
                                    <button 
                                        className="text-red-500 hover:text-red-700"
                                        onClick={() => handleDelete(user)}
                                    >
                                        <FaTrash />
                                    </button>
                                </td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default Allusers;
