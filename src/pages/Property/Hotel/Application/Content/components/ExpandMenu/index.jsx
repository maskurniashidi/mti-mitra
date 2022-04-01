import React, { useState } from "react";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";

import "./styles.scss";

const ExpandMenu = ({ title, children }) => {
  const [expandState, setExpandState] = useState(false);

  return (
    <div className={`expand-menu ${expandState ? "active" : ""}`}>
      <div className="expand-header">
        <span className="header-title">{title}</span>
        <span
          className="header-action"
          to="#"
          onClick={() => setExpandState((value) => !value)}
        >
          {expandState ? (
            <>
              Perkecil
              <FaChevronUp />
            </>
          ) : (
            <>
              Perbesar
              <FaChevronDown />
            </>
          )}
        </span>
      </div>
      {expandState && <div className="expand-body">{children}</div>}
    </div>
  );
};

export default ExpandMenu;
