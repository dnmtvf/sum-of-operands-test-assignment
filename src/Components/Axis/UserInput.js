import React from 'react';
import classNames from 'class-names';
import './UserInput.css';

class UserInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { userInput: null, isInputWrong: false };
  }

  render() {
    if (this.state.userInput === this.props.correctAnswer) {
      return (
        <div className="UserInput-Form UserInput-Answer_isCorrect" style={this.props.position}>
          {this.props.correctAnswer}
        </div>
      );
    }
    return(
      <form className="UserInput-Form" style={this.props.position}>
        <input
          type="text"
          size="1"
          maxLength="1"
          onChange={(e) => {
            const userInput = e.target.value.trim() !== '' ? parseInt(e.target.value, 10) : null;
            this.props.handleChange(userInput);
            this.setState({ userInput, isInputWrong: e.target.value.trim() !== '' && userInput !== this.props.correctAnswer });
          }}
          className={classNames({ 'UserInput-Form_isWrong': this.state.isInputWrong }, 'UserInput-FormInput')}
        />
      </form>
    );
  }
}

export default UserInput;
