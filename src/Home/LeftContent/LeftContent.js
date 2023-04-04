import React from "react";
const LeftContent = ({ user }) => {
  return (
    <div className="grid grid-cols-2">
      <div className="text-start">
        <h1 className="text-4xl font-semibold">{user?.id}</h1>
        <h2 className="text-3xl font-medium">
          {user ? "Person Detected" : "No one Detected"}
        </h2>
        <table className="my-12">
          <tbody className="text-start">
            <tr>
              <td className="text-3xl">Name </td>
              <td className="text-center px-5">:</td>
              <td className="text-3xl">{user?.name}</td>
            </tr>
            <tr>
              <td className="text-3xl">Location </td>
              <td className="text-center">:</td>
              <td className="text-3xl">{user?.location}</td>
            </tr>
            <tr>
              <td className="text-3xl">Date</td>
              <td className="text-center">:</td>
              <td className="text-3xl">{user?.date}</td>
            </tr>
            <tr>
              <td className="text-3xl">Time</td>
              <td className="text-center">:</td>
              <td className="text-3xl">{user?.time}</td>
            </tr>
          </tbody>
        </table>
        <h1 className="text-3xl font-semibold">Description:</h1>
        <hr />
        <p className="text-2xl my-2 font-normal">
          {` ${user?.name} detected 
          at ${user?.location} on ${user?.date}`}
        </p>
      </div>
      <div>
        <img src={user?.img} alt="" />
      </div>
    </div>
  );
};

export default LeftContent;
