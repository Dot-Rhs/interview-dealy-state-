import React, { Component } from "react";
import css from "./card.module.css";

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // pics: [],
      // desc: ""
      cards: null,
      cardNo: 6
    };
  }

  // componentDidMount() {
  //   fetch("http://localhost:3001/cards?results=1")
  //     .then(results => {
  //       return results.json();
  //     })
  //     .then(data => {
  //       let card = data.map(card => {
  //         return (
  //           <>
  //             <img src={card.image_url} className={css.image} />
  //             <p>{card.text}</p>
  //           </>
  //         );
  //       });
  //       this.setState({ pics: card, desc: card.text });
  //     });
  // }

  componentDidMount() {
    fetch(`http://localhost:3001/cards?_start=0&_end=${this.state.cardNo}`)
      .then(res => {
        return res.json();
      })
      .then(data =>
        this.setState(() => ({
          cards: data
        }))
      );
  }

  render() {
    return (
      <>
        {this.state.cards &&
          this.state.cards.map(obj => (
            <div className={css.card}>
              <img src={obj.image_url} className={css.upperCard} />
              <div className={css.lowerCard}>
                <div className={css.avatar} />
                <h2 className={css.header}>{obj.title}</h2>
                <h3 className={css.subtitle}>{obj.subtitle}</h3>
                <p className={css.text} dangerouslySetInnerHTML={{}}>
                  {obj.text}
                </p>
              </div>
            </div>
          ))}
      </>
    );
  }
}

export default Card;
