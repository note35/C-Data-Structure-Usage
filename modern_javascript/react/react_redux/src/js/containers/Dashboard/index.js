import React, { Component } from 'react';
import { connect } from 'react-redux';

import Dashboard from '../../components/Dashboard';

import {setInfo} from '../../actions/dashboardAction';

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

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
