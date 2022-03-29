import React from "react";

import "./StyledCheck.scss";

const StyledCheck = ({ id, name, label, callback }) => {
  return (
    <div className="styled-check-container">
      <input
        type="checkbox"
        id={id}
        name={name}
        className="styled-check"
        onChange={(event) => callback && callback(event)}
      />
      <label className="styled-check-box" htmlFor={id}>
        {label}
      </label>
    </div>
  );
};

export default StyledCheck;
