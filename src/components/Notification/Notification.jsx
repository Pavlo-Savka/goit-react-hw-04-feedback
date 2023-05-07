import PropTypes from 'prop-types'; 
import React from 'react';

function Notification(props) { 
        return (
            <h3>
                {props.message}
            </h3>
        )
    }

export default Notification;

Notification.propTypes = {
    message: PropTypes.string.isRequired
};