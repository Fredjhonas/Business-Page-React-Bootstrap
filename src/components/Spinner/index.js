import React from "react";
import "./styles.scss";

const Spinner = (props) => {
  return (
    <div className="center">
      <div className="lds-default">
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
  );
};

export default Spinner;
