import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Search from "./components/search/Search";
import { useDispatch } from "react-redux";
import { Container } from "shards-react";

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
      <Container>
        <Search />
      </Container>
    </div>
  );
};

export default App;
