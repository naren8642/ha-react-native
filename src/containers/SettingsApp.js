'use strict';

import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import Settings from '../components/Settings';
import * as counterActions from '../actions/settingsActions';
import { connect } from 'react-redux';

class SettingsApp extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { state, actions } = this.props;
        return (
            <Settings
                {...state}
                {...actions} />
        );
    }
}

export default connect(state => ({
        state: state.settings
    }),
    (dispatch) => ({
        actions: bindActionCreators(counterActions, dispatch)
    })
)(SettingsApp);