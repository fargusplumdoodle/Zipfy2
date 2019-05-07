const React = require('react');
const ReactStrap = require('reactstrap');
const Progress = ReactStrap.Progress;

const ParetoChecker = (props) => {
        // if the pareto principle applies
        if (props.paretoRatio >= 75 && props.paretoRatio <= 85) {
            return (
                <div className={'info'}>
                    <h3>Pareto Principle: APPLIES!</h3>
                    <Progress value={props.paretoRatio} color="success">{props.paretoRatio}%</Progress>
                    <p>The top 20% most frequent words make up <b>{props.paretoRatio}%</b> of the {props.wordCount} total words in the document. THE PARETO PRINCPLE APPLIES TO THIS DOCUMENT!</p>
                </div>
            )

        } else {
            return (
                <div className={'info'}>
                    <h3>Pareto Principle</h3>
                    <Progress value={props.paretoRatio}>{props.paretoRatio}%</Progress>
                    <p>The top 20% most frequent words make up <b>{props.paretoRatio}%</b> of the {props.wordCount} total words in the document. The Pareto principle does not seem to apply here.</p>
                </div>
            )
        }
};

module.exports = ParetoChecker;