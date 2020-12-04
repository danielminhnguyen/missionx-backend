import React, { Component } from "react";
import { SubmissionData } from "../../dataset";
import "../SubmissionDisplay/SubmissionDisplay.scss";

export default class HelpRequest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: SubmissionData,
      //   active: 0,
    };
    this.handleClick = this.handleClick.bind(this);
    this.selectClick = this.selectClick.bind(this);
  }

  handleClick(id) {
    // console.log("click");
    if (this.state.active === id) {
      this.setState({ active: 0 });
    } else {
      this.setState({ active: id });
    }
  }

  selectClick(id, event) {
    // console.log("click");
    // console.log(event.target.checked);
    let a = this.state.data.slice();
    for (let i = 0; i < a.length; i++) {
      if (this.state.data[i].id === id) {
        a[i].select = event.target.checked;
      }
    }
    this.setState({ data: a });
  }

  render() {
    console.log(this.state.active);
    let projects = this.state.data.map((item) => (
      <HelpRequestComponent
        key={item.id}
        name={item.name}
        profileURL={item.profileURL}
        projectURL={item.projectURL}
        gender={item.gender}
        timestamp={item.timestamp}
        handleClick={this.handleClick}
        selectClick={this.selectClick}
        open={this.state.active}
        id={item.id}
      />
    ));
    return <div className="submissionContainer">{projects}</div>;
  }
}

function HelpRequestComponent(props) {
  // Determine his or her
  let gen;
  if (props.gender === "M") {
    gen = " his";
  } else if (props.gender === "F") {
    gen = " her";
  } else {
    gen = "";
  }

  // Extract Date and Time
  let d = new Date(props.timestamp);
  let time = d.toLocaleString("en-US", { hour: "numeric", minute: "numeric", hour12: true });
  let stringDate = d.toString();
  let date = `${stringDate.substring(0, 3)} ${d.getDate()} ${stringDate.substring(
    4,
    7
  )} ${d.getFullYear()}`;

  //
  return (
    <div className="submission-item">
      <input type="checkbox" onClick={(event) => props.selectClick(props.id, event)} />
      <div className="project-wrapper" onClick={() => props.handleClick(props.id)}>
        <img src={props.profileURL} alt="" />
        <div className="submission-message">
          <span className="status">
            {props.name} needs help with{gen} project
          </span>
          <span className={`teacher-project-image ${props.open === props.id ? "active" : ""}`}>
            <img src={props.projectURL} alt="" />
            <button>Enlarge Photo</button>
          </span>
        </div>
        <div className="submission-timestamp">
          <span>{date}</span>
          <span>{time}</span>
        </div>
      </div>
    </div>
  );
}
