export const makePointGetter = (xAxis, yAxis, axisInterval) => interval => [xAxis + (interval * axisInterval), yAxis];
export const getX = point => point[0];
export const getY = point => point[1];
export const getYForInput = point => getY(point) - (getX(point) * 0.27);
export const getBezierCP = (startPoint, endPoint) => {
  const axisInterval = getX(endPoint) - getX(startPoint);
  const xCPDistance = axisInterval / 6;
  const yCP = getY(startPoint) - (axisInterval * 0.3);
  const xACP = xCPDistance + getX(startPoint);
  const xBCP = getX(endPoint) - xCPDistance;
  return [xACP, yCP, xBCP, yCP];
};
