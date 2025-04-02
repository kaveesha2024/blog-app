import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";

const LogIn = () => {
  const host = import.meta.env.VITE_API_IP;
  const port = import.meta.env.VITE_API_PORT;
  const [loginInput, setLoginInput] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setLoginInput((prevState) => ({ ...prevState, [name]: value }));
  };
  const loginUser = async (event) => {
    event.preventDefault();
    if (loginInput.email && loginInput.password != null) {
      try {
        await axios
          .post(`http://${host}:${port}/api/users/login`, loginInput)
          .then((res) => {
            localStorage.setItem("token", res.data.token);
            alert("you are logged in");
            navigate("/posts");
            window.location.reload();
          });
      } catch (error) {
        alert(error.response.data.message);
        setLoginInput({
          email: "",
          password: "",
        });
      }
    } else {
      alert(`Enter your email and password`);
    }
  };
  return (
    <form
      className="max-w-sm mt-10 p-10 rounded-2xl mx-auto"
      onSubmit={loginUser}
    >
      <h1 className="text-2xl font-bold text-center mb-5 text-blue-700 underline">
        {" "}
        Login to your account{" "}
      </h1>
      <div className="mb-5">
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-gray-900 "
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          onChange={handleInputChange}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
          placeholder="test@example.com"
          required
        />
      </div>
      <div className="mb-5">
        <label
          htmlFor="password"
          className="block mb-2 text-sm font-medium text-gray-900 "
        >
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          onChange={handleInputChange}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
          placeholder="~"
          required
        />
      </div>

      <button
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
      >
        Submit
      </button>
    </form>
  );
};

export default LogIn;
