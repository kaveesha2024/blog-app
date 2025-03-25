import testImage from "../../../public/services3.jpg";
import {useEffect, useState} from "react";
import axios from "axios";

const Post = () => {
  const authName = "Kaveesha";
    const [data, setData] = useState("")
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:5000/getPosts");
                setData(response.data)
            } catch (error){
                console.log(error)
            }
        };
        fetchData();
    }, []);
  return (
      <div>
          {data.length > 0 && data.map((data) => (
              <div key={data.id}>
                  <div className="postContainer">
                      <div>
                          <p
                              style={{
                                  marginBottom: "30px",
                                  fontSize: "30px",
                              }}
                          >
                              {data.header}
                          </p>
                      </div>
                      <p
                          style={{
                              color: "rgba(0,0,0,0.3)",
                              fontStyle: "italic",
                              marginBottom: "2%",
                          }}
                      >
                          Date: 2025/03/25
                      </p>
                      <div>
                          <img
                              style={{
                                  width: "600px",
                                  marginBottom: "2%",
                              }}
                              src={testImage}
                              alt="Image Not Found"
                          />
                      </div>

                      <p
                          style={{
                              textAlign: "justify",
                              marginBottom: "2%",
                          }}
                      >
                          {data.paragraph}
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
          ))}
      </div>
  );
};

export default Post;
