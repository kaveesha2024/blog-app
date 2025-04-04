import { Link, useNavigate } from "react-router";
import User from "../dropDown/signedUser/User.jsx";
import { useEffect, useState } from "react";
import axios from "axios";

const NavBar = () => {
  const navigation = useNavigate();

  const [user, setUser] = useState("");
  useEffect(() => {
    authUser();
  });

  const token = localStorage.getItem("token");
  const authUser = () => {
    if (token != null) {
      try {
        axios
          .get("http://localhost:5000/api/users/", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
          .then((response) => {
            localStorage.setItem("email", response.data);
            setUser(response.data);
          });
      } catch (error) {
        console.log(error);
      }
    } else {
      setUser("Signed In Required");
    }
  };
  return (
    <div>
      <header>
        <h2 className="logo">Blog</h2>
        <User user={user} />
        <nav className="navigation">
          { localStorage.getItem("email") != null ? <Link to="/your-posts">Your Posts</Link> : null }
          {localStorage.getItem("email") != null ? null : (
            <Link to="/login">Log In</Link>
          )}
          {localStorage.getItem("email") != null ? null : (
            <Link to="/sign-in">Sign In</Link>
          )}
          { localStorage.getItem("email") != null ? <button
              onClick={() => {
                navigation("/create-post");
              }}
              className="createPostBtn"
          >
            Create Post
          </button> : null }
        </nav>
      </header>
    </div>
  );
};

export default NavBar;
