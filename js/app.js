import React from "react"
import ReactDOM from "react-dom"
import SliderComponent from "./SliderComponent"
import SliderLogic from "./SliderComponent"

export default class SliderData extends React.Component {
  render() {

    const title = "Welcome, Ben!";
    const SlideSources = [
      {
        slide: 1,
        url: "img/slide-1.jpg",
        title: "Test Slide One"
      },
      {
        slide: 2,
        url: "img/slide-2.jpg",
        title: "Test Slide Two"
      },
      {
        slide: 3,
        url: "img/slide-3.jpg",
        title: "Test Slide Three"
      },
    ];

    return (
      <div>
        <SliderComponent title={title} SlideSources={SlideSources} />
      </div>
    );
  }
}

ReactDOM.render(<SliderData />, document.getElementById('slider'))
