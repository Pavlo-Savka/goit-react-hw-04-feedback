import PropTypes from 'prop-types'; 
import React, { Component } from 'react';

class Notification extends Component { 
    render() {
        return (
            <h3>
                {this.props.message}
            </h3>
        )
    }
}
export default Notification;

Notification.propTypes = {
    message: PropTypes.string.isRequired
};