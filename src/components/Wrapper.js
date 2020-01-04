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
      image: '/images/bone-removebg-preview.png'
    },
    {
      id:2,
      picked:false,
      image: '/images/everest-removebg-preview.png'
    },
    {
      id:3,
      picked:false,
      image: '/images/man-removebg-preview.png'
    },
    {
      id:4,
      picked:false,
      image: '/images/alex-removebg-preview.png'
    },
    {
      id:5,
      picked:false,
      image: '/images/apollo.png'
    },
    {
      id:6,
      picked:false,
      image: '/images/carlos.png'
    },
    {
      id:7,
      picked:false,
      image: '/images/Chase-removebg-preview.png'
    },
    {
      id:8,
      picked:false,
      image: '/images/rocky-removebg-preview.png'
    },
    {
      id:9,
      picked:false,
      image: '/images/jake.png'
    },
    {
      id:10,
      picked:false,
      image: '/images/mayor.png'
    },
    {
      id:11,
      picked:false,
      image: '/images/pink-removebg-preview.png'
    },
    {
      id:12,
      picked:false,
      image: '/images/robo.jpg'
    },

  ],
  score: 0 ,
  topScore: 0 ,
  
  }

  cardSelectHandle =(card)=>{
    const newCard = [...this.state.cards];
    const index = newCard.indexOf(card);
   
    if(newCard[index].picked === true ){
        const newCard2= [...this.state.cards];
        newCard2.map(c=> c.picked =false );
        if(this.state.score > this.state.topScore){
            var newRecord;
            newRecord = this.state.score;
        }else{
            newRecord = this.state.topScore
        }
        this.setState({score: 0, cards:newCard2, topScore: newRecord});

    }else{
       newCard[index].picked = true;
       const newScore = this.state.score +1;
       newCard.sort(()=> Math.random()-0.5); 
       this.setState({cards: newCard, score:newScore,}); 
    }
  }

 


  render() { 
    return ( 
        <div>
            <NavBar score={this.state.score} topScore={this.state.topScore} />
            <Header />
          <div className="container card-holder">
            <div className="card-div">
             
               {this.state.cards.map(c => 
              
              <Cards 
                key= {c.id}
                picked = {c.picked}
                id={c.id}
                image ={c.image}
                cardSelectHandle = {this.cardSelectHandle}
                onMouseHandle = {this.onMouseHandle}
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