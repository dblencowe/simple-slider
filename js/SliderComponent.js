import React from "react"

export default class SliderComponent extends React.Component {
  render() {

    return(
      <div className="slider-container">

        {
          this.props.SlideSources.map(function(source) {
            return (
              <div className="slide" key={source.slide}>
                <img src={source.url} alt="{source.title}"/>
                <h2>{source.title}</h2>
              </div>
            );
          })
        }

      </div>
    );
  }
}
