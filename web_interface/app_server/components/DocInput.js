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
                        <div className=" col-3 row-2">
                            <input id=" msg" type=" text" className=" form-control"
                                   placeholder=" Your Text document to be analyzed" value={this.state.doc}
                                   onChange={this.handleText}
                            />
                        </div>
                        <div className=" col-2">
                            <button type=" submit" className=" btn btn-primary">
                                Post
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        )
    }

}

module.exports = DocInput;
