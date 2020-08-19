import React from "react";

const QuoteBox = (props) => {
  return (
    <div id="wrapper">
      <div id="quote-box">
        <div className="quote-text">
          <i className="fa fa-quote-left"></i>
          <span id="text">{props.quote}</span>
        </div>
        <div className="quote-author">
          <span>-</span>
          <span id="author">{props.author}</span>
        </div>
        <div className="buttons">
          <a
            className="button"
            id="tweet-quote"
            href="twitter.com/intent/tweet"
            target="_blank"
            style={{ backgroundColor: props.currentColor }}
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a
            className="button"
            id="tumblr-quote"
            href="tumblr.com/login"
            style={{ backgroundColor: props.currentColor }}
          >
            <i className="fab fa-tumblr"></i>
          </a>
          <button
            className="button"
            id="new-quote"
            onClick={props.handleClick}
            style={{ backgroundColor: props.currentColor }}
          >
            New Quote
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuoteBox;
