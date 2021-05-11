import logo from './logo.svg';
import './App.css';
import Search from "./components/Search";
import Result from "./components/Result";
import { Router } from "@reach/router";

function App() {
  return (
    <div className="App">
      <Search></Search>
      <Router>
        <Result path="/:categoryTerm/:id"></Result>
      </Router>
    </div>
  );
}

export default App;
