import React, { Component } from 'react';
import './App.css';

import Navigation from "./components/navigation/index";
import ItemList from "./components/items-list/index";
import Comments from "./components/comments/index";

import { items } from './data';

class App extends Component {

  state = {
      task : items[0]
  };

  setActiveItem = item => {
      this.setState({
          task: item
      });
  };

  render() {

    const { task } = this.state;

    return (
        <div className="page">

            <Navigation/>

            <main className="main container">
                <div className="row">
                    <div className="col-xs-12 col-md-6">

                        <ItemList items={ items } setActive={ this.setActiveItem } />

                    </div>
                    <div className="col-xs-12 col-md-6">

                        <Comments item={ task }/>

                    </div>

                </div>
            </main>
        </div>
    );
  }
}



export default App;
