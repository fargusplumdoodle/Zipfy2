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

let msgs = [{
    id: 1,
    name: 'fargus',
     msg: 'EYYYY LMAAOOOOOOOOOO'
}];

const getMessages = (req, res) => {
    fetch(`${process.env.API_URL}`)
        .then(response=> handleHTTPErrors(response))
        .then(result=> result.json())
        .then(result=> {
            if (!(result instanceof Array)) {
                console.error('API lookup error');
                result = [];
            } else {
                renderIndex(req, res, result);
            }
        })
        .catch(error=> {
            console.log(error);
        });
};

// index handler
const renderIndex = (req, res)  => {
	res.render('index', {
		title: 'ICS 221 Universal JS Message board',
		header: ReactDOMServer.renderToString(Header()),
		footer: ReactDOMServer.renderToString(Footer()),
        msgBoard: ReactDOMServer.renderToString(Zipfy()),
		}
	)
};


module.exports = {
    getMessages,
    renderIndex
};
