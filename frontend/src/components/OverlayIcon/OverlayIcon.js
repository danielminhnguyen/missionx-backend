import React, { Component } from "react";
// import { studentCreateIcon } from "../../dataset";
import "./OverlayIcon.scss";

export default class OverlayIcon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.data,
    };
  }

  render() {
    let icons = this.state.data.map((item) => (
      <OverlayIconCoponent
        key={item.id}
        overlay={item.overlay}
        bg={item.background}
        title={item.title}
      />
    ));
    return <div className="icon-wrapper">{icons}</div>;
  }
}

function OverlayIconCoponent(props) {
  let style;
  if (props.bg !== "") {
    style = { backgroundImage: `url(${props.bg})` };
  } else {
    style = { backgroundImage: "" };
  }

  return (
    <div className="icon" style={style}>
      <img src={props.overlay} alt="" />
      <span>{props.title}</span>
    </div>
  );
}
