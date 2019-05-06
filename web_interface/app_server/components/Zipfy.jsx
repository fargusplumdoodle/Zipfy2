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
				<div className={'zipfy'}>
					<h3 className={'hdr'}>Zipfs Law Text Analyzer</h3>

					<DocInput  analyzeDocCallback={this.analyzeDocument}/>


						<ParetoChecker wordCount={this.state.wordCount}
								   		paretoRatio={this.state.paretoRatio}/>

					<FreqTable words={this.state.words}/>
				</div>
			)
		} else {
			// Ready for user input
			return (
				<div className={'zipfy'}>
					<h3 className={'hdr'}>Zipfs Law Text Analyzer</h3>
					<DocInput analyzeDocCallback={this.analyzeDocument}/>
				</div>
			)
		}
	}
}

module.exports = Zipfy;
