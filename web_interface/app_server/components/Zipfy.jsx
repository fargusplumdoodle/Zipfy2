const React = require('react');
const FreqTable = require('./FreqTable');
const DocInput = require('./DocInput');
const ParetoChecker = require('./ParetoChecker');

class Zipfy extends React.Component {
	constructor(props){
		super(props);
		this.analyzeDocument = this.analyzeDocument.bind(this);
		this.state = {
		    words: [],
            showResults: false
		};
		this.style = {
			width: "50%",
			margin: "auto"
		};

		this.infoStyle = {
		    float: "left",
			width: "50%",
		}
	}

	analyzeDocument(doc) {
	    this.setState({
			showResults: true,
			words: doc.words, // finding each word that shows up once or more
			wordCount: doc.wordCount,
			paretoRatio: doc.paretoRatio
		});
    }

	render() {
		if (this.state.showResults) {
			// displaying results
			return (
				<div style={this.style}>
					<DocInput analyzeDocCallback={this.analyzeDocument}/>
					<ParetoChecker style={this.infoStyle}
								   wordCount={this.state.wordCount}
								   paretoRatio={this.state.paretoRatio}
								   words={this.state.words} />
					<FreqTable words={this.state.words}/>
				</div>
			)
		} else {
			// Ready for user input
			return (
				<div style={this.style}>
					<DocInput analyzeDocCallback={this.analyzeDocument}/>
				</div>
			)
		}
	}
}

module.exports = Zipfy;
