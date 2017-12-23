import React from 'react';
import classNames from 'class-names';
import './SumInput.css';

class SumInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { userInput: null };
  }
  render() {
    if (this.state.userInput === this.props.sum) {
      return (
        <span>
          {this.props.sum}
        </span>
      );
    }

const isWrong = this.state.userInput !== null
  && !isNaN(this.state.userInput)
  && this.state.userInput !== this.props.sum;
    return (
      <form className="SumInput-SumForm">
        <input
          type="text"
          size="2"
          onChange={(e) => {
            this.setState({ userInput: parseInt(e.target.value, 10) });
          }}
          className={classNames({ 'SumInput-Input_isWrong': isWrong }, 'SumInput-Input')}
        />
      </form>
    );
  }
}

export default SumInput;
