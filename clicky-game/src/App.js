import React, { Component } from "react";
import IconCard from "./components/IconCard";
import Wrapper from "./components/Wrapper";
import icons from "./icons.json";

class App extends Component {
  // Setting this.state.icons to the icons json array
  state = {
    icons
  };

  iconSelected = id => {
    // Filter this.state.icons for icons with an id not equal to the id being removed
    const icons = this.state.icons.filter(icon => icon.id !== id);
    // Set this.state.icons equal to the new icons array
    this.setState({ icons });
  };

  // Map over this.state.icons and render a IconCard component for each icon object
  render() {
    return (
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
    );
  }
}

export default App;