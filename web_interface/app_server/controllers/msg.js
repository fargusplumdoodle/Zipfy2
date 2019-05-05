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
	)
};


module.exports = {
    renderIndex
};
