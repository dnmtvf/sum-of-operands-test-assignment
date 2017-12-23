import React, { Component } from 'react';
import './SumOfOperands.css';
import getNewExerсize from './getNewExerсize';
import ExerciseEquation from './Components/ExerciseEquation/ExerciseEquation';
import Axis from './Components/Axis/Axis';
import './bootstrap-reboot.min.css';

class SumOfOperands extends Component {
  constructor(props) {
    super(props);
    const exercise = getNewExerсize();
    this.state = {
      operands: exercise.operands,
      sum: exercise.sum,
      currentQuestion: { id: 0, answer: exercise.operands[0], userInput: null },
    };
    this.userInputHandleChange = this.userInputHandleChange.bind(this);
  }

  userInputHandleChange(num) {
    const isCorrect = num === this.state.currentQuestion.answer;
    if (isCorrect) {
      this.setState(prevState => ({
        currentQuestion: {
          id: prevState.currentQuestion.id + 1,
          answer: prevState.operands[prevState.currentQuestion.id + 1],
          userInput: null,
        },
      }));
    } else {
      this.setState(prevState => ({
        currentQuestion: {
          ...prevState.currentQuestion,
          userInput: num,
        },
      }));
    }
  }

  render() {
    return (
      <div className="SumOfOperands">
        <ExerciseEquation
          operands={this.state.operands}
          currentStep={this.state.currentQuestion.id}
          userInput={this.state.currentQuestion.userInput}
          sum={this.state.sum}
        />
        <Axis
          className="CountNumsExercise-Axis"
          intervals={this.state.operands}
          currentStep={this.state.currentQuestion.id}
          handleChange={this.userInputHandleChange}
        />
      </div>
    );
  }
}

export default SumOfOperands;
