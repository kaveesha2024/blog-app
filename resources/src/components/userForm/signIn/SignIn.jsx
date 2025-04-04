import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";

const SignIn = () => {
  const [input, setInput] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    salt: "",
  });

  const navigate = useNavigate();

  const [salt1, setSalt] = useState("");

  useEffect(() => {
    setSalt(generateSalt());
  }, []);

  const endpoint = import.meta.env.VITE_API_IP;
  const endpointPort = import.meta.env.VITE_API_PORT;

  const inputHandler = (event) => {
    const { name, value } = event.target;
    setInput((prevState) => ({
      ...prevState,
      [name]: value,
      salt: salt1,
    }));
  };

  const generateSalt = () => {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*_+";
    let salt = "";
    const array = new Uint8Array(100);
    crypto.getRandomValues(array);
    array.forEach((byte) => (salt += characters[byte % characters.length]));
    return salt;
  };

  const createUser = (event) => {
    event.preventDefault();
    if (
      input.email != null &&
      input.firstName != null &&
      input.password != null
    ) {
      axios
        .post(`http://${endpoint}:${endpointPort}/api/users/create`, input)
        .then(() => {
          setInput({
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            salt: "",
          });
          navigate("/posts");
          alert(
            "You have successfully created your account and Try to login !",
          );
        })
        .catch((error) => {
          const res = error.response.data.message;
          alert(res);
          setInput({
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            salt: "",
          });
        });
    } else {
      alert("Please fill in all fields to sign in !");
      setInput({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        salt: "",
      });
    }
  };
  return (
    <form
      className="max-w-sm mt-10 p-10 rounded-2xl mx-auto"
      onSubmit={createUser}
    >
      <h1 className="text-2xl font-bold mb-5 text-blue-700 underline text-center ">
        {" "}
        Create your blog account{" "}
      </h1>
      <div className="mb-5">
        <label
          htmlFor="firstName"
          className="block mb-2 text-sm font-medium text-gray-900 "
        >
          First Name
        </label>
        <input
          type="text"
          name="firstName"
          id="firstName"
          value={input.firstName}
          onChange={inputHandler}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
          placeholder="Enter Your First Name"
          required
        />
      </div>
      <div className="mb-5">
        <label
          htmlFor="lastName"
          className="block mb-2 text-sm font-medium text-gray-900 "
        >
          Last Name
        </label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={input.lastName}
          onChange={inputHandler}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
          placeholder="Enter Your Last Name"
          required
        />
      </div>
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
          value={input.email}
          onChange={inputHandler}
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
          value={input.password}
          onChange={inputHandler}
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

export default SignIn;
