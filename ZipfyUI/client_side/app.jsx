const React = require('react');
const ReactDOM = require('react-dom');
const Header = require('../app_server/components/Header.jsx');
const Footer = require('../app_server/components/Footer.jsx');
const Zipfy = require('../app_server/components/Zipfy.jsx');
const About = require('../app_server/components/About.jsx');

ReactDOM.hydrate(<Header/>, document.getElementById('header'));
ReactDOM.hydrate(<Footer/>, document.getElementById('footer'));
ReactDOM.hydrate(<Zipfy/>, document.getElementById('msg-board'));
ReactDOM.hydrate(<About/>, document.getElementById('about'));
