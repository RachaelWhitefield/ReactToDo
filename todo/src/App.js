import React, { Component} from 'react';
import Header from "./components/layout/Header";
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";
import './App.css';

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: "Take out the trash",
        completed: false
      },
      {
        id: 2,
        title: "Dinner with friends",
        completed: true
      },
      {
        id: 3,
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

  render() {
    // console.log(this.state.todos)
    return (
      <div className="App>">
        <div className="container">
        <Header />
        <AddTodo />
        <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo} />
        </div>  
      </div>
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
