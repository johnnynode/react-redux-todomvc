import React, {Component} from 'react';

import TodoAction from '../Action/TodoAction';

import TodoHeaderContainer from "./TodoHeaderContainer";
import TodoInputContainer from "./TodoInputContainer";
import TodoListContainer from "./TodoListContainer";

import { connect } from 'react-redux';

class TodoApp extends Component {
  render() {
    return (
      <div>
        <TodoHeaderContainer />
        <TodoInputContainer />
        <TodoListContainer />
      </div>
    )
  }

  componentDidMount() {
    this.props.loadData();
  }
}

export default TodoApp = connect(
  undefined,
  {
      loadData: TodoAction.loadData
  }
)(TodoApp);