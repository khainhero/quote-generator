import React, { Component } from 'react';

import QuoteThing from './quotemachine';
import './App.css';


class App extends Component {
  constructor(props){
    super(props);
     this.state ={
      quotes: [],
    }
  
  }

   render() {

    return (


        
        <QuoteThing />
       

      
    );
  }
}


