import React from "react"
import 'tachyons';

export default function SearchBox({ change }) {
  return (
    <div className="tc">
      <input
        className="bg-lightest-blue pa3 b--black"
        onChange={change}
        type="search"
        placeholder="Search Robot"
      ></input>
    </div>
  );
}