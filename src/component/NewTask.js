import React, {Component} from 'react';

import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';

import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from "moment";


export class NewTask extends Component{
    constructor(props){
        super(props);
        this.state = {
            open : false,
            status : '',
            dueDate: moment()
        }
        this.setOpen = this.setOpen.bind(this);
        this.handleClickOpen = this.handleClickOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.setStatus = this.setStatus.bind(this);
        this.handleChangeStatus = this.handleChangeStatus.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
    }

    setOpen(action){
        console.log(action)
        this.setState({
            open: action
          }, () => {
            console.log("Open: ", this.state);
        });
    }

    handleClickOpen(){
        this.setOpen(true);
    }

    handleClose(){
        this.setOpen(false);
    }

    setStatus(currentStatus){
        this.setState({
            open: currentStatus
          }, () => {
            console.log("Status: ", currentStatus);
        });
    }

    handleChangeStatus(event){
        this.setStatus(event.target.value);
    }

    handleDateChange(date) {
        this.setState({
            dueDate: date
        });
    }


    render(){
        return(
                <div>
                <Fab color="primary" aria-label="add" onClick={this.handleClickOpen}>
                        <AddIcon />
                </Fab>
                <Dialog open={this.state.open} onClose={this.handleClose} aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
                    <DialogContent>
                    <DialogContentText>
                        Agregue una nueva tarea.
                    </DialogContentText>
                        <FormControl margin="normal" required fullWidth>
                            <InputLabel htmlFor="description">Description</InputLabel>
                            <Input id="description" 
                                   type="text"
                                   name="description" 
                            autoFocus />
                        </FormControl>
                        <FormControl margin="normal" required fullWidth>
                            <InputLabel htmlFor="name">Name</InputLabel>
                            <Input
                                name="name"
                                type="text"
                                id="name"
                            />
                        </FormControl>
                        <FormControl margin="normal" required fullWidth>
                            <InputLabel htmlFor="email">Email</InputLabel>
                            <Input
                                name="email"
                                type="text"
                                id="email"
                            />
                        </FormControl>
                        <FormControl >
                            <InputLabel id="demo-simple-select-label">Status</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={this.state.status}
                                onChange={this.handleChangeStatus}
                            >
                                <MenuItem value={"Ready"}>Ready</MenuItem>
                                <MenuItem value={"InProgress"}>InProgress</MenuItem>
                                <MenuItem value={"Done"}>Done</MenuItem>
                            </Select>
                        </FormControl>
                        <div>
                            <br/>
                            <FormControl >
                                <DatePicker
                                    id="due-date"
                                    selected={this.state.dueDate}
                                    placeholderText="Due date"
                                    onChange={this.handleDateChange}>
                                </DatePicker>
                            </FormControl>
                        </div>

                    </DialogContent>
                    <DialogActions>
                    
                    <Button onClick={this.handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={this.handleClose} color="primary">
                        Add
                    </Button>
                    </DialogActions>
                </Dialog>
            </div>

        );
    }    


}