import { Component } from "react";
import classes from './FeetbackOptions.module.css'

export class FeetbackOptions extends Component {

    render() {
        const { onLeaveFeedback } = this.props;

        return (
            <div className={classes.feetbackOptionsBtns}>
                <button 
                    type="button" 
                    className={classes.feetbackOptionsBtn}
                    onClick={() => onLeaveFeedback('Good')}
                >Good</button>
                <button 
                    type="button" 
                    className={classes.feetbackOptionsBtn}
                    onClick={() => onLeaveFeedback('Neutral')}
                >Heutral</button>
                <button 
                    type="button" 
                    className={classes.feetbackOptionsBtn}
                    onClick={() => onLeaveFeedback('Bad')}
                >Bad</button>
            </div>
        )
    }
}