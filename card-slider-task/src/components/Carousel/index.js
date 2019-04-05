import React, { Component } from "react";
import Card from "../Card";
import Css from "./carousel.module.css";

class Carousel extends Component {
  render() {
    return (
      <div className={Css.container}>
        <Card />
      </div>
    );
  }
}

export default Carousel;
