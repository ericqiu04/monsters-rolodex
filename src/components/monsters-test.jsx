import { React, Component } from "react";

class Monsters extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users").then((response) =>
      response.json().then((users) =>
        this.setState(() => {
          return { monsters: users };
        })
      )
    );

  }
  render(){return(<>
    {this.state.monsters.map((monster) => {
    return (
      <div key={monster.id}>
        <h1>{monster.name}</h1>
      </div>
    );
  })}
  
  </>);}
}

export default Monsters;
