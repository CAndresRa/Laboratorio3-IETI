import React, {Component} from 'react';
import {TaksList} from './TaksList';
import {NavBar} from './NavBar';


export class MainPage extends Component{
    constructor(props){
        super(props);
        console.log("Vida de puta mierda");
        console.log(this.props.items);
        console.log("Vida de puta mierda");

    }


    render(){
        return(
            <div>
                <NavBar />
                <TaksList taksList={this.props.items} />
            </div>
        );
    }
}