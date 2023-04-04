import React from "react";
import useUserList from "../Home/useUserList";

const Navbar = () => {
  const { users, loading } = useUserList();
  let maleCount = 0;
  let femaleCount = 0;
  users.forEach((data) =>
    data.gender.toLowerCase() === "male" ? maleCount++ : femaleCount++
  );
  return (
    <div>
      <div className="navbar bg-primary text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex"></div>
        <div className="navbar-end">
          <p className="border-spacing-3 mx-2 px-8 py-4 bg-lime-600">
            {maleCount}
          </p>
          <br />
          <p className="border-spacing-3 px-8 py-4 bg-red-500">{femaleCount}</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
