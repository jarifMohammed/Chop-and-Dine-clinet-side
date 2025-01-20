
import { useLoaderData } from "react-router-dom";
import { useForm } from "react-hook-form";
import SectionTitle from "../../Components/SectionTitle";
import usepublicHook from "../../hooks/usepublicHook";
import useAxios from "../../hooks/useAxios";

const image = import.meta.env.VITE_imageBB;
const imageHost = `https://api.imgbb.com/1/upload?key=${image}`;

const UpdateItem = () => {
    const item = useLoaderData();
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({
        defaultValues: {
            foodName: item?.name,
            category: item?.category,
            price: item?.price,
            recipeDetails: item?.recipe
        }
    });
    
    const axios = usepublicHook();
    const axiosSecure = useAxios();

    const onSubmit = async (data) => {
        const priceAsInt = parseInt(data.price, 10);

        try {
            let imageUrl = item.image; // Keep existing image by default

            // Only upload new image if one was selected
            if (data.image[0]) {
                const formData = new FormData();
                formData.append("image", data.image[0]);
                const res = await axios.post(imageHost, formData, {
                    headers: {
                        'content-type': 'multipart/form-data'
                    }
                });

                if (res.data.success) {
                    imageUrl = res.data.data.display_url;
                }
            }

            const menuItem = {
                name: data.foodName,
                category: data.category,
                price: priceAsInt,
                recipe: data.recipeDetails,
                image: imageUrl
            };

            const menuRes = await axiosSecure.patch(`/menu/${item._id}`, menuItem);
            console.log(menuRes.data);

            if (menuRes.data.modifiedCount > 0) {
                // Handle success (e.g., show toast, redirect)
                console.log('Item updated successfully');
            }
        } catch (error) {
            console.error("Error updating item:", error);
        }
    };

    return (
        <div>
            <SectionTitle heading="Update an Item" subHeading="Refresh Info" />
            
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="max-w-2xl mx-auto p-8 border rounded-lg shadow-lg bg-white"
            >
                <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
                    Update Food Item
                </h2>

                {/* Food Name */}
                <div className="mb-6">
                    <label htmlFor="foodName" className="block text-lg font-medium text-gray-700">
                        Food Name
                    </label>
                    <input
                        type="text"
                        id="foodName"
                        {...register("foodName", { required: "Food name is required" })}
                        className="mt-2 block w-full px-4 py-3 text-lg border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Enter the food name"
                    />
                    {errors.foodName && (
                        <p className="text-red-500 text-sm mt-1">{errors.foodName.message}</p>
                    )}
                </div>

                {/* Category */}
                <div className="mb-6">
                    <label htmlFor="category" className="block text-lg font-medium text-gray-700">
                        Category
                    </label>
                    <select
                        id="category"
                        {...register("category", { required: "Category is required" })}
                        className="mt-2 block w-full px-4 py-3 text-lg border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    >
                        <option value="">Select a category</option>
                        <option value="dessert">Dessert</option>
                        <option value="soup">Soup</option>
                        <option value="salad">Salad</option>
                        <option value="drinks">Drinks</option>
                        <option value="pizza">Pizza</option>
                    </select>
                    {errors.category && (
                        <p className="text-red-500 text-sm mt-1">{errors.category.message}</p>
                    )}
                </div>

                {/* Price */}
                <div className="mb-6">
                    <label htmlFor="price" className="block text-lg font-medium text-gray-700">
                        Price
                    </label>
                    <input
                        type="number"
                        step="0.01"
                        id="price"
                        {...register("price", { required: "Price is required" })}
                        className="mt-2 block w-full px-4 py-3 text-lg border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Enter the price (e.g., 12.99)"
                    />
                    {errors.price && (
                        <p className="text-red-500 text-sm mt-1">{errors.price.message}</p>
                    )}
                </div>

                {/* Recipe Details */}
                <div className="mb-6">
                    <label htmlFor="recipeDetails" className="block text-lg font-medium text-gray-700">
                        Recipe Details
                    </label>
                    <textarea
                        id="recipeDetails"
                        {...register("recipeDetails", { required: "Recipe details are required" })}
                        className="mt-2 block w-full px-4 py-3 text-lg border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Enter recipe details"
                        rows="4"
                    ></textarea>
                    {errors.recipeDetails && (
                        <p className="text-red-500 text-sm mt-1">{errors.recipeDetails.message}</p>
                    )}
                </div>

                {/* Image Upload */}
                <div className="mb-6">
                    <label htmlFor="image" className="block text-lg font-medium text-gray-700">
                        Upload New Image (Optional)
                    </label>
                    <input
                        type="file"
                        id="image"
                        {...register("image")}
                        className="mt-2 block w-full px-4 py-3 text-lg border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    />
                    {errors.image && (
                        <p className="text-red-500 text-sm mt-1">{errors.image.message}</p>
                    )}
                </div>

                {/* Update Button */}
                <button
                    type="submit"
                    className="w-full py-3 text-lg font-semibold text-white bg-blue-500 hover:bg-blue-600 rounded-lg shadow-sm"
                >
                    Update Food Item
                </button>
            </form>
        </div>
    );
};

export default UpdateItem;