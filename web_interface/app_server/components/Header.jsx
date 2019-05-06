const React = require('react');

const Header = (props) => {
	return (
            <div className={'pg-header'}>
                <h1><a href="/">Zipfy!</a></h1>
                <h5><a href="/">Analyzer</a></h5>
                <h5><a href="/about">About</a></h5>
                <h5><a href="/stats">Global Statistics</a></h5>
            </div>
	);
};

module.exports = Header;
