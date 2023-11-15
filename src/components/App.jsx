import React, { Component } from "react"
import { FeetbackOptions } from "./FeetbackOptions/FeetbackOptions"
import { Statistics } from "./Statistics/Statistics"
import { Section } from "./Section/Section"
import { Notification } from "./Notification/Notification"

export class App extends Component {
  
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  onLeaveFeedback = (feetback) => {
    if(feetback === 'Good') {
      this.setState(prevState => {
        return {good: prevState.good + 1}
      })
    } else if (feetback === 'Neutral') {
      this.setState(prevState => {
        return {neutral: prevState.neutral + 1}
      })
    } else if (feetback === 'Bad') {
      this.setState(prevState => {
        return {bad: prevState.bad + 1}
      })
    }
    console.log(this.state);
  }

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  }

  countPositiveFeedbackPercentage = () => {
    if(this.countTotalFeedback() === 0)
      return 0;
    return Math.round((this.state.good / this.countTotalFeedback()) * 100)
  }

  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          color: '#010101'
        }}
      >
        <Section title='Please leave your feetback'>
          <FeetbackOptions onLeaveFeedback={this.onLeaveFeedback}/>
        </Section>
        <Section title='Statistics'>
          {
            this.countTotalFeedback() === 0
            ?
            <Notification message='No given feedbacks'/>
            :
            <Statistics 
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          }
        </Section>
      </div>
    );
  }
};
