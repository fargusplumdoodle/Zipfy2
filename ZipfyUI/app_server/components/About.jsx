const React = require('react');

class About extends React.Component {
	constructor(props) {
		super(props);
	}

	render () {
		return (
			<div className={'zipfy'}>
				<h3>About</h3>
				<br/>
				<h4>Summary</h4>
				<p>This project is a more sophisticated reboot of a program I made 2 years ago in Python. Zipfs Law is very interesting to me, I would love for it to be true. However after making this, I can say with confidence that it is not.
					<br/>
				<br/>
					The primary goal of this web application is to better familiarize myself with NodeJS, React, Express, Python Django, and modern web development in general. So far this thing has taken me 3 days and has been a lot of fun.
				</p>
				<h4>What technologies were used</h4>
					<b>NodeJS + Express + ReactJS</b>:<br/>
					Web front end, everything you see. I knew very little about Javascript in general before this.<br/><br/>
                    <b>Python + Django + Sqlite</b>:<br/>
					Backend API for collecting global statistics. If this were a larger project I would use Postgres for the database.<br/><br/>
					<b>text-miner:</b><br/>
					A node module for getting statistics out of text. When I did this program last time I made the engine that counted the words myself.<br/><br/>

					<b>Honorable mentions:</b><br/>
					Babel, Pug, Markdown, Docker, Linux, Browser-Sync, Git, Github, and probably more that I cant think of.
					Wow, for this little app I used collectively millions of hours of humanity... Thanks for doing most of the work humanity!
				<br/><br/>
				<h4>Zipfs Law</h4>
				<p>Zipfs Law is a statistical law that suggests that each words frequency a given corpus should show up inversely proportional to its rank in the frequency table.</p>
				<p>What does that mean? A frequency table is if you counted the number of times each word in a document showed up ( the frequency of that word ) and ordered them from most frequent to least frequent. According to Zipfs law the 2nd most frequent word should show up half as much as the most frequent word, and the 3rd most frequent word should show up 1/3rd as often as the most frequent word, and so on for all of the words in the document.</p>

				<p>Each word should show up <b>approximately</b>  <i>1/n * m</i> times, where <i>n</i> is the words rank on the frequency table, and <i>m</i> is the number of times the most frequent word in the document shows up.</p>

				<p><a href="https://simple.wikipedia.org/wiki/Most_common_words_in_English">According to this wikipedia page</a> the most common words in the English language are:
				<ol>
					<li>The</li>
					<li>be</li>
					<li>to</li>
					<li>of</li>
					<li>and</li>
				</ol>
					So check to see how your document compares to that, are you an outlier?
				</p>
				<br/>
				<h3>Pareto Principle</h3>
				<p>The Pareto Principle in this context would suggest that the top 20% most frequently appearing words should make up 80% of the document. This fits nicely into Zipfs Law, so I figured I would calculate that too. Also that way I got to learn how to make that nice animated slide bar.</p>
				<br/>
				<h3>Further reading</h3>
				<ul>
					<li><a href={'https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0147073'}>An interesting study on Zipfs Law in large datasets</a></li>
					<li><a href={'https://en.wikipedia.org/wiki/Zipf%27s_law'}>Zipfs Law - Wikipedia</a></li>
					<li><a href={'https://simple.wikipedia.org/wiki/Most_common_words_in_English'}>Most common words in english</a></li>
					<li><a href={'https://en.wikipedia.org/wiki/Pareto_distribution'}>Pareto Principle - Wikipedia</a></li>
					<li><a href={'https://www.youtube.com/watch?v=fCn8zs912OE'}>Most importantly, the Vsauce video that inspired this whole thing</a></li>
				</ul>
			</div>
		);

	}
}

module.exports = About;
