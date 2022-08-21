import { Component, React } from "react";
import CardList from './components/card-list/card-list.component';
import SearchBox from "./components/search-box/search-box.component";
import './app.css'
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
        <SearchBox onChangeHandler = {onSearchChange} placeholder = 'search monsters' className = 'monsters-search-box'/>
        </header>
        <CardList monsters ={filteredMonsters}/>
      </div>
    );
  }
}

export default App;


