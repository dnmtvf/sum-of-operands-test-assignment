export const makePointGetter = (xAxis, yAxis, axisInterval) => interval => [xAxis + (interval * axisInterval), yAxis];

export const getX = point => point[0];
export const getY = point => point[1];
export const getYForInput = point => getY(point) - (getX(point) * 0.27);
