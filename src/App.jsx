import { Component } from "react";
import css from './App.module.css'
import { Statistics } from "./components/Statistics/Statistics";
import FeedBackOptions from "components/FeedbackOptions/FeedbackOptions";
import { Section } from "components/Section/Section";
import { Notification } from "components/Notification/Notification";
import theme from './theme'
class App extends Component  {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  }
handleFeedback = (key) => {
  this.setState(prevState => {
    return {
      [key]: prevState[key] + 1,
    }
  })
}




  countTotalFeedback = ({good, neutral,bad} = this.state) => good + neutral + bad; 
  countPositiveFeedbackPercentage = ({good} = this.state) => {

 return Math.round((good / this.countTotalFeedback()) * 100);
  }


  render() {
    const {good} = this.state;
    const {neutral} = this.state;
    const {bad} = this.state;
    const keys = Object.keys(this.state)
    return (
<div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        background: theme.gradient.mainGradient,
      }}>
      <div className={css.wrapper}>
      <Section title="Please leave feedback">
<FeedBackOptions
keys={keys}
  handleFeedback={this.handleFeedback}

/>
</Section>
<Section title="Statistics">
{this.countTotalFeedback() > 0 ? <Statistics 
value={this.state}
countTotalFeedback={this.countTotalFeedback()}
countPositiveFeedbackPercentage={this.countPositiveFeedbackPercentage()}
/> : <Notification message="There is no feedback"/>} 
</Section>
</div>
      </div>

    )
  }





  
};



export default App ;