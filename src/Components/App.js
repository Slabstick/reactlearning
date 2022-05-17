import './App.css';
import React from 'react';
import { Header } from './Header';
import { H1 } from './H1';
import { List } from './List';
import { Footer } from './Footer';


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <H1 />
        <List />
        <Footer />
      </div>
    );
  }
  
}

export default App;
