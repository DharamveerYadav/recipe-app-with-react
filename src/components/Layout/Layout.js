import React from "react";
import Aux from "../Auxilary/Auxilary";
import Nav from "../../pages/Nav";

const layout = props => {
  return (
    <Aux>
      <Nav />
      <main>{props.children}</main>
    </Aux>
  );
};

export default layout;
