import react from "react";

import "./search-box.stytle.css";

export const SearchBox = props => (
  <input
    className='search-box'
    type='search'
    placeholder='search monsters'
    onChange={props.handleChange}
  />
);