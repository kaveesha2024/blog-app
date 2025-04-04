import axios from "axios";
import deleteBtn from '../../../public/delete.png';
import { useEffect, useState } from "react";

const YourPosts = () => {
  const host = import.meta.env.VITE_API_IP;
  const port = import.meta.env.VITE_API_PORT;
  const [userData, setUserData] = useState({});
    const [postData, setPostData] = useState([]);
  const token = localStorage.getItem("token");
  useEffect(() => {
    getUserInfo();
      getUsersPosts();
  }, []);

  const getUserInfo = async () => {
      try {
          const response = await axios.get(
              `http://${host}:${port}/api/your-posts`,
              { headers: { Authorization: `Bearer ${token}` } },
          );
          setUserData(response.data);
      } catch (error) {
          console.error(error);
      }
  }

  const getUsersPosts = async () => {
      try {
          console.log('working')
          const response = await axios.get(`http://${host}:${port}/api/users-posts`, { headers: { Authorization: `Bearer ${token}` } });
          setPostData(response.data);
      }
      catch (error) {
          console.error(error);
      }
  };

  const deletePost = (postId) => {

  }

  return (
    <div>
      <div>
        <h1 className="font-bold text-3xl uppercase text-center mt-10">
          Hello {userData.firstName}
        </h1>
      </div>
        <div>
            <div className="relative mt-20 mx-30 overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Post Title
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Uploaded Date
                        </th>
                        <th scope="col" className="px-6 py-3">
                            delete
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                        {postData.map(post => (
                            <tr key={post._id} className="bg-white border-b  dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <th scope="row"
                                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {post.title}
                                </th>
                                <td className="px-6 py-4">
                                    {post.createdAt}
                                </td>
                                <td className="px-6 py-4">
                                    <button onClick={() => {
                                        deletePost(post._id);
                                    }} className="hover:cursor-pointer" ><img src={deleteBtn} alt=""/></button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  );
};

export default YourPosts;
