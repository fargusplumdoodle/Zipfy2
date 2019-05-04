const React = require('react');
var tm = require( 'text-miner' );

class DocInput extends React.Component {
    constructor(props) {
        super(props);
        this.handleText = this.handleText.bind(this);
        this.analyzeDoc = this.analyzeDoc.bind(this);
        this.state = {
            doc: '',
        }
    }

    handleText(event) {
        this.setState({
            doc: event.target.value
        });
    }

    analyzeDoc(event) {
        // this will pass the document to the parent component
        event.preventDefault();

        // creating corpus from do document
        let corpus = new tm.Corpus([this.state.doc]);

        // sanitizing input
        corpus
            .trim()
            .toLower()
            .removeInterpunctuation()
            .removeNewlines()
            .removeDigits();

        // creating DTM object
        let terms = new tm.DocumentTermMatrix( corpus );

        // analyzing info
        let wordFrequency = terms.findFreqTerms(1);

        // passing DocumentTermMatrix to parent
        this.props.analyzeDocCallback({wordFrequency: wordFrequency});
   }

    render() {
        return (
            <form onSubmit={this.analyzeDoc}>
                <div className="form-group">
                    <div className="row">
                        <label htmlFor="doc"
                               className="col-3 col-form-label">
                            Enter Text:
                        </label>
                    </div>
                    <div className="row">
                        <div className="col-3">
                            <textarea
                                id="doc_input" className=" form-control"
                                placeholder=" Your Text document to be analyzed" value={this.state.doc}
                                onChange={this.handleText}
                            >test</textarea>
                        </div>
                        <div className="btn-lg">
                            <button type=" submit" className=" btn btn-primary">
                                Get Zipfy!
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        )
    }

}

module.exports = DocInput;
