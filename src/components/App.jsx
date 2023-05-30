import React, {Component} from "react";
import { Feedback } from "./Feedback/Feedback";
import { Statistics } from "./Statistic/Statistics";

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }
  
  onLeaveFeedback = state => {
    // console.log('state', state)
    this.setState(prevState => ({
        [state]: prevState[state] + 1,
    
    }));
  }

 countTotalFeedback = () => {
   const { good, neutral, bad } = this.state;
   const total = good + neutral + bad;
   return total
  }

  countPositiveFeedbackPercentage = () => {
    return this.state.good !== 0
    ? Math.round((this.state.good/this.countTotalFeedback())*100) : 0
  }
  render() {
    return (
      <>
        <Feedback options={Object.keys(this.state)} onLeaveFeedback={this.onLeaveFeedback} />
        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={this.countTotalFeedback()}
          positive={this.countPositiveFeedbackPercentage() } />
      </>
    );
  }
}