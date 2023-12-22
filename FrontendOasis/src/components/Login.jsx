import axios from "axios"
import { useState } from "react"
import { Link } from "react-router-dom"

function Login() {

  const [error, setError] = useState("");
  const [data, setData] = useState({
      email: "",
      password: ""
  });


  const handleChange = ({ currentTarget: input }) => {
      setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async(e) => {
e.preventDefault();
try {

  // Local URL 
  // const url = "http://localhost:8088/api/auth";

  // Backend Deployed URL 
  const url = "https://oasis-backend-two.vercel.app/api/auth";


  const {data:res} = await axios.post(url, data);
  localStorage.setItem("token", res.data)
  window.location = "/"

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
       <div className="w-screen h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%" >
            <div className="shadow-2xl h-[18rem] w-[24rem] shadow-[#FF9130] shadow-[0_2px_15px_8px_rgba(0,0,0,0.5)] border-solid border-orange-200 rounded-md p-8">
                <div className="">
                <form onSubmit={handleSubmit}>
                        <h1 className="text-[#FFF78A] text-xl my-1">Login to Your Account</h1>
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
                        <button type="submit" className="rounded-lg px-6 mr-6 py-2 my-4 bg-blue-500 shadow-lg shadow-blue-500/90">
                            Sign In
                        </button>
                        <Link to="/signup" >
                        <button type='button' className="rounded-lg px-6 mr-6 py-2 my-4 bg-indigo-500 shadow-lg shadow-indigo-500/90">
                            Sign Up
                        </button>
                    </Link>
                    </div>
                    </form>
                </div>
                    
                </div>
            </div>
    </>
  )
}

export default Login
