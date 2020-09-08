import React, {Component} from 'react';
import {Taks} from './Taks';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';

import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

export class TaksList extends Component{
    constructor(props){
        super(props);
        console.log(this.props.taksList);
        this.state = {
            items : this.props.taksList,
            open : false,
        }
        this.setOpen = this.setOpen.bind(this);
        this.handleClickOpen = this.handleClickOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleChangeStatus = this.handleChangeOrderByStatus.bind(this);
        this.handleChangeOrderByUsers = this.handleChangeOrderByUsers.bind(this);
        this.handleChangeOrderByDate = this.handleChangeOrderByDate.bind(this);

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

    handleChangeOrderByStatus(event){
        console.log("Click order by Status" , event.target.value);
        
    }

    handleChangeOrderByUsers(){
        console.log("Click Order by Names");
        const sortedNames = this.state.items.sort((a, b) => a.name > b.name ? 1 : -1)
        this.setState({
            items: sortedNames
          }, () => {
            console.log("Open: ", this.state);
        });
        this.handleClose();
    }

    handleChangeOrderByDate(){
        console.log("Click order by Date")
        const sortedDates = this.state.items.sort((a, b) => b.dueDate - a.dueDate)
        this.setState({
            items: sortedDates
          }, () => {
            console.log("Open: ", this.state);
        });
        this.handleClose();
    }

    render() {
        const taksList = this.state.items.map((item, i) => {
            return(
                <Taks key={i} description={item.description} dueDate={item.dueDate} responsible={item.responsible} status={item.status}/>
            );
        });

        return (
            <div>          
                <div>
                    <Button color="primary" aria-label="add" onClick={this.handleClickOpen}>Filtrar</Button>
                    <Dialog open={this.state.open} onClose={this.handleClose} aria-labelledby="form-dialog-title">
                        <DialogTitle id="form-dialog-title">Filtrar por</DialogTitle>
                        <DialogContent>
                        <DialogContentText>
                            Seleccione la opcion para ordenar la lista.
                        </DialogContentText>
                        <FormControl >
                            <Button color="primary" aria-label="add" onClick={this.handleChangeOrderByUsers}>Ordenar por nombre</Button>
                        </FormControl>
                            <br></br>
                            <br></br>

                        <FormControl >
                            <label>Ordenar por estado</label>
                            <InputLabel id="demo-simple-select-label"></InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={this.state.status}
                                onChange={this.handleChangeOrderByStatus}
                            >
                                <MenuItem value={"ready"}>Ready</MenuItem>
                                <MenuItem value={"inprogress"}>InProgress</MenuItem>
                                <MenuItem value={"done"}>Done</MenuItem>
                            </Select>
                        </FormControl>

                        <br></br>
                        <br></br>

                        <FormControl >
                            <Button color="primary" aria-label="add" onClick={this.handleChangeOrderByDate}>Ordenar por fecha</Button>
                        </FormControl>


                        </DialogContent>
                    </Dialog>
                </div>


                <div style = {{padding : "250px", paddingTop: "35px"}}>
                    {taksList}
                </div>
            </div>
        );
    }
}