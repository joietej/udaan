import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Search from "./components/search/Search";
import { useDispatch } from "react-redux";

const App = () => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch({ type: "AUTH_GET" });
  }, [dispatch]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Udaan</h1>
      </header>
      <div>
        <Search />
      </div>
    </div>
  );
};

export default App;
