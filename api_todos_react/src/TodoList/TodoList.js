import React, { Component } from 'react'
import TodoForm from './TodoForm';
import TodoItem from './TodoItem';

const api_url = 'http://localhost:3001/api/v1/todos';

export default class TodoList extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             items: []
        }
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

    render() {
        console.log(this.state)
        return (
            <div>
                <TodoForm />
                <ul>
                    {this.state.items.map(item => (
                        <TodoItem key={item.id} item={item} />
        ))}
                </ul>
            </div>
        )
    }
}
