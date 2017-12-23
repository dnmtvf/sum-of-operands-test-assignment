import React from 'react';
import { Stage, Layer } from 'react-konva';
import AxisSprite from './AxisSprite';
import UserInput from './UserInput';
import Curve from './Curve';
import './Axis.css';
import { makePointGetter, getX, getYForInput } from '../../helpers/pointsLib';

const xAxisOrigin = 80;
const yAxisOrigin = 185;
const axisStep = 39;
const getPoint = makePointGetter(xAxisOrigin, yAxisOrigin, axisStep);

const ListArcs = (props) => {
  const arcList = props.intervals.map((interval, index) => {
    const prevInterval = props.intervals[index - 1];
    const startPt = index === 0 ? getPoint(0) : getPoint(prevInterval);
    const endPt = index === 0 ? getPoint(interval) : getPoint(interval + prevInterval);
    if (index <= props.limit) {
      return <Curve startPt={startPt} endPt={endPt} key={index} />;
    }
  });

  return <Layer>{arcList}</Layer>;
};

const ListInputs = (props) => {
  const inputList = props.intervals.map((interval, index) => {
    const prevInterval = props.intervals[index - 1];
    const left = index === 0 ? getX(getPoint(interval / 2))
      : getX(getPoint(prevInterval + (interval / 2)));
    const top = index === 0 ? getYForInput(getPoint(interval))
      : getYForInput(getPoint(interval));

    if (index <= props.limit) {
      return(
        <UserInput
          position={{ left, top }}
          correctAnswer={interval}
          handleChange={props.handleChange}
          key={index}
        />
      );
    }
  });

  return <div>{inputList}</div>;
};

const Axis = props => (
  <div className="Axis">
    <Stage width={964} height={250}>
      <Layer><AxisSprite y={167} x={44.5} /></Layer>
      <ListArcs intervals={props.intervals} limit={props.currentStep} />
    </Stage>
    <ListInputs
      intervals={props.intervals}
      limit={props.currentStep}
      handleChange={props.handleChange}
    />
  </div>
);

export default Axis;
