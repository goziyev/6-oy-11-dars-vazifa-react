import React from "react";
import "./App.css";
export default function App() {
  return (
    <div className="container">
      <nav className="nav">
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
        <li>
          <h3>Landing</h3>
        </li>
        <li>
          <a className="button" href="#">
            Buy Now
          </a>
        </li>
      </nav>
      <div className="hero-texts">
        <p className="title">Introduce Your Product Quickly & Effectively</p>
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
          felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
          consequat massa quis enim.
        </p>
        <div className="buttons">
          <button>Purchase UI Kit</button>
          <button>Learn  More</button>
        </div>
      </div>
    </div>
  );
}
