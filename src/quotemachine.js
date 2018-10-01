import React, { Component, Fragment } from 'react';
import { Button } from 'react-bootstrap';
import './App.css';
import $ from 'jquery';
class App extends Component {
constructor(){
    super();
    this.state={
        quote: {
            author: 'Brooklyn Adventure',
            quote : 'Never give up, always go for it even when everyone says no!'
        },
        hasQuote: false,
        colors: {
            finalcolor: '',
        }
    }
    this.END_POINT = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json';
    
}



getQuote = event =>{
   fetch(this.END_POINT)
   .then(response => response.json())
   .then(data =>{
    let noob= data.quotes[Math.floor(Math.random()* data.quotes.length)];//random quote
    //data.quotes[0] is now noob
    let colorArr=  ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', 
    '#9b59b6', '#FB6964', '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857"];
    let noobColors = colorArr[Math.floor(Math.random()* colorArr.length)];//random color
            
  
    if(noob.quote && noob.author){
       
        let { quote, colors } = this.state;
        quote.author = noob.author;
        quote.quote = noob.quote;
        colors.finalcolor = noobColors;
       
        this.setState({ quote}, () =>{
            if(this.state.hasQuote === false){
               
                this.setState({ hasQuote:true})
            }
            
        });
      
    }
    else{
        return console.error('No quote found 404');
    } 

   });
}



//data.quotes[0] has an object with an quote and author
    render(){
        let noobQuote = this.state.quote.quote;
        let noobAuthor= this.state.quote.author;
        let noobColor = this.state.colors.finalcolor;
        const { hasQuote } = this.state;
        
        const twitter = `https://twitter.com/intent/tweet?text="${noobQuote}" - ${noobAuthor}`;
        console.log(twitter);
        $(".bgColor").parent().css("background-color",noobColor);
        $("#new-quote").css("background-color",noobColor);
        $("#text").css("color",noobColor);
        $("#author").css("color",noobColor);
        $("#new-quote").css("color","white");
        $("#tweet-quote").css("background-color",noobColor);
        return (
              
            <Fragment>
   <header className="bgColor">
    <div  id="quote-box">
   
      <h1 className="color1" id="text">"{noobQuote}"</h1>
      
      <p id="author">- {noobAuthor}</p>
      
      <a href={twitter} className="fa fa-twitter"
       id="tweet-quote" target="_blank"></a> <br />
      
      <button className="btn btn-danger" id="new-quote" type="button"
       onClick={this.getQuote}>New Quote</button> 
     

      </div>
        <div className="me">
         
          <p>By: <a className="colorlink"  
          href="https://pardesiadventures.com/" target="_blank" >Farooq</a></p>
       
        </div>
      
      </header>
             
               
               </Fragment>
             
        )
    }
}

export default App;