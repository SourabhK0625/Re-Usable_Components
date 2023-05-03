import React, { useEffect, useState } from "react";

const Search = ({ dataList, searchType, setData, handleDefaultData }) => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearchFilter = (event) => {
    const searchWord = event.target.value;
    setSearchValue(searchWord);
    const newFilter = dataList?.filter((data) => {
      if (data[searchType]?.toLowerCase().includes(searchWord.toLowerCase())) {
        return data[searchType]
          .toLowerCase()
          .includes(searchWord.toLowerCase());
      }
    });

    if (searchWord === "") {
      handleDefaultData();
    } else {
      setData(newFilter);
    }
  };

  return (
    <div className="search-main">
      <div>
        <h1>This is a Searh component</h1>
      </div>
      <div className="search-main-container">
        <i class="fa fa-search" aria-hidden="true"></i>
        <input
          type="search"
          placeholder="Search Here.."
          value={searchValue}
          onChange={handleSearchFilter}
        />
      </div>
    </div>
  );
};

export default Search;
