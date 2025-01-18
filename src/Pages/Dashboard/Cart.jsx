import useAxios from "../../hooks/useAxios";
import useCart from "../../hooks/useCart";

const Cart = () => {
    const [cart ,refetch] = useCart(); 
    const axiosSecure = useAxios()
    const totalPrice = cart.reduce((total, item) => total + item.price, 0);

    // Handle delete item
    const handleDelete = (id) => {
       axiosSecure.delete(`/carts/${id}`)
       .then(res => {
       if(res.data.deletedCount > 0){
        alert('Are you sure to Delete')
       }
       refetch()
       })
    };

    return (
        <div>
            {/* Cart Summary */}
            <div className="flex justify-evenly my-5">
                <h2 className="text-3xl">Items: {cart.length}</h2>
                <h2 className="text-3xl">Total Price: ${totalPrice.toFixed(2)}</h2>
                <button className="btn btn-primary">Pay</button>
            </div>

            {/* Cart Items Table */}
            <div className="overflow-x-auto">
                <table className="table-auto w-full border-collapse border border-gray-300">
                    <thead className="bg-gray-200">
                        <tr>
                            <th className="border border-gray-300 px-4 py-2">#</th>
                            <th className="border border-gray-300 px-4 py-2">Name</th>
                            <th className="border border-gray-300 px-4 py-2">Image</th>
                            <th className="border border-gray-300 px-4 py-2">Price ($)</th>
                            <th className="border border-gray-300 px-4 py-2">Email</th>
                            <th className="border border-gray-300 px-4 py-2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart.map((item, index) => (
                            <tr key={item._id} className="hover:bg-gray-100">
                                <td className="border border-gray-300 px-4 py-2 text-center">
                                    {index + 1}
                                </td>
                                <td className="border border-gray-300 px-4 py-2">
                                    {item.name}
                                </td>
                                <td className="border border-gray-300 px-4 py-2">
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="w-16 h-16 object-cover mx-auto"
                                    />
                                </td>
                                <td className="border border-gray-300 px-4 py-2 text-center">
                                    {item.price.toFixed(2)}
                                </td>
                                <td className="border border-gray-300 px-4 py-2">
                                    {item.email}
                                </td>
                                <td className="border border-gray-300 px-4 py-2 text-center">
                                    <button
                                        className="btn btn-danger btn-sm"
                                        onClick={() => handleDelete(item._id)}
                                    >
                                        Delete
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

export default Cart;
