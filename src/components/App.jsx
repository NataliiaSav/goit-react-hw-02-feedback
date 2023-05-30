import React, {Component} from "react";
import { Feedback } from "./Feedback/Feedback";

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }
  onLeaveFeedback = () => {
    this.setState(prevState => ({
      [option]: state[option] + 1
    }));
 }

  render() {
    return (
      <Feedback options={Object.keys(this.state)} onClick = {this.onLeaveFeedback} />
    )};
}