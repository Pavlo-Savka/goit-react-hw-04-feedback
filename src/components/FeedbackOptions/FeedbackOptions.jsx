import PropTypes from 'prop-types';
import React from 'react';
import css from './FeedbackOptions.module.css';

function FeedbackOptions(props) {
    return (
        <section className={css.feedback}>
            <div className={css['feedback__button-list']}>
                {props.options.map((i) => (
                    <button
                        type="button"
                        key={i}
                        className={css.feedback__btn}
                        onClick={() => props.onLeaveFeedback(i)}
                    >
                        {i.charAt(0).toUpperCase() + i.slice(1)}
                    </button>
                ))}
            </div>
        </section>
    );
}

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;