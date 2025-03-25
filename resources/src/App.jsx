import {useNavigate} from "react-router";

const App = () => {
    const navigate = useNavigate()
    return (
        <div className="container">
            <h1>Welcome to Blogs</h1>
            <button onClick={() => {navigate("/posts")}}>Open Blogs</button>
        </div>
    );
};

export default App;