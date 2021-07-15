import React, { Component } from 'react'
import TodoForm from './TodoForm';

const api_url = 'https://localhost:3001/api/v1/todos';

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
      .then(responst_item => {
          this.setState()
      })
    }

    render() {
        return (
            <div>
                <TodoForm />
            </div>
        )
    }
}
