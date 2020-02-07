import React, { Component } from "react";
import CharacterCard from "./components/CharacterCard";
import Wrapper from "./components/Wrapper";
import Score from "./components/Score";
import Navbar from "./components/Navbar";
import chars from "./chars.json";

class App extends Component {

  // Setting this.state.chars to the chars json array
  state = {
    chars: chars,
    score: 0,
    topScore: 0,
    maxScore: 24,
    message: "Start the round with a click!"
  };


  charSelect = id => {
    var count = this.state.chars.count;
    count += 1

    if (count > 1) {
      this.setState({ score: 0 })
    }
    else {
      this.setState({ score: 20 })
    }
console.log(this.state.score);
  }


  


  // this function re-arranges the order of elements listed within the array
  randomChar = (array) => {
    var currentIndex = array.length;
    var tempValue;
    var randomIndex;

    while (0 !== currentIndex) {
  
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      tempValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = tempValue;
    }
    return array;
  }


  


  // removeFriend = id => {
  //   // Filter this.state.chars for chars with an id not equal to the id being removed
  //   const chars = this.state.chars.filter(friend => friend.id !== id);
  //   // Set this.state.chars equal to the new chars array
  //   this.setState({ chars });
  // };



  // Map over this.state.chars and render a CharacterCard component for each friend object
  render() {
    return (
      <div>
        <Navbar />
        <Wrapper>
          <Score
            score={this.state.score}
            topScore={this.state.topScore}
            message={this.state.message}>Score displays here</Score>

          {this.state.chars.map(char => (
              <CharacterCard
                // charSelected={this.charSelected}
                charSelect={this.charSelect}
                id={char.id}
                key={char.id}
                name={char.name}
                image={char.image}
                count={char.count}
              />
            ))}
        </Wrapper>
      </div>
    );
  }
}

export default App;