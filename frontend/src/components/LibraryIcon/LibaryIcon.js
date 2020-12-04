import React, { Component } from "react";
import "./LibraryIcon.scss";
import { ProjectLibraryData } from "./ProjectLibraryData";

export default class LibaryIcon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ProjectLibraryData,
    };
  }

  render() {
    let items = this.state.data.map((item) => (
      <LibaryIconComponent
        key={item.id}
        title={item.title}
        imgURL={item.imgURL}
        activity={item.activityType}
        subscriptionType={item.subscriptionType}
        yearLevel={item.yearLevel}
        subject={item.subject}
        skillLevel={item.skillLevel}
      />
    ));
    return (
      <div className="library-item-wrapper" id="style">
        {items}
      </div>
    );
  }
}

function LibaryIconComponent(props) {
  return (
    <div className="library-item">
      <img src={props.imgURL} alt="" />
      <h3 className="libary-item-title">{props.title}</h3>
      <div className="level-activity">
        <span>
          {props.skillLevel} | {props.activity}
        </span>
      </div>
    </div>
  );
}
