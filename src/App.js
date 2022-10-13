//you have to import component only if you're using CLASS
// import { Component } from 'react';
import { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import CardList from './components/card-list/card-list';
import SearchBox from './components/search-box/search-box';

//doing the App in functional way

const App =()=> {

  const [monsters, setMonsters] =useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters)
  const [searchField, setSearchField] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response)=> response.json())
      .then((users) => setMonsters(users));
  }, []);

  useEffect(() =>{
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField);
    });


    setFilteredMonsters(newFilteredMonsters);
    
  }, [monsters, searchField])


  const onSearchChange = (event)=>{
        const searchFieldString = event.target.value.toLowerCase();
        setSearchField(searchFieldString);
      };
  

  return (
    <div className="App">
      <h1 className="app-title">Monsters Rolodex</h1>
      <SearchBox onChangeHandler={ onSearchChange } placeholder='search monsters' className= 'search-box'/>
      <CardList monsters={ filteredMonsters }/>
    </div>
  );
}

//CLASS
// class App extends Component {
//   constructor(){
//     super();

//     this.state = {
//       monsters: [],
//       searchField: '',
//     };
//   }

//   componentDidMount(){
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then((response)=> response.json())
//       .then((users) => this.setState(()=>{
//         return {monsters: users}
//       }
//       ));
//   }

//   onSearchChange = (event)=>{
//     console.log(event.target.value);
//     const searchField = event.target.value.toLowerCase();
//     this.setState(()=>{
//       return { searchField };
//     });
//   }

//   render(){
//     const { monsters, searchField } = this.state;
//     const { onSearchChange } = this;
//     const filteredMonsters = monsters.filter((monster) => {
//       return monster.name.toLowerCase().includes(searchField);
//     });

//     return (
//       <div className="App">
//         <h1 className="app-title">Monsters Rolodex</h1>
//         <SearchBox onChangeHandler={ onSearchChange } placeholder='search monsters' className= 'search-box'/>
//         <CardList monsters={ filteredMonsters }/>
//       </div>
//     );
//   }
// }


//FUNCTION/HOOK WAY
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
