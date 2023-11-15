import { Component } from 'react'
import classes from './Notification.module.css'

export class Notification extends Component {

    render() {
        const {message} = this.props;
        return (
            <p className={classes.notificationMessage}>{message}</p>
        )
    }
}