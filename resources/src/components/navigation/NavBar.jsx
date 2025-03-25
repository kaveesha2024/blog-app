import {Link, useNavigate} from "react-router";

const NavBar = () => {
    const navigation = useNavigate()
    return (
        <div>
            <header>
                <h2 className="logo">Blog</h2>
                <nav className="navigation">
                    <Link to="/posts">Posts</Link>
                    <Link to="">About</Link>
                    <Link to="">Services</Link>
                    <Link to="">Contacts</Link>
                    <button onClick={() => {navigation("/createPost")}} className="createPostBtn">Add Post</button>
                </nav>
            </header>
        </div>
    );
};

export default NavBar;