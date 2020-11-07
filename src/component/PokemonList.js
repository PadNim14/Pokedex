import React from 'react';
import PokemonCard from './PokemonCard';
import UIfx from 'uifx';
import mp3File from './sound_effect.mp3';


class PokemonList extends React.Component{
    
    constructor(props)
    {
        super(props)
        this.state = {pokemon:[], offset: 0};
        this.getAPIData = this.getAPIData.bind(this);
        
    }
    
// Use async so your page can continue loading
async getAPIData(){
    // This code is provided, it can be complicated
    const url = "https://pokeapi.co/api/v2/pokemon?limit=10&offset=0" + this.state.offset;/* MODIFY this url to match the data you want */// URL of the API
    console.log(url);
    const response = await fetch(url); // Get the data from the PokeAPI
    const responseJSON = await response.json(); // Turn the data into a JSON object that we can use

    const responsePokemon = responseJSON.results.map((item) => <PokemonCard key={item.name} name={item.name} url={item.url}/>);/* MODIFY to map the results to something */
    this.setState(
        {
           pokemon: this.state.pokemon.concat(responsePokemon),
           offset: this.state.offset + 10,
           
        }
    );
}
componentDidMount(){
    this.getAPIData();
    
}

render()
{
    
    const beep = new UIfx(mp3File);
    const table =
    <div>
        <div className="table">
            {this.state.pokemon}
        </div>
        <div className="button" onClick={this.getAPIData}><span className="button-text"><button onClick ={() => beep.play()}>More Pokemon!</button></span></div>
        {/* <button onClick ={beep.play}>More Pokemon!</button> */}
    </div>;
    return table;

}
    
}
export default PokemonList