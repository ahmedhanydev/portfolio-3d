import React from "react";

const TechCard = ({ icon, name }) => {
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-2 ">
        <div className="bg-white h-28 w-28 flex justify-center items-center rounded-full p-2  ">
          <img src={icon} alt="" />
        </div>
        <p>{name}</p>
      </div>
    </>
  );
};

export default TechCard;
