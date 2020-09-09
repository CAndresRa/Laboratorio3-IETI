import React, {Component} from 'react';
import {TaksList} from './TaksList';
import {NavBar} from './NavBar';
import {NewTask} from './NewTask';


export class MainPage extends Component{
    constructor(props){
        super(props);
        console.log(this.props.items);
        this.state = {
            items : this.props.items
        }

    }

    render(){
        return(
            <div>
                <NavBar />
                <div style = {{ margin: "35px"}}>
                    <NewTask />
                </div>
                <TaksList taksList={this.state.items} />
            </div>
        );
    }
}