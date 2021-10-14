import { connect } from 'react-redux';
import { increment, decrement, reset } from '../store/action';
import MaxValue from './MaxValue';
import Steps from './Steps';
function App(props) {
  return (
    <>
      <h1>Counter App</h1>
      <h2>{props.count}</h2>
      <div>
        <button
          onClick={() => {
            props.dispatch(increment());
          }}
        >
          Increment
        </button>
        <button
          onClick={() => {
            props.dispatch(decrement());
          }}
        >
          Decrement
        </button>
        <button
          onClick={() => {
            props.dispatch(reset());
          }}
        >
          Reset
        </button>
      </div>
      <Steps />
      <MaxValue/>
    </>
  );
}
function mapStateToProps(state) {
  return {
    count: state.value,
  };
}
export default connect(mapStateToProps)(App);
