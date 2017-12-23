import React from 'react';
import classNames from 'class-names';
import './ExerciseEquation.css';
import SumInput from './SumInput';

const ExerciseEquation = (props) => {
  const operandList = props.operands.map((item, index) => {
    const isHighlighted = props.userInput !== null
      && props.userInput !== item
      && index === props.currentStep;
    return (
      <span key={index}>
        <span className={classNames({ 'ExerciseEquation-isHighlighted': isHighlighted })}>
          {item}
        </span>
        {index < (props.operands.length - 1) ? ' + ' : ' = '}
      </span>
    );
  });

  return (
    <div className="ExerciseEquation">
      {operandList}
      {props.operands.length === props.currentStep ? <SumInput sum={props.sum} /> : '?'}
    </div>
  );
};

export default ExerciseEquation;
