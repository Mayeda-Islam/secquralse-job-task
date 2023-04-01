import React, { useState } from "react";
import LeftContent from "./LeftContent/LeftContent";
import Data from "./FakeData";
import { MdSettingsInputComponent } from "react-icons/md";

const Home = () => {
  const fakeData = Data;
  const [details, setDetails] = useState({});
  const HandleShowDetail = (data) => {
    setDetails(data);
  };
  return (
    <div>
      <div className="drawer  drawer-mobile drawer-end ">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content container mx-auto flex flex-col items-center justify-center">
          {/* <!-- Page content here --> */}
          <LeftContent details={details}></LeftContent>
          <label
            htmlFor="my-drawer-4"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side ">
          <label htmlFor="my-drawer-4" className="drawer-overlay"></label>

          <ul className="menu  bg-slate-600 p-4 w-80  text-base-content">
            {/* <!-- Sidebar content here --> */}
            <div className="flex justify-between items-center mt-8">
              <p className="text-4xl ">Event</p>
              <MdSettingsInputComponent className="text-5xl"></MdSettingsInputComponent>
            </div>
            <div className="mt-8">
              {fakeData.map((data) => (
                <>
                  <li className="border mt-4 border-spacing-2">
                    <button onClick={() => HandleShowDetail(data)}>
                      {data.id}
                    </button>
                  </li>
                </>
              ))}
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
