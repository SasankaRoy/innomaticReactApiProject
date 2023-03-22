import React from "react";

export const DataCards = ({ data }) => {
  //   console.log(data);
  return (
    <div className="box_shadow bg-[#F7AB0A]/10 mt-3 rounded-md space-y-3 py-5 flex flex-col justify-center items-center">
      <h1 className="text-2xl text-[#F7AB0A] text-center capitalize tracking-wide">
        {data.loc}
      </h1>
      <h2 className="text-xl text-[#F7AB0A] tracking-wide capitalize">
        <span className="text-white">Total comfirm cases</span> :{" "}
        {data?.totalConfirmed}
      </h2>
      <h2 className="text-xl text-[#F7AB0A] tracking-wide capitalize">
        <span className="text-white">Total deaths</span> : {data?.deaths}
      </h2>
      <h2 className="text-xl text-[#F7AB0A] tracking-wide capitalize">
        <span className="text-white">discharged</span> : {data?.discharged}
      </h2>
    </div>
  );
};
