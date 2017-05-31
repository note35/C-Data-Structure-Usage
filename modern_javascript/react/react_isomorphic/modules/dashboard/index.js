import React, { Component } from 'react';
import { connect } from 'react-redux';

import Layout from './components/Layout';

import {setInfo} from './actions';

const setInfoEvent = (e, dispatch) => {
  dispatch(setInfo(e.target.value));
}

const mapStateToProps = (state, ownProps) => {
  return {
    dashboard: state.dashboard,
    name: "dashboard"
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    setInfoEvent: (e) => {
      setInfoEvent(e, dispatch);
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Layout)
