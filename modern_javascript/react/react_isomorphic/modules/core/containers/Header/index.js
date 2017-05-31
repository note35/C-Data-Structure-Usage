import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from '../../components/Header';

import {login, logout} from '../../actions';

const mapStateToProps = (state, ownProps) => {
  return {
    core: state.core,
  }
};

export default connect(mapStateToProps, {login, logout})(Header)
