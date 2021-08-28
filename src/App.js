import { v4 as uuid } from "uuid";
import "bootstrap/dist/css/bootstrap.min.css";
import Todolist from "./components/TodoList";
import TodoInput from "./components/TodoInput";
import React, { Component } from "react";

class App extends Component {
  state = {
    items: [{ id: 1, title: "wake up" }, { id: 2, title: "make me food" }],
    id: uuid(),
    item: "",
    editItem: false
  };

  handleChange = (e) => {
    console.log("handle change")
  }
  handleSubmit = (e) => {
    console.log("handle submit")
  }
  clearList = () => {
    console.log("clearlist")
  }
  handleDelete = (id) => {
    console.log("handle delete" + id)
  }
  handleEdit = (id) => {
    console.log("edit edit" + id)
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-5">
            <h3 className="text-capitalize text-center">todo input</h3>
            <TodoInput item={this.state.input} handleChange={this.handleChange} handleSubmit={this.handleSubmit} edit={this.state.editItem} />
          </div>
          <Todolist items={this.state.items} clearList={this.clearList} handleDelete={this.handleDelete} handleEdit={this.handleEdit} />
        </div>
      </div>
    );
  };

}

export default App;
