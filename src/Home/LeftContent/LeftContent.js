import React from "react";

const LeftContent = ({ details }) => {
  console.log(details);
  return (
    <div className="grid grid-cols-2">
      <div className="text-start">
        <h1 className="text-4xl font-semibold">{details.id}</h1>
        <h2 className="text-3xl font-medium">
          {details ? "Person Detected" : "No one Detected"}
        </h2>
        <table className="my-12">
          <tbody className="text-start">
            <tr>
              <td className="text-3xl">Name </td>
              <td className="text-center px-5">:</td>
              <td className="text-3xl">{details.name}</td>
            </tr>
            <tr>
              <td className="text-3xl">Location </td>
              <td className="text-center">:</td>
              <td className="text-3xl">{details.location}</td>
            </tr>
            <tr>
              <td className="text-3xl">Date</td>
              <td className="text-center">:</td>
              <td className="text-3xl">{details.date}</td>
            </tr>
            <tr>
              <td className="text-3xl">Time</td>
              <td className="text-center">:</td>
              <td className="text-3xl">{details.time}</td>
            </tr>
          </tbody>
        </table>
        <h1 className="text-3xl font-semibold">Description:</h1>
        <hr />
        <p className="text-2xl my-2 font-normal">
          {` ${details.name} detected 
          at ${details.location} on ${details.date}`}
        </p>
      </div>
      <div>image</div>
    </div>
  );
};

export default LeftContent;
