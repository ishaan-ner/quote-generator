import React from "react";
import "./App.css";
import axios from "axios";
import QuoteBox from "./components/QuoteBox";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      quotes: [],
      errors: {},
      hasLoaded: false,
      colors: ["#b6fc03", "#03e3fc", "#ca03fc", "#fc036f", "#fc4e03"],
      currentQuote: {},
      currentColor: "",
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    const getQuotes = async () => {
      const response = await axios.get(
        "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"
      );
      const quotes = await response.data.quotes;
      const currentColor = this.setRandomColor();
      this.setState({
        quotes,
        hasLoaded: true,
        currentQuote: quotes[this.getRandomInteger()],
        currentColor,
      });
    };
    getQuotes();
  }

  handleClick() {
    const currentQuote = this.state.quotes[this.getRandomInteger()];
    const currentColor = this.setRandomColor();
    this.setState({ currentQuote, currentColor });
  }

  setRandomColor() {
    const randomInteger = Math.floor(Math.random() * this.state.colors.length);
    const color = this.state.colors[randomInteger];
    return color;
  }

  getRandomInteger() {
    const randomInteger = Math.floor(Math.random() * 101);
    return randomInteger;
  }

  render() {
    document.body.style.backgroundColor = this.state.currentColor;
    const { currentQuote, currentColor } = this.state;
    return (
      this.state.hasLoaded && (
        <QuoteBox
          quote={currentQuote.quote}
          author={currentQuote.author}
          handleClick={this.handleClick}
          currentColor={currentColor}
        />
      )
    );
  }
}

export default App;
