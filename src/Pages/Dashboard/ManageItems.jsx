import { Menu } from "@material-tailwind/react";
import SectionTitle from "../../Components/SectionTitle";
import { FaEdit, FaTrash } from "react-icons/fa";
import useMenu from "../../hooks/useMenu";
import useAxios from "../../hooks/useAxios";
import { toast } from 'react-hot-toast'; // Optional: for showing notifications
import { Link } from "react-router-dom";

const ManageItems = () => {
    const axios = useAxios();
    const [menu, refetch] = useMenu();

    const handleDelete = async (item) => {
        try {
            await axios.delete(`/menu/${item._id}`);
            await refetch(); // Make sure to await the refetch
            toast.success('Item deleted successfully'); // Optional: show success message
        } catch (error) {
            console.error('Error deleting item:', error);
            toast.error('Failed to delete item'); // Optional: show error message
        }
    };

    return (
        <div>
            <SectionTitle heading="Manage All Items" subHeading="Hurry Up" />
            
            <div className="overflow-x-auto">
                <table className="min-w-full table-auto">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="px-4 py-2 text-left">Image</th>
                            <th className="px-4 py-2 text-left">Item Name</th>
                            <th className="px-4 py-2 text-left">Price</th>
                            <th className="px-4 py-2 text-left">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {menu.map((item) => (
                            <tr key={item._id} className="border-b hover:bg-gray-50">
                                <td className="px-4 py-2">
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="w-16 h-16 rounded-full object-cover"
                                    />
                                </td>
                                <td className="px-4 py-2">{item.name}</td>
                                <td className="px-4 py-2">${item.price}</td>
                                <td className="px-4 py-2 flex space-x-4">
                                    <Link to={`/dashboard/updateItem/${item._id}`}>
                                        <button
                                            className="text-blue-500 hover:text-blue-700"
                                            // onClick={() => handleUpdate(item)}
                                        >
                                            <FaEdit size={20} />
                                        </button>
                                    </Link>
                                    
                                    <button
                                        className="text-red-500 hover:text-red-700"
                                        onClick={() => handleDelete(item)}
                                    >
                                        <FaTrash size={20} />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageItems;
