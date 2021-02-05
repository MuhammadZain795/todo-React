import { Button, List, ListItem, ListItemAvatar, ListItemText } from '@material-ui/core';
import React from 'react';
import './Todo.css'
import db from './firebase'
function Todo(props) {
    
    return (
        <List className="list_class">
            <ListItem>
                <ListItemAvatar>
                </ListItemAvatar>
                <ListItemText primary={props.text.todo} secondary="Deadline"/>
            </ListItem>
            <Button onClick={event => db.collection('todos').doc(props.text.id).delete()}>Delete</Button>
        </List>
    );
}

export default Todo;