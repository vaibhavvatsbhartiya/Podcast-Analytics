import React, { useState } from 'react';
    import { Link, useNavigate } from 'react-router-dom';
    import { motion } from 'framer-motion';

    const Login = ({ onLogin }) => {
      const [email, setEmail] = useState('');
      const [password, setPassword] = useState('');
      const navigate = useNavigate();

      const handleSubmit = async (e) => {
        e.preventDefault();
        // Simulate login
        await new Promise((resolve) => setTimeout(resolve, 500));

        // Dummy credentials check
        if (email === 'test@example.com' && password === '123456') {
          onLogin();
          navigate('/overview');
        } else {
          alert('Invalid credentials');
        }
      };

      return (
        <motion.div
          className="container mx-auto p-6 flex justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-full max-w-md">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100 text-center">
              Login
            </h2>
            <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-700 shadow-md rounded px-8 pt-6 pb-8 mb-4">
              <div className="mb-4">
                <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-300 leading-tight focus:outline-none focus:shadow-outline dark:bg-gray-800"
                  id="email"
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2" htmlFor="password">
                  Password
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-300 mb-3 leading-tight focus:outline-none focus:shadow-outline dark:bg-gray-800"
                  id="password"
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="flex items-center justify-between">
                <button
                  className="bg-primary dark:bg-secondary text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline hover:bg-blue-700 dark:hover:bg-yellow-600"
                  type="submit"
                >
                  Sign In
                </button>
                <Link className="inline-block align-baseline font-bold text-sm text-primary dark:text-secondary hover:text-blue-800 dark:hover:text-yellow-200" to="/signup">
                  Don't have an account?
                </Link>
              </div>
            </form>
          </div>
        </motion.div>
      );
    };

    export default Login;
