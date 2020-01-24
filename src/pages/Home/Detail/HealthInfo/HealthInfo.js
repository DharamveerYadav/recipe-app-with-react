import React from "react";
import { Button } from "react-bootstrap";

const healthInfo = props => {
  return (
    <Button varient="primary" onClick={props.showHealthInfo}>
      Health Info
    </Button>
  );
};

export default healthInfo;
