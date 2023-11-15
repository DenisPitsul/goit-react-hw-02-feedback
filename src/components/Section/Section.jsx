import { Component } from "react";
import classes from './Section.module.css'

export class Section extends Component {

    render() {
        const {title, children} = this.props

        return (
            <section className={classes.feedbackSection}>
                <h1 className={classes.feedbackSectionTitle}>{title}</h1>
                {children}
            </section>
        )
    }
}