import NavBar from "./navigation/NavBar.jsx";
import testImage from '../../public/services3.jpg';

const Home = () => {
    const authName = "Kaveesha"
    return (
        <div>
            <NavBar />
            <div className="postContainer">
                <div>
                    <p style={{
                        marginBottom: "30px",
                        fontSize: "30px"
                    }}>
                        Medical Support
                    </p>
                </div>
                <p style={{
                    color: "rgba(0,0,0,0.3)",
                    fontStyle: "italic",
                }}>Date: 2025/03/25</p>
                <div>

                    <img style={{
                        width: "600px",

                    }} src={testImage} alt="image"/>
                </div>

                <p style={{
                    textAlign: "justify"
                }}>
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like.
                </p>
                <p style={{
                    color: "rgba(0,0,0,0.53)",
                    fontStyle: "italic",
                    fontSize: "15px",
                }}>
                    Written By {authName}
                </p>

                <div className="underLine"></div>

            </div>
        </div>
    );
};

export default Home;