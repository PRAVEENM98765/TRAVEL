// import React, { useState } from 'react';
// import image from "./Assetes/page.jpg"
// import { FaApple } from "react-icons/fa6";
// import { FaFacebook } from "react-icons/fa";

// const Login  = () => {
//   const [isLogin, setIsLogin] = useState(true);
//   const [email, ] = useState('');
//   const [password, ] = useState('');
//   const [error, setError] = useState('');

//   const handleFacebookLogin = () => {
//     console.log('Facebook login clicked');

//   };

//   const handleGoogleLogin = () => {
//     console.log('Google login clicked');
//   };

//   const handleAppleLogin = () => {
//     console.log('Apple login clicked');

//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!email || !password) {
//       setError('Email and password are required.');
//       return;
//     }
//     console.log(isLogin ? 'Logging in...' : 'Signing up...', { email, password });
//     setError('');
    
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100">
//       <div className="bg-white rounded-lg shadow-lg p-8 w-96">
//         <img 
//         src= {image}
//         alt="back"
//         className="w-full  h-full object-cover "
//         />
//         <h2 className="text-2xl font-bold text-center mb-6">{isLogin ? 'Login' : 'Sign Up'}</h2>

//         {error && <div className="text-red-500 text-center mb-4">{error}</div>}

//         <div className="flex flex-col gap-4 mb-4">
//           <button
//             onClick={handleFacebookLogin}
//             className="flex items-center justify-center bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
//           >
//             <span className="mr-2"><FaFacebook /></span>
//             Login with Facebook
//           </button>
//           <button
//             onClick={handleGoogleLogin}
//             className="flex items-center justify-center bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition"
//           >
//             <span className="mr-2">🔴</span>
//             Login with Google
//           </button>
//           <button
//             onClick={handleAppleLogin}
//             className="flex items-center justify-center bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition"
//           >
//             <span className="mr-2"><FaApple /></span>
//             Login with Apple
//           </button>
//         </div>

//         <div className="my-4 flex items-center justify-between">
//           <hr className="flex-grow border-gray-300" />
//           <span className="mx-2 text-gray-500">OR</span>
//           <hr className="flex-grow border-gray-300" />
//         </div>

      

//         <div className="text-center mt-4">
//           <span className="text-gray-500">{isLogin ? "Don't have an account?" : 'Already have an account?'}</span>
//           <button
//             onClick={() => setIsLogin(!isLogin)}
//             className="text-blue-600 hover:underline ml-1"
//           >
//             {isLogin ? 'Sign Up' : 'Login'}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;
