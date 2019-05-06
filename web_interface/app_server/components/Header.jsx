const React = require('react');

const Header = (props) => {
	return (
            <div className={'pg-header'}>
                <h1><a style={{color: 'white'}} href="/" >Zipfy!</a></h1>
                <h5><a style={{color: 'white'}} href="/">Analyzer</a></h5>
                <h5><a style={{color: 'white'}} href="/about">About</a></h5>
                <h5><a style={{color: 'white'}} href="/stats">Global Statistics</a></h5>
            </div>
	);
};

module.exports = Header;
