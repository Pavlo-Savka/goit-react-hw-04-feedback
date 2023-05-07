import PropTypes from 'prop-types'; 
import React, { Component } from 'react';
import css from './FeedbackOptions.module.css';

class FeedbackOptions extends Component {
render() {
    return <section className={css.feedback}>
   
        <div className={css['feedback__button-list']}>
            {this.props.options.map((i) => (<button
                type="button"
                key={i}
                className={css.feedback__btn}
                onClick={() => this.props.onLeaveFeedback(i)}>{i.charAt(0).toUpperCase() + i.slice(1)}</button>))}
    </div>
</section>
}
}
export default FeedbackOptions;

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired
};