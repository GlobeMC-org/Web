import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./coords.scss";

export const Coords = () => {
  const [resultX, setResultX] = useState(0.01);
  const [resultZ, setResultZ] = useState(0.01);

  const handleCalculate = (event: any) => {
    event.preventDefault();
    const latitude = parseFloat(event.target.elements.from[0].value);
    const longitude = parseFloat(event.target.elements.from[1].value);

    const x = (latitude / (360 / 12672)) * 16;
    const z = -(longitude / (180 / 6912)) * 16;

    const result_x: number = Math.round(x);
    const result_z: number = Math.round(z);

    setResultX(result_x);
    setResultZ(result_z);
  };

  return (
    <>
      <h2>Coordianates calculator</h2>
      <p>Converts real-world coordinates into GlobeMC coordinates</p>
      <Form style={{ marginTop: "1rem" }} onSubmit={handleCalculate}>
        <Form.Label style={{ cursor: "text" }}>
          Please use float values (41.9028 instead of 41°54' N)
        </Form.Label>
        <Form.Group className="mb-3">
          <div style={{ display: "flex", flexDirection: "row" }}>
            <Form.Control
              name="from"
              placeholder="Latitude"
              style={{ marginRight: "20px" }}
            />
            <Form.Control name="from" placeholder="Longitude" />
          </div>
        </Form.Group>

        <Form.Group className="mb-3">
          <Button variant="primary" type="submit">
            Calculate
          </Button>
        </Form.Group>

        {resultX !== 0.01 && resultZ !== 0.01 && (
          <>
            <Form.Label>Results X and Z:</Form.Label>
            <Form.Group className="mb-3">
              <div style={{ display: "flex", flexDirection: "row" }}>
                <Form.Control
                  type="text"
                  placeholder={String(resultX)}
                  defaultValue={resultX}
                  aria-label="X Output"
                  disabled
                  readOnly
                  style={{ marginRight: "20px", cursor: "text" }}
                />
                <Form.Control
                  type="text"
                  placeholder={String(resultZ)}
                  defaultValue={resultZ}
                  aria-label="Z Output"
                  disabled
                  readOnly
                  style={{ cursor: "text" }}
                />
              </div>
            </Form.Group>
          </>
        )}
      </Form>
    </>
  );
};
