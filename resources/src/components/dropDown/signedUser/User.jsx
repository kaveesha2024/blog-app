import {useNavigate} from "react-router";

const User = ({ user }) => {
    const navigate = useNavigate();
    const removeToken = () => {
        localStorage.clear();
        navigate("/");
    };

  return (
    <div>
      <button
        id="dropdownDefaultButton"
        data-dropdown-toggle="dropdown"
        className="text-black bg-[##b7dafa] focus:ring-4 focus:outline-none focus:ring-white font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
        type="button"
        // style={{
        //   transition: "all 0.3s ease-in-out",
        // }}
      >
        {user}
        <svg
          className="w-2.5 h-2.5 ms-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>

      <div
        id="dropdown"
        // style={{
        //   transition: "all .6s ease-in-out",
        // }}
        className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 "
      >
        <ul
          className="py-2 text-sm text-gray-700 "
          aria-labelledby="dropdownDefaultButton"
        >
          <li
            style={{
              transition: "all 0.3s ease-in-out",
            }}
            className="block px-4 py-2 hover:bg-blue-300 "
          >
            <button onClick={removeToken}>Sign out</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default User;
