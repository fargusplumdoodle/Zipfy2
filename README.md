### Zipfy 2

#### Summary

This project is a more sophisticated reboot of a program I made 2 years ago in Python. Zipfs Law is very interesting to me, I would love for it to be true. However after making this, I can say with confidence that it is not.  

The primary goal of this web application is to better familiarize myself with NodeJS, React, Express, Python Django, and modern web development in general. So far this thing has taken me 3 days and has been a lot of fun.

#### What technologies were used

**NodeJS + Express + ReactJS**:  
Web front end, everything you see. I knew very little about Javascript in general before this.  

**Python + Django + Sqlite**:  
Backend API for collecting global statistics. If this were a larger project I would use Postgres for the database.  

**text-miner:**  
A node module for getting statistics out of text. When I did this program last time I made the engine that counted the words myself.  

**Docker + Docker-Compose:**  
For containerizing the Django app with the NodeJS app.

**Honorable mentions:**  
Babel, Pug, Markdown, Linux, Browser-Sync, Git, Github, and probably more that I cant think of. Wow, for this little app I used collectively millions of hours of humanity... Thanks for doing most of the work humanity!  

#### Zipfs Law

Zipfs Law is a statistical law that suggests that each words frequency a given corpus should show up inversely proportional to its rank in the frequency table.

What does that mean? A frequency table is if you counted the number of times each word in a document showed up ( the frequency of that word ) and ordered them from most frequent to least frequent. According to Zipfs law the 2nd most frequent word should show up half as much as the most frequent word, and the 3rd most frequent word should show up 1/3rd as often as the most frequent word, and so on for all of the words in the document.

Each word should show up **approximately** _1/n * m_ times, where _n_ is the words rank on the frequency table, and _m_ is the number of times the most frequent word in the document shows up.

[According to this wikipedia page](https://simple.wikipedia.org/wiki/Most_common_words_in_English) the most common words in the English language are:

1.  The
2.  be
3.  to
4.  of
5.  and

So check to see how your document compares to that, are you an outlier?  

### Pareto Principle

The Pareto Principle in this context would suggest that the top 20% most frequently appearing words should make up 80% of the document. This fits nicely into Zipfs Law, so I figured I would calculate that too. Also that way I got to learn how to make that nice animated slide bar.

### Further reading

*   [An interesting study on Zipfs Law in large datasets](https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0147073)
*   [Zipfs Law - Wikipedia](https://en.wikipedia.org/wiki/Zipf%27s_law)
*   [Most common words in english](https://simple.wikipedia.org/wiki/Most_common_words_in_English)
*   [Pareto Principle - Wikipedia](https://en.wikipedia.org/wiki/Pareto_distribution)
*   [Most importantly, the Vsauce video that inspired this whole thing](https://www.youtube.com/watch?v=fCn8zs912OE)

