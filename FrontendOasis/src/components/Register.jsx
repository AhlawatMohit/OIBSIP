import { useState } from "react"
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

function Register() {

  const [error, setError] = useState("");
  const [data, setData] = useState({
      firstName: "",
      lastName: "",
      email: "",
      password: ""
  });

  const navigate = useNavigate();

  const handleChange = ({ currentTarget: input }) => {
      setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async(e) => {
e.preventDefault();
try {

  // local URL
//   const url = "http://localhost:8088/api/user";

// Backend Deployed URL 
const url = "https://oasis-backend-two.vercel.app/api/user";
  
  const {data:res} = await axios.post(url, data);
  navigate("/login")
  console.log(res.message);
} catch (error) {
  if(error.response && 
      error.response.status >= 400 && 
      error.response.status <= 500
      ){
setError(error.response.data.message)
      }
}
  }


  return (
   <>
     <div className="w-screen h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 from-5% to-emerald-500 via-40%  via-sky-500 to-90%" >
            <div className="shadow-2xl h-[23rem] w-96 shadow-[#FF9130] shadow-[0_2px_15px_8px_rgba(0,0,0,0.5)] border-solid border-orange-200 rounded-md p-8">
                    <form onSubmit={handleSubmit}>
                        <h1 className="text-[#FFF78A] text-xl my-1">Create Account</h1>
                        <input type="text"
                            placeholder='First Name'
                            name='firstName'
                            onChange={handleChange}
                            value={data.firstName}
                            required
                            className="rounded py-1 px-2 my-1 w-10/12 bg-zinc-700 text-white"
                        />
                        <input type="text"
                            placeholder='Last Name'
                            name='lastName'
                            onChange={handleChange}
                            value={data.lastName}
                            required
                            className="rounded py-1 px-2 my-1 w-10/12 bg-zinc-700 text-white"
                        />
                        <input type="email"
                            placeholder='Email'
                            name='email'
                            onChange={handleChange}
                            value={data.email}
                            required
                            className="rounded py-1 px-2 my-1 w-10/12 bg-zinc-700 text-white"
                        />
                        <input type="password"
                            placeholder='Password'
                            name='password'
                            onChange={handleChange}
                            value={data.password}
                            required
                            className="rounded py-1 px-2 my-1 w-10/12 bg-zinc-700 text-white"
                        />
                        {error && <div className="">{error}</div>}
                        <div className="flex items-center justify-center mt-6">
                        <button type="submit" className="rounded-lg px-6 mr-6 py-2 my-4 bg-indigo-500 shadow-lg shadow-indigo-500/90">
                            Sign Up
                        </button>
                        <Link to="/login" >
                        <button type='button' className="rounded-lg px-6 mr-6 py-2 my-4 bg-blue-500 shadow-lg shadow-blue-500/90">
                            Sign In
                        </button>
                    </Link>
                    </div>
                    </form>
                </div>
            </div>
   </>
  )
}

export default Register
