import { useState } from "react";
import axios from "axios";
import "../App.css";

const AuthPage = (props) => {
  const [username, setUsername] = useState();
  const [secret, setSecret] = useState();

  const onLogin = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/login", { username, secret })
      .then((r) => props.onAuth({ ...r.data, secret }))
      .catch((e) => console.log(JSON.stringify(e.response.data)));
  };

  return (
    <div className="gradient">
      <div>
        <p className="flex items-center font-raleway justify-center text-7xl text-center text-gray-200 pt-20">
          KINDLED 👋
        </p>
      </div>
      {/* Form  */}
      <div className="h-screen flex  items-center justify-center">
        {/* Login Form */}
        <form className="w-full max-w-sm" onSubmit={onLogin}>
          <div className="text-3xl mb-3 font-raleway text-gray-200">Login</div>
          <div className="bg-gradient-to-r from-gray-900 to-gray-600 flex flex-col gap-3 items-center border-b-8 border-r-4 border-l border-blue-500 py-2">
            <input
              type="text"
              name="username"
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
              className="font-raleway text-center appearance-none bg-transparent border-none w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none"
            />
            <input
              type="password"
              name="secret"
              placeholder="Password"
              onChange={(e) => setSecret(e.target.value)}
              className="font-raleway text-center appearance-none bg-transparent border-none w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none"
            />

            <button
              type="submit"
              className="flex-shrink-0 bg-blue-500 hover:bg-blue-800 border-blue-500 hover:border-blue-800 font-raleway text-sm border-4 text-white py-1 px-2 rounded"
            >
              LOG IN
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AuthPage;
