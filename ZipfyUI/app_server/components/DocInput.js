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

        // pre-sanitizing document
        let doc = this.state.doc
            .replace(/[\W_]+/g, ' ')
            .replace(/\s+/g, ' ');

        // creating corpus from do document
        let corpus = new tm.Corpus([doc]);

        // sanitizing input
        corpus
            .trim()
            .toLower()
            .removeInterpunctuation()
            .removeNewlines()
            .removeDigits()
            .removeInvalidCharacters()
            .stem();

        // creating DTM object
        let terms = new tm.DocumentTermMatrix( corpus );

        // analyzing info
        let wordFrequency = terms.findFreqTerms(1);

        wordFrequency
            // sorting array based on count
            .sort((a,b) => (a.count > b.count) ? 1 : ((b.count> a.count) ? -1 : 0))
            // reverseing order so the most frequest are first
            .reverse();

        // Removing all empty strings. It is required to use the loose inequality operator.
        wordFrequency= wordFrequency.filter((element) => {
            return element.word != "";
        });

        // DATA IS VALID FROM HERE ON

        // computing additional info
        const TOP_WORD_FREQ = wordFrequency[0].count;
        let wordCount = 0;

        for (let i = 0; i < wordFrequency.length; i++){

            // setting estimated word frequency
            wordFrequency[i].est = (TOP_WORD_FREQ / (i + 1));

            // getting difference, and addding positive or negative to it
            let diff = Math.round(wordFrequency[i].count - wordFrequency[i].est);
            wordFrequency[i].diff = diff > 0 ? "+" + diff : diff;

            // getting wordcount
            wordCount += wordFrequency[i].count;

            // setting difference color based on how far off this word is from what its expected.
            // if its within 10 % of what is estimated, thats good enough for me
            let tenPercentLow = Math.round(wordFrequency[i].est - (wordFrequency[i].est * 0.05));
            let tenPercentHigh = Math.round(wordFrequency[i].est + (wordFrequency[i].est * 0.05));

            wordFrequency[i].difColor =
                wordFrequency[i].count >= tenPercentLow && wordFrequency[i].count <= tenPercentHigh ?
                    "green" : "red";

        }


        // passing DocumentTermMatrix to parent
        this.props.analyzeDocCallback({
            words: wordFrequency,
            wordCount: wordCount,
            paretoRatio: this.getPareto(wordCount, wordFrequency)
        });
   }

   getPareto(wordCount, words) {
        let topWords = Math.floor(words.length * 0.2);
        let top20count = 0;
        //TODO: I THINK THIS DOESNT WORK
        for (let i = 0; i < topWords; i++){
             top20count += words[i].count;
        }

       // this is how much of the whole the top 20 percent most used words take up.
       // According to our friend pareto, this number should be approximatley 80%
       return Math.round((top20count / wordCount) * 100);

   }

    render() {
        return (
            <div className={'docInput'}>
                <form onSubmit={this.analyzeDoc}>
                    <div className="form-group">
                        <div className="row">
                            <label htmlFor="doc"
                                   className="col-3 col-form-label">
                                Enter Text:
                            </label>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <textarea
                                    id="doc_input" className=" form-control"
                                    placeholder=" Your Text document to be analyzed" value={this.state.doc}
                                    onChange={this.handleText}
                                />
                            </div>
                            <div className="btn-lg">
                                <button type=" submit" className=" btn btn-primary">
                                    LETS GET ZIPFY UP IN THIS!
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        )
    }

}

module.exports = DocInput;
