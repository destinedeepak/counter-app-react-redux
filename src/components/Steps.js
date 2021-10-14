import React from 'react';
import { connect } from 'react-redux';
import { updateStep } from '../store/action';

function Steps(props) {
  return (
    <div>
      <button
        class={props.step === 5 ? 'active' : ''}
        onClick={() => {
          props.dispatch(updateStep(5));
        }}
      >
        5
      </button>
      <button
        class={props.step === 10 ? 'active' : ''}
        onClick={() => {
          props.dispatch(updateStep(10));
        }}
      >
        10
      </button>
      <button
        class={props.step === 15 ? 'active' : ''}
        onClick={() => {
          props.dispatch(updateStep(15));
        }}
      >
        15
      </button>
    </div>
  );
}
function mapStateToProps(state) {
  return { step: state.step };
}
export default connect(mapStateToProps)(Steps);
