import React, { Component } from 'react'
import TodoForm from './TodoForm';
import TodoItem from './TodoItem';
import { Grid } from '@material-ui/core';

const api_url = 'http://localhost:3001/api/v1/todos';

export default class TodoList extends Component {
    constructor(props) {
        super(props)
        this.state = {
             items: []
        }
        this.updateToDoList = this.updateToDoList.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }

    componentDidMount(){
        this.getTasks();
    }

    getTasks() {
      fetch(api_url)
      .then(response => response.json())
      .then(response_item => {
          this.setState({
              items: response_item
          })
      })
    }
    updateToDoList(item){
        let _items = this.state.items
        _items.unshift(item);
        this.setState({
            items: _items,
        })
    }

    deleteItem(item) {
        // delete remotetely
        // localhost:3001/api/v1/todos/id
        let deleteUrl = api_url +   `/${item.id}`
        //  delete in the browser
        
    }
    render() {
        return (
            <Grid container spacing={3}>
                <Grid item xs={12}>
                  <TodoForm api_url={api_url} updateToDoList={this.updateToDoList} />
                </Grid>
                    <Grid item xs={12}>
                        {this.state.items.map(item => (
                          <TodoItem 
                          key={item.id} 
                          item={item} 
                          deleteItem = {this.deleteItem} />
                        ))}
                    </Grid>
            </Grid>
        )
    }
}
