import React from "react";
import { useForm } from "react-hook-form";



const AddItems = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);

    const formData = new FormData();
    formData.append("foodName", data.foodName);
    formData.append("category", data.category);
    formData.append("price", data.price);
    formData.append("recipeDetails", data.recipeDetails);
    formData.append("image", data.image[0]); // First file from the FileList

    for (let pair of formData.entries()) {
      console.log(`${pair[0]}: ${pair[1]}`);
    }

    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-2xl mx-auto p-8 border rounded-lg shadow-lg bg-white"
    >
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
        Add New Food
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
          Upload Image
        </label>
        <input
          type="file"
          id="image"
          {...register("image", { required: "Image is required" })}
          className="mt-2 block w-full px-4 py-3 text-lg border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
        />
        {errors.image && (
          <p className="text-red-500 text-sm mt-1">{errors.image.message}</p>
        )}
      </div>

      {/* Add Food Button */}
      <button
        type="submit"
        className="w-full py-3 text-lg font-semibold text-white bg-blue-500 hover:bg-blue-600 rounded-lg shadow-sm"
      >
        Add Food
      </button>
    </form>
  );
};

export default AddItems;
