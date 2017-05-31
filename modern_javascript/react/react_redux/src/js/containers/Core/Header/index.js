import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from '../../../components/Core/Header';

import {login, logout} from '../../../actions/coreAction';

const mapStateToProps = (state, ownProps) => {
  return {
    core: state.core,
  }
};

export default connect(mapStateToProps, {login, logout})(Header)
