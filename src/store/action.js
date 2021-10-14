function increment() {
  return {
    type: 'increment',
  };
}
function decrement() {
  return {
    type: 'decrement',
  };
}
function reset() {
  return {
    type: 'reset',
  };
}

function updateStep(step) {
  return {
    type: 'updateStep',
    payload: step,
  };
}
function updateMaxValue(maxValue) {
  return {
    type: 'updateMaxValue',
    payload: maxValue,
  };
}
export { increment, decrement, reset, updateStep, updateMaxValue };
