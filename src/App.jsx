import React, { useEffect, useState } from "react";
import { DataCards } from "./components/DataCards";
import { Nav } from "./components/Nav";

export const App = () => {
  const [apiData, setApiData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const getData = async () => {
    const result = await fetch(
      "https://api.rootnet.in/covid19-in/stats/latest"
    );
    const data = await result.json();
    setApiData(data.data.regional);
  };
  useEffect(() => {
    getData();
  }, []);

  const filterData = (e) => {
    const filter = apiData.filter(
      (data) => data.loc.toLowerCase() == e.target.value
    );
    setFilteredData(filter);
  };

  return (
    <>
      <div className="bg-[rgba(36,36,36)] h-screen overflow-scroll">
        <Nav />

        <div className="mt-8">
          <div className="search_div flex justify-center items-center lg:w-[30%] w-[60%] mx-auto">
            <input
              type="text"
              placeholder="search cases by city..."
              onChange={filterData}
              className="bg-transparent capitalize tracking-wide text-white rounded w-full text-center px-2 py-2 text-xl  outline-none focus:ring-0 border border-t-0 border-l-0 border-r-0 border-b-[#F7AB0A] "
            />
          </div>
          <div className="grid lg:grid-cols-3 grid-cols-1 justify-center gap-3 mt-8 w-[80%] mx-auto  px-5">
            {filteredData.length >= 1
              ? filteredData?.map((cur, id) => (
                  <DataCards key={id} data={cur} />
                ))
              : apiData?.map((cur, id) => <DataCards key={id} data={cur} />)}
          </div>
        </div>
      </div>
    </>
  );
};
