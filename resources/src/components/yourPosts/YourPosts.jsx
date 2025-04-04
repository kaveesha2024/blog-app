import axios from "axios";
import deleteBtn from '../../../public/delete.png';
import { useEffect, useState } from "react";
import {useNavigate} from "react-router";

const YourPosts = () => {
    const navigate = useNavigate();
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
          const response = await axios.get(`http://${host}:${port}/api/users-posts`, { headers: { Authorization: `Bearer ${token}` } });
          setPostData(response.data);
      }
      catch (error) {
          console.error(error);
      }
  };

  const deletePost = async (postId) => {
      const id = {id: postId};
      if (postId == null) {
          alert("Post not found.");
      }else {
          const deleteOrNot = window.confirm("Are you sure you want to delete this post?");
          if (deleteOrNot) {
              try {
                  await axios.post(`http://${host}:${port}/api/delete-posts/`, id, {headers: { Authorization: `Bearer ${token}` }});
                  getUsersPosts();
              }
              catch (error) {
                  console.error(error);
              }
          }
      }
  }

  return (
    <di>
      <div>
        <h1 className="font-bold text-3xl uppercase text-center mt-10">
          Hello {userData.firstName}
        </h1>
          <div className=" mt-10 ml-[5%] " ><button className="signOutButton" onClick={() => {navigate('/posts')}}>Home</button></div>
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
                        { postData.length > 0 ? postData.map(post => (
                            <tr key={post._id} className="bg-white border-b  dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <th scope="row"
                                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {post.title}
                                </th>
                                <td className="px-6 py-4">
                                    {new Date(post.createdAt).toUTCString().split("T")[0]}
                                </td>
                                <td className="px-6 py-4">
                                    <button onClick={() => {
                                        deletePost(post._id);
                                    }} className="hover:cursor-pointer" ><img src={deleteBtn} alt=""/></button>
                                </td>
                            </tr>
                        )): <td className="px-6 py-4">
                            You haven't upload any post
                        </td>}
                    </tbody>
                </table>
            </div>
        </div>
    </di>
  );
};

export default YourPosts;
