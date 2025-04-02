import {Link, useNavigate} from "react-router";
import User from "../dropDown/signedUser/User.jsx";

const NavBar = () => {
    const navigation = useNavigate()
    return (
        <div>
            <header>
                <h2 className="logo">Blog</h2>
                    <User />
                <nav className="navigation">
                    <Link to="/your-posts">Your Posts</Link>
                    <Link to="/login">Log In</Link>
                    <Link to="/sign-in">Sign In</Link>
                    <button onClick={() => {navigation("/create-postControllers")}} className="createPostBtn">Add Post</button>
                </nav>
            </header>
        </div>
    );
};

export default NavBar;