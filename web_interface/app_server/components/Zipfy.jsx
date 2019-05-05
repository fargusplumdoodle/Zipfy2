const React = require('react');
const FreqTable = require('./FreqTable');
const DocInput = require('./DocInput');
const ParetoChecker = require('./ParetoChecker');

class Zipfy extends React.Component {
	constructor(props){
		super(props);
		this.analyzeDocument = this.analyzeDocument.bind(this);
		this.state = {
		    wordFrequency: [],
            showResults: false
		}
	}
	analyzeDocument(doc) {
	    this.setState({
			showResults: true,
			wordFrequency: doc.wordFrequency, // finding each word that shows up once or more
		});
    }

	render() {
		if (this.state.showResults) {
			// displaying results
			return (
				<div>
					<DocInput analyzeDocCallback={this.analyzeDocument}/>
					<ParetoChecker words={this.state.wordFrequency}/>
					<FreqTable words={this.state.wordFrequency}/>
				</div>
			)
		} else {
			// Ready for user input
			return (
				<div>
					<DocInput analyzeDocCallback={this.analyzeDocument}/>
				</div>
			)
		}
	}
}

module.exports = Zipfy;
