
import { Button } from '@material-tailwind/react';
import { useCallback, useContext, useEffect, useRef, useState } from 'react';
import { Link, UNSAFE_createClientRoutesWithHMRRevalidationOptOut, useLocation, useNavigate } from 'react-router-dom';
import { loadCaptchaEnginge, LoadCanvasTemplate,  validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../Providers/AuthProvider';
const Login = () => {
  const {signIn} =useContext(AuthContext)


    const [disabled , setDisabled] = useState(true)
    const refCaptcha = useRef(null)

    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'
    const handleLogin = event => {
        event.preventDefault()
        const form = event.target
        const email = form.email.value
        const password = form.password.value
        // console.log(email,password);
        signIn(email,password)
        .then(result => {
          const user = result.user
          // console.log(user);
          navigate(from, {replace: true})

        })
    }
    useEffect( () => {
        loadCaptchaEnginge(6); 
    },[])

const handleValidateCaptcha = () => {
    const value = refCaptcha.current.value
    // console.log(value);
    if (validateCaptcha(value)) {
        setDisabled(false)
    }
    else {
        setDisabled(true)
    }
}



    return (
        <div className="hero  bg-base-200 ">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input name="email" type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input name="password" type="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control">
          <label className="label">
          <LoadCanvasTemplate />
          </label>
          <input ref={refCaptcha} name="captcha" type="text" placeholder="Captcha" className="input input-bordered" required />
          
           
          
        </div>
        <Button onClick={handleValidateCaptcha} variant="outlined">Validate</Button>
        <div className="form-control mt-6">
          <button disabled={disabled} className="btn btn-primary">Login</button>
        </div>
      </form>
      <Link className='flex justify-center mb-10' to="/signup"><p><small>New Here? <span className='text-blue-300 font-extrabold'>Create and account</span>.</small></p></Link>
    </div>
  </div>
</div>
    );
};

export default Login;