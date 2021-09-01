import React, { Component } from 'react'
import TodoItem from "./TodoItem"
export default class Todolist extends Component {
    render() {
        const { items, clearList, handleEdit, handleDelete } = this.props;
        return (
            <div>
                <ul className="list-group my-5">
                    <h3 className="text-capitalize text-center">todo list</h3>
                    {items.map(item => {
                        return (
                            <TodoItem key={item.id} title={item.title} handleDelete={() => handleDelete(item.id)} handleEdit={() => handleEdit(item.id)} />
                        )
                    })}
                    <button type="button" className="btn btn-danger btn-block text-uppercase mt-5" onClick={clearList}>clear list</button>
                </ul>
            </div>
        )
    }
}
