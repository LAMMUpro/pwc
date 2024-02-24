import define from "preact-custom-element";
import { Component, html } from "htm/preact";

class MyCounter extends Component {
  state = {
    count: 0,
  };

  inc = () => {
    this.setState((prev) => ({ count: prev.count + 1 }));
  };

  dec = () => {
    this.setState((prev) => ({ count: prev.count - 1 }));
  };

  render(props, state) {
    return html`
      <style>
        * {
          font-size: 30px;
        }

        span {
          display: inline-block;
          text-align: center;
        }

        button {
          width: 4rem;
          height: 4rem;
          border: none;
          border-radius: 10px;
          background-color: seagreen;
          color: white;
        }
      </style>
      <div style="display: flex; flex-direction: column;">
        <span>作者: lammu</span>
        <div>
          <button onClick=${this.dec}>
            -
          </button>
          <span>${state.count}</span>
          <button onClick=${this.inc}>
            +
          </button>
        </div>
      </div>
    `;
  }
}

define(MyCounter, "my-counter", ["count"], { shadow: true });
