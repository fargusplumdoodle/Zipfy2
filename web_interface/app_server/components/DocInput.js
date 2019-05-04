const React = require('react');

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

        //todo: actually sanitize data
        // - remove non alphabetic characters that arnt spaces
        let sanitizedDoc = this.state.doc;

        this.props.analyzeDocCallback({doc: sanitizedDoc});
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
