import React from 'react';
import { Shape } from 'react-konva';
import { getX, getY, getBezierCP } from '../../helpers/pointsLib';

class Curve extends React.Component {
  render() {
    const { startPt, endPt } = this.props;
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
        stroke="#aa5383"
        strokeWidth={2}
      />
    );
  }
}

export default Curve;
