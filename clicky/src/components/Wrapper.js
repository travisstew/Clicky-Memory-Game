import React, { Component } from 'react';
import NavBar from './NavBar';
import Header from './Header';
import Cards from './Cards';

class Wrapper extends Component {
  
  state = {  
    cards:[
    {
      id:1,
      picked:false,
      image: 'green'
    },
  
    {
      id:2,
      picked:false,
      image: 'black'
    },
  
    {
      id:3,
      picked:false,
      image: 'yellow'
    },
  
  ],

  score: 0 ,
  topScore: 0 

  }



  cardSelectHandle =(card)=>{
    const newCard = [...this.state.cards];
    const index = newCard.indexOf(card);
    if(this.state.score >=this.state.topScore ){
      var newTopScore = this.state.topScore +1;
      if(newTopScore === (this.state.cards.length + 1)){
        newTopScore--;
      }
      this.setState({topScore:newTopScore})
    }

    if(newCard[index].picked === true ){
        const newCard2= [...this.state.cards];
        newCard2.map(c=> c.picked =false );
        this.setState({score: 0, cards:newCard2});

    }else{
       newCard[index].picked = true;
       const newScore = this.state.score +1;
      // if(this.state.score > this.state.topScore){
        
      // }
      //  const newTopScore = this.state.topScore +1;
       
       newCard.sort(()=> Math.random()-0.5); 
        this.setState({cards: newCard, score:newScore,}); 
   
      
    }

  }


  render() { 
    return ( 
        <div>
            <NavBar score={this.state.score} topScore={this.state.topScore}/>
            <Header />

            <div class="container">
              <div class="row row-cols-2">
               {this.state.cards.map(c => 
              
              <Cards 
                key= {c.id}
                picked = {c.picked}
                id={c.id}
                image ={c.image}
                cardSelectHandle = {this.cardSelectHandle}
                cards={c}
              />
              ) }
              </div>
            </div>
            



             

             
        </div>
     );
  }
}
 
export default Wrapper;