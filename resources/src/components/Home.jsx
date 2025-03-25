import {Link} from "react-router";

const Home = () => {
    return (
        <div>
            {/*<nav className="navBar">*/}
            {/*    <div>*/}
            {/*        <p>*/}
            {/*            Blogs*/}
            {/*        </p>*/}
            {/*        <Link to="/posts">Posts</Link>*/}
            {/*        <Link to="/posts">Users</Link>*/}
            {/*        <Link to="/posts">About</Link>*/}
            {/*        <Link to="/posts">Contacts</Link>*/}
            {/*        <button>Create Post</button>*/}
            {/*    </div>*/}
            {/*</nav>*/}
            <header>
                <h2 className="logo">Blog</h2>
                <nav className="navigation">
                    <Link to="/posts">Posts</Link>
                    <Link to="">About</Link>
                    <Link to="">Services</Link>
                    <Link to="">Contacts</Link>
                    <button className="createPostBtn">Create Post</button>
                </nav>
            </header>
        </div>
    );
};

export default Home;