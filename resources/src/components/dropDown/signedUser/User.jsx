import { useNavigate } from "react-router";

const User = ({ user }) => {
  const navigate = useNavigate();
  const removeToken = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <div className="flex align-baseline">
      <button
        id="dropdownDefaultButton"
        data-dropdown-toggle="dropdown"
        className="text-black bg-[##b7dafa] focus:ring-4 focus:outline-none focus:ring-[aliceblue] font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
        type="button"
      >
        {user}
      </button>
      {localStorage.getItem("email") != null ? (
        <div className="flex align-baseline">
          <button className=" signOutButton " onClick={removeToken}>
            Sign out
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default User;
