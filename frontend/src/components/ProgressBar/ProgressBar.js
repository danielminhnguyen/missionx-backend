import React from "react";
import "./ProgressBar.scss";

export default function ProgressBar(props) {
  let dom = [];
  for (let i = 0; i < props.repeat; i++) {
    dom.push(<ProgressBarComponent />);
  }
  return <div className="circle-wrapper">{dom}</div>;
}

function ProgressBarComponent() {
  return <div className="progress-circle"></div>;
}
