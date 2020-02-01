import React, { Component } from 'react';
import Header from './components/header/Header'
import TodoList from './components/todoList/TodoList';
import AddTodo from './components/addTodo/AddTodo';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="container" style={{"backgroundColor":"#F8F9FA",height:"100vh", padding:0}}>
         <Header />
         <AddTodo />
         <TodoList />
      </div>
    );
  }
}

export default App;
