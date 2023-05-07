import PropTypes from 'prop-types'; 
import React from 'react';
import css from './Statistics.module.css';

function Statistics(props) {
        return (<section className={css.statistics}>
            <div className={css.statistics__list}>
                <p className={css.statistics__item}>Good: {props.good} </p>
                <p className={css.statistics__item}>Neutral: {props.neutral}</p>
                <p className={css.statistics__item}>Bad: {props.bad}</p>
                <p className={css.statistics__item}>Total: {props.total}</p>
                <p className={css.statistics__item}>PositivePercentage: {props.positivePercentage}%</p>
            </div>
        </section>)
    }

export default Statistics;

 Statistics.propTypes = {
     good: PropTypes.number.isRequired,
     neutral: PropTypes.number.isRequired,
     bad: PropTypes.number.isRequired,
     total: PropTypes.number.isRequired,
     positivePercentage: PropTypes.number.isRequired
};