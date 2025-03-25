const CreatePost = () => {
  return (
    <form className="max-w-sm mt-10 mx-auto">
      <div className="mb-5">
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Your Name
        </label>
        <input
          type="text"
          id="text"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder=""
          required
        />
      </div>

        <div className="mb-5">
            <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900 "
            >
                Enter your image
            </label>
            <input
                type="file"
                id="text"
                className="bg-gray-50 border border-gray-300 cursor-pointer text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                required
            />
        </div>

      <div className="mb-5">
        <label
          htmlFor="password"
          className="block mb-2 text-sm font-medium text-gray-900 "
        >
          Type your text
        </label>
        <input
          type="text"
          id="text"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          required
        />
      </div>

      <button
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center "
      >
        Submit Post
      </button>
    </form>
  );
};

export default CreatePost;
