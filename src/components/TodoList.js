import React, { Component } from 'react'
import Item from "./TodoItem"
export default class Todolist extends Component {
    render() {
        return (
            <div>
                <h2>Hello from todo list</h2>
                <Item/>
            </div>
        )
    }
}
