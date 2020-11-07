import React from 'react'
import './App.css';

class Title extends React.Component{
    constructor(props){
        super(props)
    }
    render() {
        const title = 
        <div className="title">
            <img src='Pokédex_logo.png'alt="Pokemon" class="center"></img>
            <h4>Created by Nimal Padmanabhan in Software Saturdays at Purdue University, Fall 2020</h4>
        </div>
        return title;
    }
}
export default Title