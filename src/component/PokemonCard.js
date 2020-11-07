import React from 'react';

class PokemonCard extends React.Component{
    constructor(props)
    {
        super(props)
        this.state = {name: this.props.name, height: 0, weight: 0, exp: 0, image: ""};
        this.getAPIData = this.getAPIData.bind(this);
        //this.state = {name, height};
    }

// Use async so your page can continue loading
async getAPIData(){
    // This code is provided, it can be complicated
    const url = this.props.url;
    console.log(url);
    const response = await fetch(url); // Get the data from the PokeAPI
    const responseJSON = await response.json(); // Turn the data into a JSON object that we can use
    this.setState(
        {
           name: responseJSON.name, 
           height: responseJSON.height,
           weight: responseJSON.weight,
           exp: responseJSON.base_experience,
           image: responseJSON.sprites.front_default,
        }
    );
}
componentDidMount(){
    this.getAPIData();
   
}
capitalize(str){
    return str.charAt(0).toUpperCase() + str.slice(1);
    }

render()
{
   
    const card =
    <div className= "card text-center mx-auto" style={{"maxWidth" : "20rem"}} key={this.state.name}>
        <img src={this.state.image} alt={this.state.name} title={this.state.name} />
        <h4>{this.capitalize(this.state.name)} </h4>
        <p>Height: {this.state.height}</p>
        <p>Weight: {this.state.weight}</p>
        <p>Base XP: {this.state.exp}</p>
    </div>;
    
    return card;
}
}
export default PokemonCard
    