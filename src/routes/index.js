import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import {Login} from '../component/Login';
import {MainPage} from '../component/MainPage';

export class Routes extends Component{

    render(){
        const LoginView = () => <Login />
        const MainPageView = () => <MainPage items={items}/>

        return(
            <Router>
                <Switch>
                    <Route path="/" exact component = {Login} />
                    <Route path="/mainpage" exact component = {MainPageView} />
                </Switch>
            </Router>
        )
    }

}
const items = [{
    "description": "Ieti - lab",
    "responsible": {
      "name": "Andres Ramirez",
      "email": "andres@gmail.com"
    },
    "status": "ready",
    "dueDate": 126464645646
},{
    "description": "Ieti - lab",
    "responsible": {
      "name": " Carlos Andres Ramirez",
      "email": "andres@gmail.com"
    },
    "status": "ready",
    "dueDate": 166484645646
}, {
    "description": "Ieti - lab",
    "responsible": {
      "name": "Carlos Ramirez",
      "email": "andres@gmail.com"
    },
    "status": "ready",
    "dueDate": 156474645646
}, ];





