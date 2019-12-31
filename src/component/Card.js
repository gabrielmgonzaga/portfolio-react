import React, { Component } from 'react';

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: [],
    };
  }
  componentDidMount() {
    fetch('https://api.nasa.gov/planetary/apod?api_key=nJMzp3K6HjnXU3Y4LyZDK3XLDxuu3Gos32oxLbLF')
      .then(response => response.json())
      .then(data => this.setState({ image: data }));
  }

  render() {
    let { image } = this.state;

    return (
        <section>
          <img src={image.hdurl} alt="Nasa image of the day" />
        </section>
    )
  }
}

export default Card
