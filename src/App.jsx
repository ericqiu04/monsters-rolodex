import { Component, React } from "react";


class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField : '',
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users").then((response) =>
      response.json().then((users) => this.setState(() => {
        return {monsters:users}
      }))
    );
  }

  onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();

    this.setState(() => {
      return { searchField };
    });
  };

  onSearch = (monster) => {
    return monster.name.toLocaleLowerCase().includes(this.state.searchField);
  }
  

  render() {
    
    const {monsters} = this.state;
    const {onSearchChange, onSearch} = this;
    
    const filteredMonsters = monsters.filter(onSearch);


    return (
      <div className="App">
        <header className="App-header">
        <input className = "search-box" type = 'search' placeholder = 'Search Monsters' onChange={onSearchChange }/>
          {filteredMonsters.map((monster) => {
            return (
              <div key={monster.id}>
                <h1>{monster.name}</h1>
              </div>
            );
          })}
        </header>
      </div>
    );
  }
}

export default App;


