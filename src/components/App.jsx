import React,  { useState } from 'react';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Section from './Section/Section';
import Notification from './Notification/Notification';

function App() {
  const [feedback, setFeedback] = useState({ good: 0, neutral: 0, bad: 0 });

  const countTotalFeedback = () => {
    const total = feedback.bad + feedback.neutral + feedback.good;
    return total;
  };
  const countPositiveFeedbackPercentage = () => {
    const positivePercentage =
      countTotalFeedback() !== 0
        ? Math.round((feedback.good / countTotalFeedback()) * 100)
        : 0;
    return positivePercentage;
  };

  const handleIncrement = (event) => {
    setFeedback({ ...feedback, [event]: feedback[event] + 1 });
  };

  return (
    <main>
      <Section
        title={"Please leave feedback"}>
      <FeedbackOptions
          options={Object.keys(feedback) }
        onLeaveFeedback={ handleIncrement }
      />
      </Section>

      {countTotalFeedback() === 0 ?
        <Notification
        message="There is no feedback"
        /> :
      <Section
      title={"Statistics"} >   
        <Statistics
            good={feedback.good}
            neutral={feedback.neutral}
            bad={feedback.bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
      />
        </Section> 
      }
  </main>)
} ;
export default App;