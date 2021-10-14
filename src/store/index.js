import { compose, createStore } from 'redux';

function counterReducer(state = { value: 0, step: 1, maxValue: 0 }, action) {
  switch (action.type) {
    case 'increment':
      return {
        ...state,
        value:
          state.maxValue === 0 || state.maxValue >= state.value + state.step
            ? state.value + state.step
            : state.value,
      };
    case 'decrement':
      return { ...state, value: state.value - state.step };
    case 'reset':
      return { ...state, value: 0 };
    case 'updateStep':
      return { ...state, step: action.payload };
    case 'updateMaxValue':
      return { ...state, maxValue: action.payload };
    default:
      return state;
  }
}

const enhancers = compose(
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

let store = createStore(counterReducer, enhancers);

export default store;
