const React = require('react');
const ReactStrap = require('reactstrap');
const Progress = ReactStrap.Progress;

class ParetoChecker extends React.Component {
    constructor(props){
        super(props);
    }
    render () {
        // if the pareto principle applies
        if (this.props.paretoRatio >= 75 && this.props.paretoRatio <= 85) {
            return (
                <div style={this.props.style}>
                    <h3>Pareto Principle: APPLIES!</h3>
                    <Progress value={this.props.paretoRatio} color="success">{this.props.paretoRatio}%</Progress>
                    <p>The top 20% most frequent words make up <b>{this.props.paretoRatio}%</b> of the {this.props.wordCount} total words in the document. THE PARETO PRINCPLE APPLIES TO THIS DOCUMENT!</p>
                </div>
            )

        } else {
            return (
                <div style={this.props.style}>
                    <h3>Pareto Principle</h3>
                    <Progress value={this.props.paretoRatio}>{this.props.paretoRatio}%</Progress>
                    <p>The top 20% most frequent words make up <b>{this.props.paretoRatio}%</b> of the {this.props.wordCount} total words in the document. The Pareto principle does not seem to apply here.</p>
                </div>
            )
        }
    }
}

module.exports = ParetoChecker;