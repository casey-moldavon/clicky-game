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
    message: "Start the round with a click!",
  };
  



  // this function re-arranges the order of elements listed within the array
  randomChar = (array) => {
    var currentIndex = array.length;
    var tempValue;
    var randomIndex;

    while (0 !== currentIndex) {
  
      randomIndex = Math.floor(Math.random() * currentIndex);
      console.log("Random Index: ", randomIndex);
      currentIndex -= 1;
  
      tempValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = tempValue;
    }
    console.log("edited array: ", array);
    return array;
  }

  


  removeFriend = id => {
    // Filter this.state.chars for chars with an id not equal to the id being removed
    const chars = this.state.chars.filter(friend => friend.id !== id);
    // Set this.state.chars equal to the new chars array
    this.setState({ chars });
  };



  // Map over this.state.chars and render a CharacterCard component for each friend object
  render() {
    return (
      <div>
        <Navbar />
        <Wrapper>
          <Score>Score displays here</Score>
          {this.state.chars.map(char => (
              <CharacterCard
                // charSelected={this.charSelected}
                removeFriend={this.removeFriend}
                id={char.id}
                key={char.id}
                name={char.name}
                image={char.image}
              />
            ))}
        </Wrapper>
      </div>
    );
  }
}

export default App;




// const win = "Yay! that's correct!";
// const fail = "You should play some more memory games";



// charSelected = id => {

// }



  // correct = () => {
  //   if (this.state.score + 1 > this.state.topScore) {
  //     this.setState({topScore: this.state.topScore + 1})
  //   }
  //   if (this.state.score + 1 === this.statemaxScore) {
  //     this.setState({score: this.state.score +1, win})
  //   } else {
  //     this.setState({score: this.state.score +1, fail})
  //   }
  // }

  // wrong = () => {
  //   this.setState({score: 0, fail})
  //   const updatedIcons = this.state.characters.map(char => charSelected === (true) ? {...char, isClicked: false} : char)
  //   return updatedIcons
  // }

  // resetGame = (currentIcons) => {
  //   if(this.state.score + 1 === this.state.maxScore) {
  //     this.setState({score: 0, topScore: 0})
  //     const updatedIcons = currentIcons.map(char => (true) ? {...char, charSelected: false} : char)
  //     return updatedIcons
  //   } else {
  //     return currentIcons
  //   }
  // }