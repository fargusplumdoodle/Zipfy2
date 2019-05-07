const React = require('react');
const FreqTable = require('./FreqTable');
const DocInput = require('./DocInput');
const ParetoChecker = require('./ParetoChecker');
const Stats = require('./Stats');


class GlobalStats extends React.Component {
	constructor(props){
		super(props);
		this.analyzeDocument = this.analyzeDocument.bind(this);
		this.state = {
		    words: [],
            loading: true
		};
	}

	handleHTTPErrors(response) {
		if (!response.ok) throw Error(response.status + ': ' + response.statusText);
		return response;

	}

	componentDidMount()	{
	    // fetching globabal statistics
		console.log('fetch started');
		/*
		fetch("http://localhost:8000/api/v1/", {
			method: 'GET',
		})
			.then(response => this.handleHTTPErrors(response))
			.then(response => response.json())
			.then(response=> this.analyzeDocument(response))
			.catch(error=>{ console.log("Fetch API error: " + error)});
		*/
		console.log('fetch done');
	}

	analyzeDocument(doc) {
	    this.setState({
			loading: false,
			words: doc.words, // finding each word that shows up once or more
			// wordCount: doc.wordCount,
			// paretoRatio: doc.paretoRatio
		});
    }

	render() {
		return (
			<div className={'zipfy'}>
				<h3 className={'hdr'}>Zipfs Law Global Statistics</h3>
				<p>loading...</p>
			</div>
		);
	}
}

module.exports = GlobalStats;
