import React, { Component } from 'react'

const api_url = 'https://localhost:3001/api/v1/todos';

export default class TodoList extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             items: []
        }
    }
    
    render() {
        return (
            <div>
                
            </div>
        )
    }
}
