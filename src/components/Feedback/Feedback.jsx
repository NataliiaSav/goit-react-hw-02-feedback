import React, { Component } from "react";
import PropTypes from "prop-types";
import css from './Feedback.module.css'

export class Feedback extends Component {
    render() {
        const { options } = this.props;

        return (
            <>
            <div className = {css.buttons}>
                    {options.map(option =>{
                        return (
                            <button className = {css.btn} key = {option} type = 'button' onClick={() => this.props.onLeaveFeedback(option)}>{option}</button>
                        )
                    })}
                </div>
                </>
        )
    }
}

Feedback.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
  };