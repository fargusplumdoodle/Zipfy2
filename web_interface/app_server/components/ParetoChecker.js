const React = require('react');
// import {Progress} from 'reactstrap';
const reactstrap = require('reactstrap');
const Progress = reactstrap.Progress;
/*
    ParetoChecker requires the following prop: words
    Words is a list of objects like:
    {
        word: "pareto",
        count: 34
    }

    Pareto checker checks to see if the list of words follows the pareto principle to a degree
 */

class ParetoChecker extends React.Component {
    constructor(props){
        super(props);
        this.getWordCount();
    }

    getWordCount() {
        // getting total word count, maybe this should be passed from the analyzer?
        let wordCount = 0;
        for (let i = 0; i < this.props.words.length; i++) {
            wordCount += this.props.words[i].count;
        }

        // Getting the top 20 percent most used words by rank
        let topWords = Math.round(this.props.words.length * 0.2);
        let top20count = 0;

        for (let i = 0; i < topWords; i++){
            // these words are in the top 20 percent
            top20count += this.props.words[i].count;
        }

        // this is how much of the whole the top 20 percent most used words take up.
        // According to our friend pareto, this number should be approximatley 80%
        let top20ratio = top20count / wordCount;

        // setting state manually
        this.state = {
            wordCount: wordCount,
            top20count: top20count,
            top20ratio: top20ratio
        }
    }

    //<ProgressBar now={this.state.top20ratio}/>
    render () {
        let ratioPercent = Math.round(this.state.top20ratio * 100);

        // if the pareto principle applies
        if (ratioPercent >= 75 && ratioPercent <= 85) {
            return (
                <div>
                    <h3>Pareto Principle: APPLIES!</h3>
                    <Progress value={ratioPercent} color="success">{ratioPercent}%</Progress>
                    <p>The top 20% most frequent words make up <b>{ratioPercent}%</b> of the {this.state.wordCount} total words in the document. THE PARETO PRINCPLE APPLIES TO THIS DOCUMENT!</p>
                </div>
            )

        } else {
        return (
            <div>
                <h3>Pareto Principle</h3>
                <Progress value={ratioPercent}>{ratioPercent}%</Progress>
                <p>The top 20% most frequent words make up <b>{ratioPercent}%</b> of the {this.state.wordCount} total words in the document. The Pareto principle does not seem to apply here.</p>

            </div>
        )
    }
}
}

module.exports = ParetoChecker;