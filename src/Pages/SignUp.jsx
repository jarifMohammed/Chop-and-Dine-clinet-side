import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../Providers/AuthProvider";
import { useNavigate } from "react-router-dom";
import usepublicHook from "../hooks/usepublicHook";
import SocialLogin from "../Components/SocialLogin";

const SignUp = () => {
  const publicHook = usepublicHook()
  const navigate = useNavigate()
    const {createUser, updateUserProfile} = useContext(AuthContext)
  const { register, handleSubmit,reset, formState: { errors } } = useForm();
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const onSubmit = (data) => {
    // You can handle the signup logic here, e.g., Firebase auth
    createUser(data.email, data.password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);



  
        // Update the user's profile
        updateUserProfile(data.name, data.photoURL)
          .then(() => {
            // create user entry to data base
            const userInfo ={
              name: data.name,
              email: data.email
            }
            publicHook.post('/users' , userInfo) 
            console.log("User profile info updated");
            setSuccess("User signed up successfully!");
            reset(); // Reset the form fields after successful submission
          })
          .catch((error) => {
            console.error("Error updating profile:", error);
          });
      })
      navigate('/')
      .catch((error) => {
        console.error("Error signing up user:", error);
      });
  };
  

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Sign Up</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Full Name Field */}
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-semibold">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              {...register("name", { required: "Full Name is required" })}
              className="w-full px-4 py-2 border rounded-lg mt-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
          </div>
          {/* photoURL */}
          {/* photoURL */}
<div className="mb-4">
  <label htmlFor="photoURL" className="block text-gray-700 font-semibold">
    Photo URL
  </label>
  <input
    type="url"
    id="photoURL"
    {...register("photoURL", { required: "Photo URL is required" })}
    className="w-full px-4 py-2 border rounded-lg mt-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
    placeholder="Enter the URL of your photo"
  />
  {errors.photoURL && <p className="text-red-500 text-sm">{errors.photoURL.message}</p>}
</div>


          {/* Email Field */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-semibold">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              {...register("email", { required: "Email is required" })}
              className="w-full px-4 py-2 border rounded-lg mt-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
          </div>

          {/* Password Field */}
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 font-semibold">
              Password
            </label>
            <input
              type="password"
              id="password"
              {...register("password", { required: "Password is required" })}
              className="w-full px-4 py-2 border rounded-lg mt-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
          </div>

          {/* Success or Error Messages */}
          {success && <p className="text-green-500 text-sm mb-4">{success}</p>}
          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Sign Up
          </button>
          <SocialLogin></SocialLogin>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
