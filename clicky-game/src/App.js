import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";
import IconCard from "./components/IconCard";
import icons from "./icons.json";

class App extends Component {
  // Setting this.state.icons to the icons json array
  state = {
    icons: icons,
    score: 0,
    topScore: 0,
    maxScore: 24,
    message: "Start the round with a click!",
    win: "Yay! that's correct!",
    fail: "You should play some more memory games"
  };



  displayIcons = (array) => {
    let randomIndex = Math.floor(Math.random() * currentIndex);

    for (var i = array.length; i >= 0; i --){
      array[i]
    }

  };





  correct = () => {
    if (this.state.score + 1 > this.state.topScore) {
      this.setState({topScore: this.state.topScore + 1})
    }
    if (this.state.score + 1 === this.statemaxScore) {
      this.setState({score: this.state.score +1, win})
    } else {
      this.setState({score: this.state.score +1, fail})
    }
  }

  wrong = () => {
    this.setState({score: 0, fail})
    const updatedIcons = this.state.characters.map(char => iconSelected === (true) ? {...char, isClicked: false} : char)
    return updatedIcons
  }

  resetGame = (currentIcons) => {
    if(this.state.score + 1 === this.state.maxScore) {
      this.setState({score: 0, topScore: 0})
      const updatedIcons = currentIcons.map(char => (true) ? {...char, iconSelected: false} : char)
      return updatedIcons
    } else {
      return currentIcons
    }
  }





displayIcons = () => {
    return (
      <div>
        <Navbar />;
        <Wrapper>
          {this.state.icons.map(icon => (
            <IconCard
              iconSelected={this.iconSelected}
              id={icon.id}
              key={icon.id}
              name={icon.name}
              image={icon.image}
            />
          ))}
        </Wrapper>
      </div>
    )
  }
}

export default App;