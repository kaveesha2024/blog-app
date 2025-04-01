import { useEffect, useState } from "react";
import axios from "axios";

const Post = () => {
  const [data, setData] = useState("");
  useEffect(() => {
    const port = import.meta.env.VITE_API_PORT || 5000;
    const host = import.meta.env.VITE_API_IP || "localhost";
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://${host}:${port}/api/posts`);
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData().then(() => {}).catch(error => console.log(error));
  }, []);



  return (
    <div>
      {data.length > 0 ?
        data.map((data) => (
          <div key={data._id}>
            <div className="postContainer">
              <div>
                <p
                  style={{
                    marginBottom: "30px",
                    fontSize: "30px",
                  }}
                >
                  {data.title}
                </p>
              </div>
              <p
                style={{
                  color: "rgba(0,0,0,0.3)",
                  fontStyle: "italic",
                  marginBottom: "2%",
                }}
              >
                Date : {new Date(data.date).toISOString().split("T")[0]}
              </p>
              <div>
                <img
                  style={{
                    width: "600px",
                    marginBottom: "2%",
                  }}
                  src={data.picture}
                  alt="Image Not Found"
                />
              </div>

              <p
                style={{
                  textAlign: "justify",
                  marginBottom: "2%",
                }}
              >
                {data.content}
              </p>
              <p
                style={{
                  color: "rgba(0,0,0,0.53)",
                  fontStyle: "italic",
                  fontSize: "15px",
                }}
              >
                Written By {data.author}
              </p>

              <div className="underLine"></div>
            </div>
          </div>
        )) : <div>No Data</div> }
    </div>
  );
};

export default Post;
