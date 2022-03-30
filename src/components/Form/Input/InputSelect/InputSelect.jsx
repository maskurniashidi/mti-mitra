import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";

import "./InputSelect.scss";

const InputSelect = (props) => {
  const [value, setValue] = useState("");
  const [unit, setUnit] = useState("km");

  useEffect(() => {
    if (unit === "km") {
      setValue((value) => value / 1000);
    } else if (unit === "m") {
      setValue((value) => value * 1000);
    }
  }, [unit]);

  return (
    <div className="input-select">
      <Form.Control
        {...props}
        onChange={(event) =>
          setValue(event.target.value.toString().replace(",", "."))
        }
        value={value.toString().replace(".", ",")}
      />
      <div className="select">
        <Form.Select
          value={unit}
          onChange={(event) => setUnit(event.target.value)}
        >
          <option value="km">KM</option>
          <option value="m">M</option>
        </Form.Select>
      </div>
    </div>
  );
};

export default InputSelect;
