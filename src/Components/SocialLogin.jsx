import { FcGoogle } from "react-icons/fc"; // Import Google icon from React Icons
import useAuth from "../hooks/useAuth";
import usepublicHook from "../hooks/usepublicHook";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
    const { signInWithGoogle } =useAuth()
    const publicHook = usepublicHook()

    const navigate = useNavigate()
    const handleSignIn = () => {
        signInWithGoogle()
        .then(res => {
            console.log(res);
            const userInfo ={
                email : res.user?.email,
                name: res.user?.displayName

            }
            publicHook.post('/users', userInfo)

        })
        navigate('/')

    }
  return (
    <div className="mt-4">
      {/* Google Login Button */}
      <button onClick={handleSignIn}
        className="w-full flex items-center justify-center bg-white border border-gray-300 text-gray-700 py-2 rounded-full shadow-md hover:bg-gray-100 transition duration-300"
      >
        <FcGoogle className="w-6 h-6 mr-2" /> {/* React Icon for Google */}
        Sign Up with Google
      </button>
    </div>
  );
};

export default SocialLogin;
