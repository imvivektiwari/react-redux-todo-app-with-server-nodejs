import React, { Component } from 'react';
import Header from './components/header/Header'
import TodoList from './components/todoList/TodoList';
import AddTodo from './components/addTodo/AddTodo';
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class App extends Component {

  render() {
    return (
      <div className="container-fluid" style={{"backgroundColor":"#F8F9FA",height:"100vh", padding:0}}>
        <ToastContainer />
         <Header />
         <AddTodo />
         <TodoList />
      </div>
    );
  }
}

export default App;
