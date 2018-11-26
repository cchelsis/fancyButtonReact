import React, { Component } from 'react';
import Header from './Header';
import {Button} from './button';


export default class App extends Component {
  constructor(props) {
    super(props)

    this.state= {
      count: 0,
      asdf: "",
      hshs: 90
    }
  }

  increment(arg) {
      this.setState({count: this.state.count + arg}) 
    }
    render() {
      return (
        <div>  
          <Header />
          <div className="center">
        {/* counter button */}
            <Button title="Counting Button" grace={() => {this.increment(1)}}/>
          </div>
          <div className="center">
            <div>{this.state.count}</div>
          </div>
          <Button className="" title="3 x Counter Button" body="our amazing content" grace={() => {this.increment(3)}}/>
          <br></br>
          <Button title="Third Button"/>
          <br></br>
          <Button title="Our Amazing Button" body="our amazing content" count={this.state.count} />
          
        </div>
      );
    }
  }

