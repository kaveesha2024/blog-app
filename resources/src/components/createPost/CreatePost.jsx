const CreatePost = () => {
    return (
        <form
            className="max-w-sm mt-10 p-10 rounded-2xl mx-auto"
        ><h1 className="text-2xl font-bold mb-5 text-blue-700 underline text-center " > Create your blog </h1>

            <div className="mb-5">
                <label
                    htmlFor="lastName"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                >
                    Title
                </label>
                <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                    placeholder="Enter Your Blog Title"
                    required
                />
            </div>
            <div className="mb-5">
                <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                >
                    Content
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                    placeholder="Enter Your Blog Content"
                    required
                />
            </div>
            <div className="mb-5">
                <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                >
                    Picture
                </label>
                <input
                    type="file"
                    id="password"
                    name="password"
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

export default CreatePost;