import React from 'react';
import classNames from 'class-names';
import './UserInput.css';

class UserInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { userInput: null };
  }

  render() {
    if (this.state.userInput === this.props.correctAnswer) {
      return (
        <div className="UserInput-Form UserInput-AnswerCorrect" style={this.props.position}>
          {this.props.correctAnswer}
        </div>
      );
    }
    const isWrong = this.state.userInput !== null
      && !isNaN(this.state.userInput)
      && this.state.userInput !== this.props.correctAnswer;
    return(
      <form className="UserInput-Form" style={this.props.position}>
        <input
          type="text"
          size="1"
          onChange={(e) => {
            this.props.handleChange(parseInt(e.target.value, 10));
            this.setState({ userInput: parseInt(e.target.value, 10) });
          }}
          className={classNames({ 'UserInput-Form_isWrong': isWrong }, 'UserInput-FormInput')}
        />
      </form>
    );
  }
}

export default UserInput;
