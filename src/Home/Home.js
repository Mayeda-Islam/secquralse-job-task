import React, { useEffect, useState } from "react";
import LeftContent from "./LeftContent/LeftContent";

import { MdSettingsInputComponent } from "react-icons/md";
import useUserList from "./useUserList";
import { useFetcher } from "react-router-dom";
const Home = () => {
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedGender, setSelectedGender] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const { loading, users } = useUserList();
  const [selectedUser, setSelectedUser] = useState({});
  const HandleShowDetail = (data) => {
    setSelectedUser(data);
  };
  let filteredUser = users || [];
  if (selectedGender) {
    filteredUser = users?.filter(
      (user) => user?.gender?.toLowerCase() === selectedGender
    );
  }
  if (selectedLocation) {
    filteredUser = filteredUser?.filter(
      (user) => user?.location?.toLowerCase() === selectedLocation
    );
  }

  return (
    <div>
      <div className="drawer  drawer-mobile drawer-end ">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content container mx-auto flex flex-col items-center justify-center">
          {/* <!-- Page content here --> */}
          <LeftContent user={selectedUser}></LeftContent>
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
              <div className="dropdown dropdown-left">
                <label tabIndex={0} className="btn m-1">
                  <MdSettingsInputComponent className="text-5xl"></MdSettingsInputComponent>
                </label>
                <ul
                  tabIndex={0}
                  className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li>
                    <select
                      onChange={(e) => setSelectedLocation(e.target.value)}
                      className="select w-full max-w-xs"
                    >
                      <option selected>Select Location</option>
                      <option value={"chennai"}>Chennai</option>
                      <option value={"bangalore"}>Bangalore</option>
                      <option value={"hyderabad"}>Hyderabad</option>
                    </select>
                  </li>
                  <li>
                    <select
                      onChange={(e) => setSelectedGender(e.target.value)}
                      className="select w-full max-w-xs"
                    >
                      <option selected> Select Gender</option>
                      <option value={"male"}>Male</option>
                      <option value={"female"}>Female</option>
                    </select>
                  </li>
                  <li>
                    <input
                      onChange={(e) => setSelectedDate(e.target.value)}
                      type="date"
                    />
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-8">
              {filteredUser?.map((data) => (
                <>
                  <li className="border mt-4 border-spacing-2">
                    <button onClick={() => HandleShowDetail(data)}>
                      {data?.id}
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
