import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import StyledSwitch from "../../../StyledSwitch/StyledSwitch";

import "./InputSwitch.scss";

const InputSwitch = (props) => {
  const { callback, ...passedProps } = props;

  const [checked, setChecked] = useState(false);

  const handleChange = (nextChecked) => {
    setChecked(nextChecked);
    callback && callback(nextChecked);
  };

  return (
    <div className="input-switch">
      <Form.Control {...passedProps} />
      <div className="switch-toggle">
        <StyledSwitch callback={handleChange} />
      </div>
    </div>
  );
};

export default InputSwitch;
