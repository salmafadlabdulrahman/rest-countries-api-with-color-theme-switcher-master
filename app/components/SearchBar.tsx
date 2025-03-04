"use client";

import { useState } from "react";
import "../globals.scss";

const regions = ["Africa", "America", "Asia", "Europe", "Oceania"];

const SearchBar = () => {
  const [openList, setOpenList] = useState(false);
  return (
    <div className="searching-fields">
      <div className="search-bar">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke={"currentColor"}
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </div>

        <input type="text" placeholder="Search for a country..." />
      </div>
      <div>
        <div
          className="filter-regions"
          onClick={() => setOpenList((prev) => !prev)}
        >
          <p>Filter By Region</p>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          </div>
        </div>

        <div>
          <div className="regions">
            {openList
              ? regions.map((region, i) => <p key={i} onClick={() => setOpenList(false)}>{region}</p>)
              : ""}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
