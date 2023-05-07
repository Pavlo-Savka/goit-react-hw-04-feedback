import PropTypes from 'prop-types'; 
import React, { Component } from 'react';
import css from './Statistics.module.css';

class Statistics extends Component {
       
    render() {
        return (<section className={css.statistics}>
            <div className={css.statistics__list}>
                <p className={css.statistics__item}>Good: {this.props.good} </p>
                <p className={css.statistics__item}>Neutral: {this.props.neutral}</p>
                <p className={css.statistics__item}>Bad: {this.props.bad}</p>
                <p className={css.statistics__item}>Total: {this.props.total}</p>
                <p className={css.statistics__item}>PositivePercentage: {this.props.positivePercentage}%</p>
            </div>
        </section>)
    }
}

export default Statistics;

 Statistics.propTypes = {
     good: PropTypes.number.isRequired,
     neutral: PropTypes.number.isRequired,
     bad: PropTypes.number.isRequired,
     total: PropTypes.number.isRequired,
     positivePercentage: PropTypes.number.isRequired
};