import React, { useState } from 'react';
import Container from './Container/Container.jsx';
import Notification from './Notification/Notification';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Section from './Section/Section.jsx';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };
  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    return total === 0 ? 0 : Math.floor((good / total) * 100);
  };
  const addFeedback = type => {
    if (type === 'good') {
      setGood(prev => prev + 1);
    } else if (type === 'neutral') {
      setNeutral(prev => prev + 1);
    } else if (type === 'bad') {
      setBad(prev => prev + 1);
    }
  };

  return (
    <>
      <Container>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={addFeedback}
          />
        </Section>
        <Section title="Statistic">
          {countTotalFeedback() !== 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback()}
              positivePercentage={countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </Container>
    </>
  );
};

export default App;
