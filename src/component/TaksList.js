import React, {Component} from 'react';
import {Taks} from './Taks';

export class TaksList extends Component{
    constructor(props){
        super(props);
        console.log(this.props.taksList);

    }

    render() {
        const taksList = this.props.taksList.map((item, i) => {
            return(
                <Taks key={i} description={item.description} dueDate={item.dueDate} responsible={item.responsible} status={item.status}/>
            );
        });

        return (
            <div style = {{padding : "250px", paddingTop: "35px"}}>
                {taksList}
            </div>
        );
    }
}