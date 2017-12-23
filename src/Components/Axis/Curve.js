import React from 'react';
import { Shape } from 'react-konva';
import { getX, getY } from '../../helpers/pointsLib';

const getBezierCP = (startPoint, endPoint) => {
  const axisInterval = getX(endPoint) - getX(startPoint);
  const xCPDistance = axisInterval / 6;
  const yCP = getY(startPoint) - (axisInterval * 0.3);
  const xACP = xCPDistance + getX(startPoint);
  const xBCP = getX(endPoint) - xCPDistance;
  return [xACP, yCP, xBCP, yCP];
};

class Curve extends React.Component {
  render() {
    const startPt = this.props.startPt;
    const endPt = this.props.endPt;
    const midCP = getBezierCP(startPt, endPt);

    return (
      <Shape
      ref="shape"
      sceneFunc={function (context) {
        context.beginPath();
        context.moveTo(...startPt);
        context.bezierCurveTo(...midCP, ...endPt);
        context.lineTo(getX(endPt), getY(endPt) - 10);
        context.moveTo(...endPt);
        context.lineTo(getX(endPt) - 10, getY(endPt) - 5);
        context.strokeShape(this);
      }}
      stroke='#aa5383'
      strokeWidth={2}
    />
    );
  }
}

export default Curve;
