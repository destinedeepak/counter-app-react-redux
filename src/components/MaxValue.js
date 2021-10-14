import React from 'react';
import { connect } from 'react-redux';
import { updateMaxValue } from '../store/action';

function MaxValue(props) {
  return (
    <div>
      <button
        class={props.maxValue === 15 ? 'active' : ''}
        onClick={() => {
          props.dispatch(updateMaxValue(15));
        }}
      >
        15
      </button>
      <button
        class={props.maxValue === 100 ? 'active' : ''}
        onClick={() => {
          props.dispatch(updateMaxValue(100));
        }}
      >
        100
      </button>
      <button
        class={props.maxValue === 200 ? 'active' : ''}
        onClick={() => {
          props.dispatch(updateMaxValue(200));
        }}
      >
        200
      </button>
    </div>
  );
}

function mapStateToProps(state) {
  return { maxValue: state.maxValue };
}
export default connect(mapStateToProps)(MaxValue);
