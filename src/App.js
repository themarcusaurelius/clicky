import React, { Component } from 'react';
import './App.css';
import cards from './cards.json'
import Wrapper from './components/Wrapper'
import Navpills from './components/Navpills'
import Title from './components/Title'
import Card from './components/Card'

class App extends Component {
    state = {
        message: "Click a Card to begin!", 
        topScore: 0,
        curScore: 0,
        cards: cards,
        unselectedCards: cards
    }

    componentDidMount() {};

    shuffleArray = array => {
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    selectCard = name => {
        const findCard = this.state.unselectedCards.find(item => item.name === name);
        console.log(findCard);

        if(findCard === undefined) {
            // failure to select a new card
            this.setState({ 
                message: "You guessed incorrectly!",
                topScore: (this.state.curScore > this.state.topScore) ? this.state.curScore : this.state.topScore,
                curScore: 0,
                cards: cards,
                unselectedCards: cards
            });
        }
        else {
            // success to select a new card
            const newCards = this.state.unselectedCards.filter(item => item.name !== name);
            
            this.setState({ 
                message: "You guessed correctly!",
                curScore: this.state.curScore + 1,
                cards: cards,
                unselectedCards: newCards
            });
        }

        this.shuffleArray(cards);
    };

    render() {
        return (
            <Wrapper>
                <Navpills
                    message={this.state.message}
                    curScore={this.state.curScore}
                    topScore={this.state.topScore}
                />
                <Title />
                {
                    this.state.cards.map(card => (
                        <Card
                            image={card.image}
                            name={card.name}
                            selectCard={this.selectCard} 
                            curScore={this.state.curScore}
                        />
                    ))
                }
            </Wrapper>
        );
    }
}

export default App;
