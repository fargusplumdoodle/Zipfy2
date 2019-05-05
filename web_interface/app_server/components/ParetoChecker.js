const React = require('react');

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

    render () {
        return (
            <div>
            <p>{this.state.wordCount}</p>
            <p>{this.state.top20ratio}</p>
                <p>{this.state.top20count}</p>
            </div>
        )
    }
}

module.exports = ParetoChecker;