import { Component } from "react";
import classes from './Statistics.module.css'

export class Statistics extends Component {

    render() {
        const {good, neutral, bad, total, positivePercentage} = this.props;

        return (
            <div className={classes.statistics}>
                <p className={classes.statisticsFeetback}>Good: {good}</p>
                <p className={classes.statisticsFeetback}>Neutral: {neutral}</p>
                <p className={classes.statisticsFeetback}>Bad: {bad}</p>
                <p className={classes.statisticsFeetback}>Total: {total}</p>
                <p className={classes.statisticsFeetback}>Positive feedback: {positivePercentage}%</p>
            </div>
        )
    }
}