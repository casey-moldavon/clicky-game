import React, { Component } from "react";
import CharacterCard from "./components/CharacterCard";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";
import chars from "./chars.json";
import "./App.css";

class App extends Component {

  // Setting this.state.chars to the chars json array
  state = {
    chars: chars,
    unChars: chars,
    score: 0,
    topScore: 0,
    maxScore: 24,
    message: "Start the round with a click!"
  };  


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


  // This function is called onClick and collects the player's score and tracks correct / incorrect choices
  charSelect = id => {
    const findChar = this.state.unChars.find(item => item.id === id);

    if (findChar === undefined) {
        this.setState({ 
            message: "Already selected this Character!",
            topScore: (this.state.score > this.state.topScore) ? this.state.score : this.state.topScore,
            score: 0,
            chars: chars,
            unChars: chars
        });
    }
    else {
        const newCharacter = this.state.unChars.filter(item => item.id !== id);
        
        this.setState({ 
            message: "Good! Keep Trying!",
            score: this.state.score + 1,
            chars: chars,
            unChars: newCharacter
        });
    }
    console.log(this.state.score);
    this.randomChar(chars);
};


  // Map over this.state.chars and render a CharacterCard component for each friend object
  render() {
    return (
      <div>

        <Navbar
          score={this.state.score}
          topScore={this.state.topScore}
        />
        
        <Wrapper>
          {this.state.chars.map(char => (
              <CharacterCard
                // charSelected={this.charSelected}
                id={char.id}
                key={char.id}
                image={char.image}
                name={char.name}
                charSelect={this.charSelect} 
                score={this.state.score}
              />
            ))}
        </Wrapper>
      </div>
    );
  }
}

export default App;