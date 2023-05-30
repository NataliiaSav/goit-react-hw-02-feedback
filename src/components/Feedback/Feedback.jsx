import React, { Component } from "react";
import css from './Feedback.module.css'

export class Feedback extends Component {
    render() {
        const { options } = this.props;

        return (
            <div className = {css.buttons}>
                    {options.map(option =>{
                        return (
                            <button className = {css.btn} key = {option} type = 'button' onClick={() => props.onLeaveFeedback(option)}>{option}</button>
                        )
                    })}
            </div>
        )
    }
}