import { Component } from "react";
import classes from './FeetbackOptions.module.css'

export class FeetbackOptions extends Component {

    render() {
        const { options, onLeaveFeedback } = this.props;

        return (
            <div className={classes.feetbackOptionsBtns}>
                {
                    options.map(option => 
                        <button 
                            type="button" 
                            className={classes.feetbackOptionsBtn}
                            onClick={() => onLeaveFeedback(option)}
                        >{option}</button>
                    )
                }
            </div>
        )
    }
}