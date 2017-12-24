import React from 'react';
import classNames from 'class-names';
import './SumInput.css';

class SumInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { userInput: null };
  }
  render() {
    if (parseInt(this.state.userInput, 10) === this.props.sum) {
      return (
        <span>
          {this.props.sum}
        </span>
      );
    }

    const isWrong = Number.isNaN(this.state.userInput)
      || (this.state.userInput !== null
      && this.state.userInput.toString(10).length === this.props.sum.toString(10).length)
      || (this.state.userInput !== null
        && parseInt(this.state.userInput.toString(10)[0], 10)
          > parseInt(this.props.sum.toString(10)[0], 10));

    return (
      <form className="SumInput-SumForm">
        <input
          type="text"
          size="2"
          maxLength="2"
          onChange={(e) => {
            this.setState({ userInput: e.target.value.trim() !== '' ? parseInt(e.target.value, 10) : null });
          }}
          className={classNames({ 'SumInput-Input_isWrong': isWrong }, 'SumInput-Input')}
        />
      </form>
    );
  }
}

export default SumInput;
