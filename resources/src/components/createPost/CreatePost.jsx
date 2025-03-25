import backBtn from '../../../public/back.png';
import {useNavigate} from "react-router";
import {useState} from "react";
const CreatePost = () => {
const navigation = useNavigate()
    const [inputData, setInputData] = useState({
        name: '',
        topic: '',
        content: '',
    });

    const getInputChanges = (event) => {
        const {name, value} = event.target
        setInputData(prevState => ({
            ...prevState,
            [name]: value
        }))

    };

    console.log(inputData)

  return (
    <form className="max-w-sm mt-10 mx-auto">
        <button onClick={()=>{navigation("/posts")}} style={{
            marginBottom: "20px",
            cursor: "pointer"
        }}><img src={backBtn} alt="img not found"/></button>
      <div className="mb-5">
        <label
          htmlFor="name"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Your Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder=""
          onChange={getInputChanges}
        />
      </div>
        <div className="mb-5">
        <label
          htmlFor="topic"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Topic
        </label>
        <input
          type="text"
          id="topic"
          name="topic"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder=""
          onChange={getInputChanges}
        />
      </div>

        <div className="mb-5">
            <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900 "
            >
                Image
            </label>
            <input
                type="file"
                id="text"
                className="bg-gray-50 border border-gray-300 cursor-pointer text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
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
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          onChange={getInputChanges}
        />
      </div>

      <button
        type="button"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center "
      >
        Submit Post
      </button>
    </form>
  );
};

export default CreatePost;
