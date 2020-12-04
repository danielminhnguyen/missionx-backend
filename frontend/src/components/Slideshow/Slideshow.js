import React, { Component } from "react";
// import { slideshow } from "../../dataset";
import "./Slideshow.scss";

class SlideShow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentslide: 1,
      // data: slideshow,
      data: props.data,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(id) {
    // console.log("set " + id);
    this.setState({ currentslide: id });
  }

  render() {
    let selectslide = this.state.data.filter((item) => item.id === this.state.currentslide);
    let slides = selectslide.map((item) => (
      <Slide src={item.imagePath} key={item.id} id={item.id} />
    ));
    // console.log(slides);

    // let slides = <Slide src={selectslide.imagePath} key={selectslide.id} id={selectslide.id} />;
    let dots = this.state.data.map((item) => (
      <SlideController key={item.id} handleClick={this.handleClick} id={item.id} />
    ));
    return (
      <div className="slideshow">
        {slides}
        <div className="slide-controller">{dots}</div>
      </div>
    );
  }
}

function Slide(props) {
  return (
    <div className="slide">
      <img src={props.src} alt=""></img>
    </div>
  );
}

function SlideController(props) {
  return <span className="slide-dot" onClick={() => props.handleClick(props.id)}></span>;
}

export default SlideShow;
