import React,{ Component } from "react";

import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';

import './Login.css';

export class Login extends Component{
    constructor(props){
        super(props);
    }


    render(){
        return (
            <div className="login-form">
                <h1>Login</h1>
                <FormControl margin="normal" required fullWidth>
                    <InputLabel htmlFor="email">Email Address</InputLabel>
                    <Input id="email" name="email" autoComplete="email" autoFocus />
                </FormControl>
                <FormControl margin="normal" required fullWidth>
                    <InputLabel htmlFor="password">Password</InputLabel>
                    <Input
                        name="password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                    />
                </FormControl>
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    lassName="submit"
                    href="/mainpage"
                >
                Sign in
                </Button>
            </div>
        );
    }

}
