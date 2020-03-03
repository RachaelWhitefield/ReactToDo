import React, { Component} from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";
import About from "./components/pages/About";
import uuid from 'react-uuid';
import './App.css';

class App extends Component {
  state = {
    todos: [
      {
        id: uuid(),
        title: "Take out the trash",
        completed: false
      },
      {
        id: uuid(),
        title: "Dinner with friends",
        completed: false
      },
      {
        id: uuid(),
        title: "Meeting with boss",
        completed: false
      }
    ]
  }

  // Toggle Complete
  markComplete = (id) => {
    // console.log(`ID #${id}`)
    this.setState({ todos: this.state.todos.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo;
    }) });
  }

  // Delete Todo
  delTodo = (id) => {
    // console.log(id)
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id!== id)] });
  }

  // Add Todo
  addTodo = (title) => {
    // console.log(title)
    const newTodo = {
      id: uuid(),
      title,
      completed: false
    }
    this.setState({ todos: [...this.state.todos, newTodo] });
  }

  render() {
    // console.log(this.state.todos)
    return (
      <Router>
        <div className="App>">
          <div className="container">
          <Header />
          <Route exact path="/" render={props => (
            <React.Fragment>
              <AddTodo addTodo={this.addTodo} />
              <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo} />
            </React.Fragment>
          )} />
          <Route path="/about" component={About} />
         </div>  
        </div>
      </Router>
    );
  }
}

// function App() {
  
//   return (
//     <div className="App">
//       <Todos todos={this.state.todos} />
//     </div>
//   );
// }

export default App;

