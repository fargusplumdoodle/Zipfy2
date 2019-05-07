'use strict';

var request = require('request');
const React = require('react');
const ReactDOMServer = require('react-dom/server');
require('es6-promise').polyfill();
require('isomorphic-fetch');

//transpile and add react component
require("@babel/register") ({
	presets: [ '@babel/preset-react' ]
});
const Footer = React.createFactory(require('../components/Footer.jsx'));
const Header = React.createFactory(require('../components/Header.jsx'));
const Zipfy = React.createFactory(require('../components/Zipfy.jsx'));
const About = React.createFactory(require('../components/About.jsx'));
const Stats = React.createFactory(require('../components/GlobalStats.jsx'));

function handleHTTPErrors(response) {
    if (!response.ok) throw Error(response.status + ': ' + response.statusText);
    return response;
}


// index handler
const renderIndex = (req, res)  => {
	res.render('index', {
		title: 'Zipf Calculator',
		header: ReactDOMServer.renderToString(Header()),
		footer: ReactDOMServer.renderToString(Footer()),
        msgBoard: ReactDOMServer.renderToString(Zipfy()),
		}
	);
};

const renderAbout = (req, res) => {
	res.render('about', {
			title: 'Zipfy: About',
			header: ReactDOMServer.renderToString(Header()),
			footer: ReactDOMServer.renderToString(Footer()),
			about: ReactDOMServer.renderToString(About()),
		}
	);
};

const renderStats = (req, res) => {
	res.render('stats', {
			title: 'Zipfy: Global Statistics',
			header: ReactDOMServer.renderToString(Header()),
			footer: ReactDOMServer.renderToString(Footer()),
			stats: ReactDOMServer.renderToString(Stats()),
		}
	);

};

module.exports = {
    renderIndex,
	renderAbout,
	renderStats
};
