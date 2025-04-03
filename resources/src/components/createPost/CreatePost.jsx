import { useState } from "react";
import axios from "axios";

const CreatePost = () => {
  const host = import.meta.env.VITE_API_IP;
  const port = import.meta.env.VITE_API_PORT;

  const [creatPostInput, setCreatPostInput] = useState({
    title: "",
    content: "",
    image: "",
  });
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    const token = localStorage.getItem("token");
    setCreatPostInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  console.log(creatPostInput);
  const uploadPost = async (event) => {
    event.preventDefault();
    if (
      creatPostInput.title !== null &&
      creatPostInput.content !== null &&
      creatPostInput.image !== null &&
      localStorage.getItem("token") != null
    ) {
      try {
        const upload = await axios.post(`http://127.0.0.1:5000/api/create-post`,creatPostInput, {headers: {Authorization: localStorage.getItem("token")}});
        console.log(upload);
        }
      catch (error) {
        console.log(error.response.data.message);
      }
    } else {
      alert("fill all the inputs.");
    }
  };

  return (
    <form
      className="max-w-sm mt-10 p-10 rounded-2xl mx-auto"
      onSubmit={uploadPost}
    >
      <h1 className="text-2xl font-bold mb-5 text-blue-700 underline text-center ">
        {" "}
        Create your blog{" "}
      </h1>

      <div className="mb-5">
        <label
          htmlFor="title"
          className="block mb-2 text-sm font-medium text-gray-900 "
        >
          Title
        </label>
        <input
          type="text"
          id="title"
          name="title"
          onChange={handleInputChange}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
          placeholder="Enter Your Blog Title"
          required
        />
      </div>
      <div className="mb-5">
        <label
          htmlFor="content"
          className="block mb-2 text-sm font-medium text-gray-900 "
        >
          Content
        </label>
        <input
          type="text"
          id="content"
          name="content"
          onChange={handleInputChange}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
          placeholder="Enter Your Blog Content"
          required
        />
      </div>
      <div className="mb-5">
        <label
          htmlFor="picture"
          className="block mb-2 text-sm font-medium text-gray-900 "
        >
          Picture
        </label>
        <input
          type="text"
          id="picture"
          name="picture"
          onChange={handleInputChange}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
          placeholder="Enter the Link of Your Picture"
          required
        />
      </div>

      <button
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
      >
        Upload
      </button>
    </form>
  );
};

export default CreatePost;
