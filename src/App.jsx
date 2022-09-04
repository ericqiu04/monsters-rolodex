import { React, useState, useEffect } from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
import "./app.css";

const App = () => {
  const [searchField, setSearchField] = useState(""); //gives back an array of 2 values
  const [monsters, setMonsters] = useState([]);
  const[filteredMonsters, setFilteredMonsters] = useState(monsters);
 

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users").then((response) =>
      response.json().then((users) => setMonsters(users))
    );
  }, []);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });
    setFilteredMonsters(newFilteredMonsters);
  },[monsters, searchField])

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };
  
  return (
    <div className="App">
      <h1 id="app-title">Monsters Rolodex</h1>
      <header className="App-header">
        <SearchBox
          onChangeHandler={onSearchChange}
          placeholder="search monsters"
          className="monsters-search-box"
        />
      </header>
      <CardList monsters={filteredMonsters} />
    </div>
  );
};
/*
class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField : '',
    };
  }

  componentDidMount() {
    
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
      <h1 id = "app-title">Monsters Rolodex</h1>
        <header className="App-header">
        <SearchBox onChangeHandler = {onSearchChange} placeholder = 'search monsters' className = 'monsters-search-box'/>
        </header>
        <CardList monsters ={filteredMonsters}/>
      </div>
    );
  }
}
*/

export default App;
