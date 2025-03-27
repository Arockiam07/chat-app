import { useState } from "react";
import { Link } from "react-router-dom";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import useLogin from "../../hooks/useLogin";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const { loading, login } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(username, password);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 "
	
	style={{
        backgroundImage: "url('https://mir-s3-cdn-cf.behance.net/project_modules/fs/4e0cc328008799.56e41b35c50a5.gif')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
		width: "100%",
      }}
	  >
      <div className="w-full max-w-sm p-9 rounded-lg shadow-lg bg-gray-800 bg-opacity-60">
        <h1 className="text-3xl font-semibold text-center text-gray-300 mb-6">
          Login <span className="text-blue-500">ChatApp</span>
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-gray-400 text-sm">Username</label>
            <input
              type="text"
              placeholder="Enter username"
              className="w-full px-3 py-2 mt-1 text-white bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="relative">
            <label className="text-gray-400 text-sm">Password</label>
            <div className="flex items-center bg-gray-700 border border-gray-600 rounded-lg mt-1">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter Password"
                className="w-full px-3 py-2 text-white bg-transparent focus:outline-none"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="button"
                className="px-3 text-gray-400 hover:text-white"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOffIcon size={18} /> : <EyeIcon size={18} />}
              </button>
            </div>
          </div>

          <Link to="/signup" className="text-sm text-blue-400 hover:underline">
            Don’t have an account?
          </Link>

          <button
            className="w-full py-2 mt-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition disabled:bg-blue-300"
            disabled={loading}
          >
            {loading ? <span className="loading loading-spinner"></span> : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;


// STARTER CODE FOR THIS FILE
// const Login = () => {
// 	return (
// 		<div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
// 			<div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
// 				<h1 className='text-3xl font-semibold text-center text-gray-300'>
// 					Login
// 					<span className='text-blue-500'> ChatApp</span>
// 				</h1>

// 				<form>
// 					<div>
// 						<label className='label p-2'>
// 							<span className='text-base label-text'>Username</span>
// 						</label>
// 						<input type='text' placeholder='Enter username' className='w-full input input-bordered h-10' />
// 					</div>

// 					<div>
// 						<label className='label'>
// 							<span className='text-base label-text'>Password</span>
// 						</label>
// 						<input
// 							type='password'
// 							placeholder='Enter Password'
// 							className='w-full input input-bordered h-10'
// 						/>
// 					</div>
// 					<a href='#' className='text-sm  hover:underline hover:text-blue-600 mt-2 inline-block'>
// 						{"Don't"} have an account?
// 					</a>

// 					<div>
// 						<button className='btn btn-block btn-sm mt-2'>Login</button>
// 					</div>
// 				</form>
// 			</div>
// 		</div>
// 	);
// };
// export default Login;
