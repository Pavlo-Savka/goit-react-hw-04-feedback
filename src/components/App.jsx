//import PropTypes from 'prop-types'; 
import React, { Component } from 'react';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Section from './Section/Section';
import Notification from './Notification/Notification';

class App extends Component {
   state = {
  good: 0,
  neutral: 0,
  bad: 0,
  }

    countTotalFeedback() {
        const total = this.state.bad + this.state.neutral + this.state.good;
        return total;
    }
    countPositiveFeedbackPercentage()  {
        const positivePercentage =
            this.countTotalFeedback() !== 0 ?
                Math.round
                    (this.state.good / this.countTotalFeedback() * 100) : 0;
        return positivePercentage;
    }

  handleIncrement = (event) => {
    this.setState(prevState => ({
      [event]: prevState[event] + 1,
   }));
}
  render() {
  return (
    <main>
      <Section
        title={"Please leave feedback"}>
      <FeedbackOptions
        options={Object.keys(this.state) }
        onLeaveFeedback={ this.handleIncrement }
      />
      </Section>

      {this.countTotalFeedback() === 0 ?
        <Notification
        message="There is no feedback"
        /> :
      <Section
      title={"Statistics"} >   
        <Statistics
        good={this.state.good}
        neutral={this.state.neutral}
        bad={this.state.bad}
        total={this.countTotalFeedback()}
        positivePercentage={this.countPositiveFeedbackPercentage()}
      />
        </Section> 
      }
  </main>)
} ;
};
export default App;