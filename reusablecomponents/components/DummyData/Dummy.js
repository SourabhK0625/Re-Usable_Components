import React, { useEffect, useState } from "react";
import Search from "../SearchComponent/Search";
import PaginationComponent from "../Pagination/Pagination";

const Dummy = () => {
  const [data, setData] = useState([]);
  const [newData, setNewData] = useState([]);
  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos",
        {
          method: "GET",
        }
      );
      const data = await response.json();
      setData(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="dummy-main-div">
      <div>
        <Search
          dataList={data}
          setData={setData}
          handleDefaultData={fetchData}
          searchType={"title"}
        />
      </div>
      <div className="data-main">
        {newData?.length > 0 &&
          newData.map((val, i) => {
            return (
              <div className="data-list">
                {val.id}
                {"   -"}
                {val.title}
              </div>
            );
          })}
        <div className="data-pagination">
          <PaginationComponent value={data} setValue={setNewData} limit={12} />
        </div>
      </div>
    </div>
  );
};

export default Dummy;
