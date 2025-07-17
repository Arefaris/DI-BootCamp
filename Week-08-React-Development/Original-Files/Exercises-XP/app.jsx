//src/App.js
import React from "react";
import UserFavoriteAnimals from "./UserFavoriteAnimals";
import Exercise from "./Exercise3";

const user = {
  firstName: "Bob",
  lastName: "Dylan",
  favAnimals: ["Horse", "Turtle", "Elephant", "Monkey"]
};

function App() {
  const myelement = <h1>I Love JSX!</h1>;
  const sum = 5 + 5;

  return (
    <div>
      <p>Hello World!</p>
      {myelement}
      <p>React is {sum} times better with JSX</p>

      <h3>{user.firstName}</h3>
      <h3>{user.lastName}</h3>
      <UserFavoriteAnimals favAnimals={user.favAnimals} />

      <Exercise />
    </div>
  );
}

export default App;

//src/UserFavoriteAnimals.js
import React, { Component } from "react";

class UserFavoriteAnimals extends Component {
  render() {
    return (
      <ul>
        {this.props.favAnimals.map((animal, index) => (
          <li key={index}>{animal}</li>
        ))}
      </ul>
    );
  }
}

export default UserFavoriteAnimals;

//src/Exercise3.js
import React, { Component } from "react";
import "./Exercise.css";

const style_header = {
  color: "white",
  backgroundColor: "DodgerBlue",
  padding: "10px",
  fontFamily: "Arial"
};

class Exercise extends Component {
  render() {
    return (
      <div>
        <h1 style={style_header}>This is a heading</h1>
        <p className="para">This is a styled paragraph</p>
        <a href="https://reactjs.org">React Link</a>
        <form>
          <input type="text" placeholder="Type here" />
        </form>
        <img src="https://via.placeholder.com/150" alt="Example" />
        <ul>
          <li>One</li>
          <li>Two</li>
          <li>Three</li>
        </ul>
      </div>
    );
  }
}

export default Exercise;

//src/Exercise.css
.para {
  background-color: #282c34;
  color: white;
  padding: 40px;
  font-family: Arial;
  text-align: center;
}


